import Image from "next/image";
import type { AppProps } from "next/app";
import React from "react";

const Login = () => {
  return (
    <div>
      {/* bg-gray-50 */}
      <section className="bg-[#D3D3D3] dark:bg-[#0056b9] h-full overflow-hidden">
        <div className="flex flex-col items-center justify-center px-6 py-20 mx-auto md:h-screen md:w-screen lg:py-0 lg:h-screen lg:w-screen xl:h-screen xl:w-screen">
          <div className="w-full h-auto bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <a
              href="#"
              className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-[50%] h-auto p-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_HKLxlwH7VAJzZLN-BFB11PQVhpw9aafoMAEbCzIAn7xvXIKGzqcbctsDlteeaYXsQ&usqp=CAU"
                alt="logo"
              />
            </a>
            <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-md font-bold text-black dark:text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="email"
                    className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username/UserID"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-md font-bold text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    {/* <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div> */}
                  </div>
                </div>
                <a href="/home" className="text-white no-underline">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 bg-[#0056b9] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {" "}
                    Login
                  </button>
                </a>
                <p className="flex items-center justify-between text-sm font-light text-gray-500 dark:text-gray-400">
                  <a
                    href="#"
                    className="font-medium text-gray-400 text-left hover:underline hover:text-black dark:text-primary-500"
                  >
                    New Registration?
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-400 hover:underline hover:text-black dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
