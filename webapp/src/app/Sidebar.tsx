"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "./subcomponents/Dropdown";

const Sidebar = () => {
  // State to manage the open/close state of the sidebar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        // Conditional class based on isOpen
        // state to control width and visibility
        className={`bg-white text-black 
                    fixed h-screen transition-all 
                    duration-300 z-10 
                    ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        {/* Sidebar content divide-y divide-slate-200*/}
        <div className="flex gap-8 flex-col justify-left items-left p-4 ">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/Yaskawa_logo.svg.png"
              width={170}
              height={0}
              alt="img"
              className="mt-4"
            />
          </div>
          <div className="flex flex-col gap-6 p-2">
            <a
              href="/home"
              className="text-black text-lg font-bold
                          hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]"
            >
              Home
            </a>
          </div>
          <div className="flex flex-col gap-6 p-2">
            <a
              href="/dashboard"
              className="text-black text-lg font-bold
                          hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]"
            >
              Dashboard
            </a>
          </div>
          <div className="flex flex-col gap-6 p-2">
            <a
              href="/customers"
              className="text-black text-lg font-bold
                          hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]"
            >
              Customers
            </a>
          </div>
          <div className="flex flex-col gap-6 p-2">
            <a
              href="/employees"
              className="text-black text-lg font-bold
                          hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]"
            >
              Employees
            </a>
          </div>
          <div className="flex flex-col gap-6 p-2">
            <a
              href="/settings"
              className="text-black text-lg font-bold
                          hover:text-[#0056b9] hover:border-l-4 border-[#0056b9]"
            >
              Settings
            </a>
          </div>
          {/* Add more sidebar items here */}
        </div>
      </div>
      {/* Main content */}
      <div className="flex w-screen bg-white justify-between">
        <div
          className={`flex p-4 
                        ${isOpen ? "ml-64" : "ml-0"}`}
        >
          {/* Button to toggle sidebar */}
          <div className="ml-auto">
            <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
              {/* Toggle icon based on isOpen state */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  color="black"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-justify-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="flex p-3">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
