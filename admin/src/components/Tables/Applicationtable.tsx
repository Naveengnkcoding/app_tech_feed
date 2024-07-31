"use client";
import next from "next";
import { useState } from "react";
import Applicationrow from "./Applicationrow";
// import View from "@/components/Popup/View";

const data = [
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Engineer",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
];

const Applicationtable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [downOpen, setDownopen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrop = () => {
    setOpen(!Open);
  };

  const toggleDown = () => {
    setDownopen(!downOpen);
  };


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex-column justify-left flex flex-wrap items-center gap-4 space-y-4 pb-4 sm:flex-row sm:space-y-0">
        <label className="sr-only">Search</label>
        <div className="relative">
          <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 rtl:right-0">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block w-80 rounded-lg border border-gray-600 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border focus:border-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search for items"
          />
        </div>
        <div className="relative flex text-center">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-gray-700 dark:text-white dark:focus:outline-none"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              Employees
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative text-center">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-gray-700 dark:text-white dark:focus:outline-none"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDrop}
            >
              Service type
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {Open && (
            <div
              className="absolute mt-2 flex w-50 flex-col items-center justify-center rounded-md bg-white text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-black block px-9 py-2 text-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  New installation
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  New service
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  New check
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="relative text-center">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-gray-700 dark:text-white dark:focus:outline-none"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDown}
            >
              Status
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {downOpen && (
            <div
              className="absolute mt-2 flex w-50 flex-col items-center justify-center rounded-md bg-white text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-14 py-2 text-lg text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  Completed
                </a>
                <a
                  href="#"
                  className="block px-14 py-2 text-lg text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  Pending
                </a>
                <a
                  href="#"
                  className="block px-14 py-2 text-lg text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  role="menuitem"
                >
                  Failed
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              S.no
            </th>
            <th scope="col" className="px-6 py-3">
              Engineer name
            </th>
            <th scope="col" className="px-6 py-3">
              Application no
            </th>
            <th scope="col" className="px-6 py-3">
              Company
            </th>
            <th scope="col" className="px-6 py-3">
              Customer name
            </th>
            <th scope="col" className="px-6 py-3">
              Drivetype
            </th>
            <th scope="col" className="px-6 py-3">
              Service type
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Applicationrow key={row.sno} row={row} />
          ))}
          {/* <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-2"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
              <label className="sr-only">checkbox</label>
            </div>
          </td>
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Microsoft Surface Pro
          </th>
          <td className="px-6 py-4">White</td>
          <td className="px-6 py-4">Laptop PC</td>
          <td className="px-6 py-4">$1999</td>
          <td className="px-6 py-4">
            <View />
          </td>
        </tr>
        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-3"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
              <label className="sr-only">checkbox</label>
            </div>
          </td>
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Magic Mouse 2
          </th>
          <td className="px-6 py-4">Black</td>
          <td className="px-6 py-4">Accessories</td>
          <td className="px-6 py-4">$99</td>
          <td className="px-6 py-4">
            <View />
          </td>
        </tr>
        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-3"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
              <label className="sr-only">checkbox</label>
            </div>
          </td>
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Apple Watch
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4">Accessories</td>
          <td className="px-6 py-4">$179</td>
          <td className="px-6 py-4">
            <View />
          </td>
        </tr>
        <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-3"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
              <label className="sr-only">checkbox</label>
            </div>
          </td>
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            iPad
          </th>
          <td className="px-6 py-4">Gold</td>
          <td className="px-6 py-4">Tablet</td>
          <td className="px-6 py-4">$699</td>
          <td className="px-6 py-4">
            <View />
          </td>
        </tr>
        <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-3"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
              <label className="sr-only">checkbox</label>
            </div>
          </td>
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Apple iMac 27"
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4">PC Desktop</td>
          <td className="px-6 py-4">$3999</td>
          <td className="px-6 py-4">
            <View />
          </td>
        </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Applicationtable;
