import Image from "next/image";
import type { AppProps } from 'next/app'
import React from "react";
import Sidebar from "../Sidebar";
import Dashboard from "../dashboard/page";

const Home = () => { 
    return(
        <div className="scroll-smooth">
            <Sidebar /> 
            <div className="relative overflow-x-auto  sm:rounded-lg p-8">
    <table className="w-full shadow-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs font-bold border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">                    
                    S.no
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee_Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee_name
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone_number
                </th>
                <th scope="col" className="px-6 py-3">
                    Designation
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1
                </th>
                <td className="px-6 py-4">
                    TC_101
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                <td className="px-6 py-4">
                    TC_102
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    3
                </th>
                <td className="px-6 py-4">
                    TC_103
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    4
                </th>
                <td className="px-6 py-4">
                    TC_104
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    5
                </th>
                <td className="px-6 py-4">
                    TC_105
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    6
                </th>
                <td className="px-6 py-4">
                    TC_106
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    7
                </th>
                <td className="px-6 py-4">
                    TC_107
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    8
                </th>
                <td className="px-6 py-4">
                    TC_108
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    9
                </th>
                <td className="px-6 py-4">
                    TC_109
                </td>
                <td className="px-6 py-4">
                    Username
                </td>
                <td className="px-6 py-4">
                    +91 xxxx xxxxxx
                </td>
                <td className="px-6 py-4">
                    Employee
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<Dashboard />
        </div>
    )
}

export default Home;