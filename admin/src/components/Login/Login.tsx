"use client"
import Image from "next/image";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      {/* bg-gray-50 */}
      <section className="bg-[#D3D3D3]  h-full overflow-hidden">
        <div className="flex flex-col items-center justify-center px-6 py-20 mx-auto md:h-screen md:w-screen lg:py-0 lg:h-screen lg:w-screen xl:h-screen xl:w-screen">
          <div className="w-full h-auto bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <a
              href="#"
              className="flex items-center justify-center text-2xl font-semibold text-gray-900 "
            >
              <Image src="/images/logo/header_logo.png" width={300} height={0} alt="login"
              />
            </a>
            <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-md font-bold text-black ">
                    Username
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="email"
                    className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Username/UserID"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-md font-bold text-black ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
                <Link href="/dashboard" className="text-white no-underline">
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 bg-[#0056b9] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-md px-5 py-2.5 text-center "
                  >
                    {" "}
                    Login
                  </button>
                </Link>
                <p className="flex items-center justify-left text-sm font-light text-gray-500 ">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-400 hover:underline hover:text-black "
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
