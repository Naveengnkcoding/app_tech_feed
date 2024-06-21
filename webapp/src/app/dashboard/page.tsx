import Image from "next/image";
import type { AppProps } from "next/app";
import React from "react";
import Stat from "../subcomponents/Stat";

// import Sidebar from "../Sidebar";
const Dashboard = () => {
  return (
    <div className="h-screen text-black">
      <div className="flex flex-col gap-8 flex-wrap items-center justify-center mt-10 max-w-4xl mx-auto">
        <div className="flex flex flex-wrap gap-10">
            <div className="bg-white px-20 py-20 rounded-md shadow-lg">
              <a className="text-md font-bold">Customers</a>
              <Stat 
                img=""
                num={2000}
                desc="Loss"
              />
            </div>
            <div className="bg-white px-20 py-20 rounded-md shadow-lg">
            <a className="text-md font-bold">Employees</a>
              <Stat 
                img=""
                num={10000}
                desc="Profit"
              />
            </div>
            </div>
            <div className="flex flex-wrap gap-10">
            <div className="bg-white px-20 py-20 rounded-md shadow-lg">
            <a className="text-md font-bold">Orders</a>
              <Stat 
                img=""
                num={3000}  
                desc="Loss"
              />
            </div>
            <div className="bg-white px-20 py-20 rounded-md shadow-lg">
            <a className="text-md font-bold">Services</a>
              <Stat 
                img=""
                num={1000}
                desc="Profit"
              />
            </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
