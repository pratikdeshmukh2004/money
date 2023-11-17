import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faUnlockKeyhole,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="pt-32 text-center">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-700">
          <div class="animate-text bg-gradient-to-r from-primary via-secondary to-fourth text-transparent bg-clip-text transition-colors duration-500">
            <p class="lg:text-5xl text-3xl font-extrabold">
              Create New Money Account
            </p>
          </div>
        </h1>
        <div className="bg-white rounded-md px-10 lg:px-28 w-full lg:w-3/6 lg:my-5 my-5 mx-auto">
          {errorMessage ? (
            <p className="text-rose-600 font-medium">{errorMessage}</p>
          ) : (
            <p className="text-sm text-gray-600">
              Sign up today to unlock powerful tools that help you plan your
              budget, track your expenses, and achieve your financial
              milestones.
            </p>
          )}
          <form
            onChange={handleChange}
            onSubmit={handleLogin}
            className="my-10 lg:w-5/6 w-full mx-auto grid gap-3"
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
                Enter your name
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
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
                  id="sheet-link"
                  class="block px-2.5 pb-2.5 pt-2 w-full text- font-medium text-gray-700 bg-transparent rounded-md appearance-none border focus:outline-none focus:ring-0 border-gray-500 focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  for="sheet-link"
                  class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary peer-focus:font-bold cursor-text peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Enter your password
                </label>
              </div>
            </div>
            <div class="relative flex items-center">
              <div class="flex-grow border-t border-secondary"></div>
              <span class="flex-shrink mx-4 text-xs text-secondary">Connect Existing Sheet</span>
              <div class="flex-grow border-t border-secondary"></div>
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
                Enter google sheet link (optional)
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
                <FontAwesomeIcon icon={faUserPlus} className="mr-3" />
              )}
              {errorMessage ? "Try again" : "Create new account"}
            </button>
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

export default Login;
