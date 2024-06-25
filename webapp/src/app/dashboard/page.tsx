import Image from "next/image";
import type { AppProps } from "next/app";
import React from "react";
import Stat from "../subcomponents/Stat";

const Dashboard = () => {
  return (
    <div className="bg-white h-[50vh ] text-black " id="dashboard">
      <div className="flex justify-center text-2xl text-black font-bold py-4">
        Dashboard
      </div>
      <div className=" flex justify-center items-center">
        <section className="grid gap-6 md:grid-cols-4 p-4 md:p-8 max-w-5xl mx-auto w-full ">
          <div className="p-6 bg-white shadow rounded-2xl ">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 ">
                Customers
              </dt>
              <dd className="text-5xl font-light md:text-6xl dark:text-white">
                <Stat img="" num={2000} desc="" />
              </dd>
              <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 ">
                <span>900 increase</span>
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 15.25V6.75H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  ></path>
                </svg>
              </dd>
            </dl>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl ">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 ">
                Employees
              </dt>

              <dd className="text-5xl font-light md:text-6xl ">
                <Stat img="" num={30} desc="" />
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-red-500 ">
                <span>7% Loss</span>

                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 8.75V17.25H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 17L6.75 6.75"
                  ></path>
                </svg>
              </dd>
            </dl>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl ">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 ">
                Orders
              </dt>

              <dd className="text-5xl font-light md:text-6xl ">
                <Stat img="" num={444} desc="" />
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 ">
                <span>3% increase</span>

                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 15.25V6.75H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  ></path>
                </svg>
              </dd>
            </dl>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl ">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500 ">
                Services
              </dt>

              <dd className="text-5xl font-light md:text-6xl ">
                <Stat img="" num={1209} desc="" />
              </dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-green-500 ">
                <span>7% increase</span>

                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 15.25V6.75H8.75"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  ></path>
                </svg>
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
