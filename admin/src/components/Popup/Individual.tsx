"use client";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

const driveimg = "";
const checkInimg = "";
const eSign = "";

const Individual = () => {
  return (
    <div className="fixed inset-0 flex flex-1 items-center justify-center bg-white bg-opacity-50">
      <div className="w-full max-w-4xl rounded bg-white p-6 shadow-2xl">
        <div className="relative aspect-[1/1.414] w-full">
          <div className="absolute flex flex-col items-center justify-center p-4">
            <div className="w-full h-full overflow-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
