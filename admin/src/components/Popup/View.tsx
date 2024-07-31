"use client"
import Link from "next/link";
import PopUp from "./Index";
import { useState } from "react";

const View = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);
  return (
    <div className="flex w-full items-center justify-left p-5">
      <div>
        <button
          onClick={() => setOpenPopup(true)}
          className="rounded-md border border-red-500 bg-red-500 px-5 py-2 text-white hover:bg-red-600"
        >
          View
        </button>
        {/* <Link href="/Individualpage">View</Link> */}
      </div>
      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
      <PopUp openPopUp={isPopUpOpen} closePopUp={closePopUp} />
    </div>
  );
};

export default View;