import Image from "next/image";
import type { AppProps } from 'next/app'
import React from "react";
import Sidebar from "../components/SideBar/Sidebar";
import Dashboard from "../dashboard/page";
import Customers from "../customers/page";
import Employees from "../employees/page";
import Settings from "../settings/page";

const Home = () => { 
    return(
        <div>
            <Dashboard />
            <Customers />
            <Employees />
            <Settings />
        </div>
    )
}

export default Home;