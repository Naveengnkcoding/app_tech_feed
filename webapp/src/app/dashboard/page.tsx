import Image from "next/image";
import type { AppProps } from "next/app";
import React from "react";
import Stat from "../subcomponents/Stat";

// import Sidebar from "../Sidebar";
const Dashboard = () => {
  return (
    <div className="h-screen text-black">
      <div className="flex flex-col flex-wrap items-center justify-center mt-10 max-w-4xl mx-auto">
        <div className="flex flex flex-wrap p-8 gap-20">
            <div className="bg-white px-20 py-20 justify-center items-center rounded-md shadow-lg">
              <Stat 
                img=""
                num={2000}
                desc="Profit"
              />
            </div>
            <div className="bg-white px-20 py-20 rounded-md shadow-lg">
              <Stat 
                img=""
                num={10000}
                desc="Profit"
              />
            </div>
            </div>
        <div className="flex flex justify-center items-center flex-wrap p-8 gap-20">
            <div className="bg-white px-20 py-20 rounded-md shadow-lg">
              <Stat 
                img=""
                num={300}  
                desc="Loss"
              />
            </div>
            <div className="bg-white px-20 py-20 rounded-md shadow-lg">
              <Stat 
                img=""
                num={100}
                desc="Profit"
              />
            </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
