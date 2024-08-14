"use client";
import next from "next";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import Applicationrow from "./Applicationrow";

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
    engname: "Harish",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "New Installation",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Naveen",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "New Installation",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Salah",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Kavi",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "New Service",
    status: "failed",
  },
  {
    sno: 1,
    engname: "Karthiga",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "New Check",
    status: "failed",
  },
  {
    sno: 1,
    engname: "Raji",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "New Service",
    status: "completed",
  },
  {
    sno: 1,
    engname: "Kabil",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "New Check",
    status: "pending",
  },
  {
    sno: 1,
    engname: "CEO",
    appno: 1201,
    comp: "Company",
    custname: "Customer",
    drtype: "Driver",
    srtype: "Service",
    status: "completed",
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Applicationtable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [downOpen, setDownopen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);
  const currentMonth = new Date().getMonth();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    console.log("Component re-rendered. Search term:", searchTerm);
  }, [searchTerm]);

  const handleSearchChange = (e: any) => {
    console.log("Search input changed:", e.target.value);
    setSearchTerm(e.target.value);
  };

  const filteredData = useMemo(() => {
    console.log("Filtering data...");
    return data.filter((row) => {
      const matchesSearch = Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesServiceType =
        selectedServiceType === "" ||
        row.srtype.toLowerCase().includes(selectedServiceType.toLowerCase());
      const matchesStatus =
        selectedStatus === "" || row.status.toLowerCase() === selectedStatus.toLowerCase();
      return matchesSearch && matchesServiceType && matchesStatus;
    });
  }, [searchTerm, selectedServiceType, selectedStatus]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrop = () => {
    setOpen(!Open);
  };

  const toggleDown = () => {
    setDownopen(!downOpen);
  };

  const toggleMonth = () => {
    setMonthOpen(!monthOpen);
  };

  return (
    <div
      className="relative overflow-x-auto sm:rounded-lg"
      key={searchTerm + selectedServiceType + selectedStatus}
    >
      <div className="flex-column justify-left flex flex-wrap items-center gap-4 space-y-6 pb-2 sm:flex-row sm:space-y-0">
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
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-100 rounded-lg border border-gray-600 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border focus:border-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
              {selectedServiceType || "Service type"}
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
                {["New installation", "New service", "New check"].map(
                  (type) => (
                    <a
                      key={type}
                      href="#"
                      className="block px-4 py-2 text-lg text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                      role="menuitem"
                      onClick={() => {
                        setSelectedServiceType(type);
                        setOpen(false);
                      }}
                    >
                      {type}
                    </a>
                  ),
                )}
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
              {selectedStatus || "Status"}
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
                {["Completed", "Pending", "Failed"].map((status) => (
                  <a
                    key={status}
                    href="#"
                    className="block px-14 py-2 text-lg text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    role="menuitem"
                    onClick={() => {
                      setSelectedStatus(status);
                      setDownopen(false);
                    }}
                  >
                    {status}
                  </a>
                ))}
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
              onClick={toggleMonth}
            >
              Month
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 1 1 11.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 01 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {monthOpen && (
            <div
              className="absolute mt-2 flex w-50 flex-col items-center justify-center rounded-md bg-white text-center shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                {months.map((month, index) => (
                  <a
                    key={month}
                    href="#"
                    className={`block px-14 py-2 text-lg ${
                      index === currentMonth
                        ? "font-bold text-blue-600"
                        : "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                    }`}
                    role="menuitem"
                  >
                    {month}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6">
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
              <th scope="col" className="px-8 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <Applicationrow key={row.sno} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicationtable;
