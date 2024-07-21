"use client";
import React, { useState } from "react";
import PopUp from "./Index";
import Link from "next/link";

const View = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);
  return (
    <div className="flex w-full items-center justify-left p-5">
      <div>
        <button
          onClick={() => setIsPopUpOpen(true)}
          className="rounded-md border border-red-500 bg-red-500 px-5 py-2 text-white hover:bg-red-600"
        >
          View
        </button>
        {/* <Link href="/Individualpage">View</Link> */}
      </div>
      <PopUp openPopUp={isPopUpOpen} closePopUp={closePopUp} />
    </div>
  );
};

export default View;
