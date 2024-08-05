"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaJarWheat } from "react-icons/fa6";
import jsVectorMap from "jsvectormap";
import { PiPawPrintLight } from "react-icons/pi";

const placeholderImg = "https://via.placeholder.com/200x100?text=Loading...";
const headerLogo = "/images/logo/header_logo.png";
const app_no = 22039170323;

interface ImageUrls {
  driveImg: string;
  alarmImg: string;
  eSign: string;
  workImg: string;
}

const Individual = () => {
  const pdfContentRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [images, setImages] = useState<ImageUrls>({
    driveImg: placeholderImg,
    alarmImg: placeholderImg,
    eSign: placeholderImg,
    workImg: placeholderImg,
  });

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls: ImageUrls = {
          driveImg:
            "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Dash%2Fs2.jpg?alt=media&token=9cbfb64e-2e17-4364-94ff-0ecd05d9a212",
          alarmImg:
            "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Dash%2Fs2.jpg?alt=media&token=9cbfb64e-2e17-4364-94ff-0ecd05d9a212",
          eSign:
            "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Sign%2F1720929450336s.png?alt=media&token=1550ffc1-a3fd-49e6-8c91-5311c2f81815",
          workImg:
            "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Dash%2Fs2.jpg?alt=media&token=9cbfb64e-2e17-4364-94ff-0ecd05d9a212",
        };

        const loadedImages: Partial<ImageUrls> = {};
        for (const [key, url] of Object.entries(imageUrls)) {
          const img = document.createElement("img");
          img.src = url;
          await new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => {
              console.error(`Failed to load image: ${url}`);
              resolve();
            };
          });
          loadedImages[key as keyof ImageUrls] = url;
        }

        setImages(loadedImages as ImageUrls);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  const generatePDF = async () => {
    if (pdfContentRef.current) {
      const content = pdfContentRef.current;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });
  
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      const canvas = await html2canvas(content, {
        scale: 1,
        useCORS: true,
        logging: true,
      });
  
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      // Calculate the scaling factor
      const scale = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  
      // Calculate the centered position
      const x = (pdfWidth - imgWidth * scale) / 2;
      const y = (pdfHeight - imgHeight * scale) / 2;
  
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, "JPEG", x, y, imgWidth * scale, imgHeight * scale);
      pdf.save("application_details.pdf");
    }
  };
  return (
    <div
      id="ModelContainer"
      className="fixed inset-0 z-[200] flex h-[540mm] w-full items-center shadow-2xl justify-center overflow-y-scroll bg-white/40 backdrop-blur-md"
    >
      <div className="h-full border-e-emerald-600 bg-white p-2 py-5 bg-white shadow-inner w-2/4">
        <div
          ref={pdfContentRef}
          className="relative w-[210mm] h-[620mm] items-center bg-white justify-center 2xsm:w-full xsm:w-full md:w-full"
          style={{ boxSizing: 'border-box' }}
        >
          <div className="jusitfy-between bg-white flex gap-56 p-3 items-start w-full ">
            <div className="flex flex-col px-4 gap-2 bg-white">
              <a className="text-2xl font-bold text-blue-600">
                Application Details
              </a>
              <div className="flex">
              <a className="text-xl font-bold text-black">
                Application Number:
              </a>
              <span className="my-1 text-black text-md">{app_no}</span>
              </div>
              <div className="flex">
                <a className="inline-flex text-xl font-bold text-black">
                  Engineer:
                </a>
                <input
                  type="text"
                  value="Naveen"
                  name="Engineer name"
                  disabled
                  className="bg-transparent px-2 text-black text-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-right items-end bg-white">
              <Image src={headerLogo} width={300} height={0} alt="Header" />
              <img
                className="w-[50%] h-0"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_HKLxlwH7VAJzZLN-BFB11PQVhpw9aafoMAEbCzIAn7xvXIKGzqcbctsDlteeaYXsQ&usqp=CAU"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <a className="text-xl font-bold text-white bg-blue-600 flex w-full justify-center items-center cursor-pointer p-1">Customer Info</a>
          </div>
          <div className="flex justify-around py-2  bg-white">
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Company Name</a>
              <input
                type="text"
                value="Yaskawa"
                name="Company Name"
                disabled
                className=" rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Customer Name</a>
              <input
                type="text"
                value="Customer"
                name="Customer Name"
                disabled
                className=" rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Address</a>
              <textarea
                value="Address"
                name="Address"
                disabled
                className=" h-9 rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">GST No</a>
              <input
                type="text"
                value="GSTIN9072814"
                name="GST No"
                disabled
                className=" rounded bg-transparent p-1 text-center text-black"
              />
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <a className="text-xl font-bold text-white bg-blue-600 w-full flex justify-center items-center p-1">Drive Details</a>
          </div>
          <div className="flex justify-around py-2  bg-white">
            <div className="flex flex-col items-center gap-2 ">
              <a className="text-lg font-bold text-black">Drive Type</a>
              <input
                type="text"
                value="Yaskawa Drive"
                name="Drive Type"
                disabled
                className=" rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Model</a>
              <input
                type="text"
                value="Drive Model"
                name="Model"
                disabled
                className=" rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">KW</a>
              <input
                type="tel"
                value="0.75KW"
                name="KW"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">AMPS</a>
              <input
                type="tel"
                value="AMPS"
                name="AMPS"
                disabled
                className=" rounded bg-transparent p-1 text-center text-black"
              />
            </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <a className="text-xl font-bold text-white bg-blue-600 flex justify-center items-center w-full p-1">Work Details</a>
          </div>
          <div className=" bg-white">
          <div className="flex justify-around py-2">
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Work Taken</a>
              <textarea
                value="Work Taken..."
                name="Drive Type"
                disabled
                className="h-9 rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black ">Service Type</a>
              <input
                type="text"
                value="New Drive Install"
                name="Service Type"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Work Status</a>
              <input
                type="text"
                value="No"
                name="Work Status"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <a className="text-lg font-bold text-black">
                Alarm & Error Faced by Customer
              </a>
              <textarea
                value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus"
                name="Alarm & Error Faced by Customer"
                disabled
                className="rounded bg-transparent h-20 w-60 text-center text-black"
              />
            </div>
          </div>
          <div className="flex justify-center gap-18 py-2">
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Check In Date</a>
              <input
                type="text"
                value="31/07/2024"
                name="Check In Date"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Taken for Office</a>
              <input
                type="text"
                value="Yes"
                name="Taken for Office"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
          </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <a className="flex w-full justify-center items-center text-xl font-bold text-white bg-blue-600 p-2 ">
              Service work Details
            </a>
          </div>
          <div className=" bg-white">
          <div className="flex justify-around py-2">
            <div className="flex flex-col items-center gap-2 ">
              <a className="text-lg font-bold text-black">Issue Faced</a>
              <textarea
                value="Problems "
                name="Issued Faced"
                disabled
                className="h-9 rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Process Date</a>
              <input
                type="text"
                value="12/07/2024"
                name="Process Date"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Type</a>
              <input
                type="text"
                value="Servicable"
                name="Work Status"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Complete Date</a>
              <input
                type="text"
                value="31/07/2024"
                name="Taken for Office"
                disabled
                className="rounded bg-transparent p-1 text-center text-black"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a className="text-lg font-bold text-black">Materials Required</a>
            <ul className="flex justify-around gap-20">
              <li className="list-disc text-black">Add</li>
              <li className="list-disc text-black">Add</li>
              <li className="list-disc text-black">Add</li>
              <li className="list-disc text-black">Add</li>
              <li className="list-disc text-black">Add</li>
            </ul>
          </div>
          </div>
          <div className="flex items-center justify-center py-2">
            <a className="text-xl font-bold text-white bg-blue-600 flex w-full justify-center items-center p-2">
              Customer Feedback
            </a>
          </div>
          <div className="flex justify-around py-2 bg-white">
            <div className="flex flex-col items-center gap-2 ">
              <a className="text-lg font-bold text-black">About the Company</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="About the company"
                  disabled
                  className="w-8 rounded bg-transparent p-1 text-center text-black"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">About the Engineer</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="About the Engineer"
                  disabled
                  className="w-8 rounded bg-transparent p-1 text-center text-black"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">About the Work</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="About the Work"
                  disabled
                  className="w-8 rounded bg-transparent p-1 text-center text-black"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a className="text-lg font-bold text-black">Star Rating</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="Star Rating"
                  disabled
                  className="w-8 rounded bg-transparent p-1 text-center text-black"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-around p-2 bg-white">
            <div className="flex items-center justify-between gap-30">
              <a className="text-md pb-2 font-bold text-black">Drive Image</a>
              <a className="text-md pb-2 font-bold text-black">Alarm Image</a>
              <a className="text-md pb-2 font-bold text-black">Work Image</a>
              <a className="text-md pb-2 font-bold text-black">E-Sign</a>
            </div>
            <div className="flex jusitfy-around gap-4">
              <Image src={images.driveImg} width={200} height={100} alt="Driveimg"/>
              <Image src={images.alarmImg} width={200} height={100} alt="alramimg"/>
              <Image src={images.workImg} width={200} height={100} alt="workimg"/>
              <Image src={images.eSign} width={200} height={100} alt="eSign"/>
            </div>
          </div>
          <hr />
        </div>
        <div className="fixed right-[900px] top-[1240px] z-[1000]">
            <div className="flex items-center justify-center">
              <button
                onClick={generatePDF}
                disabled={!imagesLoaded}
                className="flex items-center justify-center rounded bg-red-600 px-4 py-2 font-bold text-white"
              >
                {imagesLoaded ? "Generate" : "Loading Images..."}
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Individual;
