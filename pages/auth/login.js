import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import classNames from "../../constants/custom";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = "";
  const handleLogin = "";
  const credentials = "";
  const showPassword = false;
  const loading = false;

  return (
    <div className="mx-5">
      <div className="mx-auto lg:w-3/6 w-full pt-32 text-center">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-700">
          <div class="animate-text bg-gradient-to-r from-primary via-secondary to-fourth text-transparent bg-clip-text transition-colors duration-500">
            <p class="lg:text-5xl text-3xl font-extrabold">Welcome to Money</p>
          </div>
        </h1>
        <div className="bg-white rounded-md px-10 lg:px-28 w-full lg:w-4/6 lg:my-5 my-5 mx-auto">
          {errorMessage ? (
            <p className="text-rose-600 font-medium">{errorMessage}</p>
          ) : (
            <p className="text-sm text-gray-600">
              Please enter your login credentials to access your account
            </p>
          )}
          <form
            onChange={handleChange}
            onSubmit={handleLogin}
            className="my-10 grid gap-3"
          >
            <div class="relative">
              <input
                type="text"
                id="email"
                value={credentials.email}
                class="block px-2.5 pb-2.5 pt-2 w-full text- font-medium text-gray-700 bg-transparent rounded-md appearance-none border focus:outline-none focus:ring-0 border-gray-500 focus:border-secondary peer"
                placeholder=" "
              />
              <label
                for="email"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:font-bold cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Enter your email
              </label>
            </div>
            <div class="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                id="password"
                class="block px-2.5 pb-2.5 pt-2 w-full text- font-medium text-gray-700 bg-transparent rounded-md appearance-none border focus:outline-none focus:ring-0 border-gray-500 focus:border-secondary peer"
                placeholder=" "
              />
              <label
                for="password"
                class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:font-bold cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Enter password
              </label>
            </div>

            <button
              type="submit"
              title="Enter credentials to login"
              disabled={!credentials.email || !credentials.password || loading}
              className={classNames(
                "w-full hover:bg-primary mt-3  disabled:bg-secondary/2 font-bold py-2 text-white rounded-md",
                errorMessage.length ? "bg-rose-500" : "bg-secondary"
              )}
            >
              {loading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="mr-3 animate-spin"
                />
              ) : (
                <FontAwesomeIcon icon={faUnlockKeyhole} className="mr-3" />
              )}
              {errorMessage ? "Try again" : "Login"}
            </button>
            <p className="text-sm text-gray-700">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-secondary font-bold hover:text-primary"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
