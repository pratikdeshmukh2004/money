import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faUnlockKeyhole,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";

import classNames from "../../constants/custom";
import { useContext, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import sheetApiContext from "@/contexts/SheetContext";
import bcrypt from "bcryptjs";
import LoaderContext from "@/contexts/LoaderContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { loadDoc } = useContext(sheetApiContext);
  const { setLoading } = useContext(LoaderContext);
  const router = useRouter();

  const handleSuccess = (credentialResponse) => {
    setLoading(true);
    const token = credentialResponse.access_token;
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(async (userInfo) => {
        console.log("====================================");
        console.log(userInfo, "userInfo....");
        console.log("====================================");
        const { data, doc } = await loadDoc();
        const user = data.filter((user) => {
          return user.get("Email") === userInfo.email;
        });
        if (user.length) {
          toast.error("User already exists");
          setLoading(false);
          return;
        }
        const newUser = {
          Name: userInfo.name,
          Email: userInfo.email,
          Password: "",
        };
        doc.sheetsByIndex[0]
          .addRow(newUser)
          .then((d) => {
            setLoading(false);
            setCredentials({
              name: "",
              email: "",
              password: "",
            });
            toast.success("Singup successfully.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
            // router.push("/auth/login");
          })
          .catch((error) => {
            setLoading(false);
            console.error("Failed to create user: ", error);
            toast.error("Failed to create user");
          });
        router.replace("/auth/login");
      })
      .catch((error) => {
        console.error("Failed to fetch user info: ", error);
        setLoading(false);
      });
  };

  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/spreadsheets",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password || !credentials.name) {
      toast.error("Please enter your credentials");
      return;
    }
    setLoading(true);
    const { data, doc } = await loadDoc();
    const user = data.filter((user) => {
      return user.get("Email") === credentials.email;
    });
    if (user.length) {
      toast.error("User already exists");
      setLoading(false);
      return;
    }
    const salt = await bcrypt.genSalt(10); // 10 is the salt rounds
    const hashedPassword = await bcrypt.hash(credentials.password, salt);
    const newUser = {
      Name: credentials.name,
      Email: credentials.email,
      Password: hashedPassword,
    };
    doc.sheetsByIndex[0]
      .addRow(newUser)
      .then((d) => {
        setLoading(false);
        setCredentials({
          name: "",
          email: "",
          password: "",
        });
        toast.success("Singup successfully.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        router.push("/auth/login");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Failed to create user: ", error);
        toast.error("Failed to create user");
      });
  };

  return (
    <div className="mx-5">
      <Head>
        <title>Sign Up - Money</title>
      </Head>
      <div className="pt-16 lg:pt-20 text-center">
        <img src="/logo.png" width={120} className="mx-auto" />
        <h1 className="text-2xl mt-5 lg:text-4xl font-extrabold text-gray-700">
          <div class="animate-text bg-gradient-to-r from-primary via-secondary to-fourth text-transparent bg-clip-text transition-colors duration-500">
            <p class="lg:text-3xl text-3xl font-extrabold">
              Create New Money Account
            </p>
          </div>
        </h1>
        <div className="bg-white rounded-md px-10 lg:px-28 w-full lg:w-3/6 lg:my-5 my-5 mx-auto">
          <p className="text-sm text-gray-600">
            Sign up today to unlock powerful tools that help you plan your
            budget, track your expenses, and achieve your financial milestones.
          </p>

          <form
            onChange={handleChange}
            onSubmit={handleSignup}
            className="my-10 lg:w-5/6 w-full mx-auto grid gap-3"
          >
            <div class="relative">
              <input
                type="text"
                id="name"
                value={credentials.name}
                class="block px-2.5 pb-2.5 pt-2 w-full text- font-medium text-gray-700 bg-transparent rounded-md appearance-none border focus:outline-none focus:ring-0 border-gray-500 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="name"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:font-bold cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Enter your name
              </label>
            </div>
            <div class="relative">
              <input
                type="email"
                id="email"
                value={credentials.email}
                class="block px-2.5 pb-2.5 pt-2 w-full text- font-medium text-gray-700 bg-transparent rounded-md appearance-none border focus:outline-none focus:ring-0 border-gray-500 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="email"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:font-bold cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Enter your email
              </label>
            </div>
            <div class="relative">
              <input
                type="password"
                id="password"
                value={credentials.password}
                class="block px-2.5 pb-2.5 pt-2 w-full text- font-medium text-gray-700 bg-transparent rounded-md appearance-none border focus:outline-none focus:ring-0 border-gray-500 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="password"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:font-bold cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Enter your password
              </label>
            </div>

            <button
              type="submit"
              title="Enter credentials to login"
              className={classNames(
                "w-full hover:bg-primary/90 mt-3  disabled:bg-secondary/2 font-bold py-2 text-white rounded-md bg-primary"
              )}
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
              Create new account
            </button>
            <div class="relative flex items-center">
              <div class="flex-grow border-t border-secondary"></div>
              <span class="flex-shrink mx-4 text-xs text-secondary">OR</span>
              <div class="flex-grow border-t border-secondary"></div>
            </div>
            {/* Google Login Button */}
            <div className="google-login">
              <button
                onClick={login}
                type="button"
                className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>
            </div>
            <p className="text-sm text-gray-700">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-secondary font-bold hover:text-primary"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
