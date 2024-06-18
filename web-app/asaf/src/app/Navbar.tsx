import Image from "next/image";
import type { AppProps } from 'next/app'
import React from "react";

const Navbar = () => {
    return(
        <div>
            <div className="bg-white p-6 shadow-lg flex flex-wrap justify-between">
                <div className=" flex justify-left text-left gap-7">
                    <Image src="/images/menu.png" alt="logo" width={30} height={20} className="hover: cursor-pointer"/>
                    <Image src="/images/Yaskawa_logo.svg.png" alt="logo" width={170} height={0} className="hover: cursor-pointer"/>
                </div>
                <div className="flex flex-wrap gap-5">
                    <a href="#" className="font-bold font-arial text-md text-black hover:cursror-pointer hover:underline">Home</a>
                    <a href="#" className="font-bold font-arial text-md text-black hover: cursror-pointer hover:underline">Dashboard</a>
                    <a href="#" className="font-bold font-arial text-md text-black hover: cursror-pointer hover:underline">Customers</a>
                    <a href="#" className="font-bold font-arial text-md text-black hover: cursror-pointer hover:underline">Employees</a>
                    <a href="#" className="font-bold font-arial text-md text-black hover: cursror-pointer hover:underline">Settings</a>
                    <div>
                        <Image src='/images/profile-user.png' alt="profile" width={30} height={30} className="focus: cursor-pointer" /> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Navbar;