"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaJarWheat } from "react-icons/fa6";
import { PiPawPrintLight } from "react-icons/pi";

const placeholderImg = "https://via.placeholder.com/200x100?text=Loading...";
const headerLogo = "/images/logo/header_logo.png";
const app_no = 22039170323;
const engName = "Naveen";

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
        format: "a4",
      });

      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("application_details.pdf");
    }
  };

  return (
    <div id="ModelContainer" className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-white/40 backdrop-blur-md">
      <div
        className="bg-white shadow-lg"
        style={{ width: "210mm", height: "297mm", position: "relative" }}
      >
        <div
          ref={pdfContentRef}
          className="relative flex flex-col items-center border-2 border-black bg-white p-8 shadow-md"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="flex w-full justify-between gap-10 pb-2">
            <div className="flex flex-col gap-2">
              <a className="text-2xl font-bold text-blue-600">
                Application Details
              </a>
              <div className="flex items-center gap-2">
                <a className="flex text-lg font-bold text-black">
                  Application&nbsp;Number
                </a>
                <span>{app_no}</span>
              </div>
              <div className="flex items-center gap-2">
                <a className="text-lg font-bold text-black">Engineer Name</a>
                <span>{engName}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Image src={headerLogo} width={300} height={150} alt="header" />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_HKLxlwH7VAJzZLN-BFB11PQVhpw9aafoMAEbCzIAn7xvXIKGzqcbctsDlteeaYXsQ&usqp=CAU"
                className="h-auto w-[50%]"
              ></img>
            </div>
          </div>
          <div className="flex w-full items-center justify-center bg-blue-600">
            <a className="w -full text-md flex items-center justify-center bg-blue-600 p-1 font-bold text-white">
              Customer Info
            </a>
          </div>
          <div className="flex items-center justify-around py-2">
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Company Name</a>
              <input
                type="text"
                value="Yaskawa"
                name="Company Name"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Customer Name</a>
              <input
                type="text"
                value="Naveen"
                name="Customer Name"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Address</a>
              <input
                type="text"
                value="Address"
                name="Address"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">GST No</a>
              <input
                type="text"
                value="GSTIN424920942"
                name="GST No"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center bg-blue-600">
            <a className="w -full text-md flex items-center justify-center bg-blue-600 p-1 font-bold text-white">
              Drive Details
            </a>
          </div>
          <div className="flex items-center justify-around py-2">
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Drive Type</a>
              <input
                type="text"
                value="Yaskawa Drive"
                name="Drive Type"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Model</a>
              <input
                type="text"
                value="Drive Model"
                name="Model"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">KW</a>
              <input
                type="tel"
                value="0.75"
                name="KW"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">AMPS</a>
              <input
                type="tel"
                value="Amps"
                name="AMPS"
                disabled
                className="bg-none text-center text-black"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center bg-blue-600">
            <a className="w -full text-md flex items-center justify-center bg-blue-600 p-1 font-bold text-white">
              Work Details
            </a>
          </div>
          <div className="flex justify-around items-center py-2">
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Work Taken</a>
              <textarea
                value="Content"
                name="Work Taken"
                disabled
                className="h-30 w-40 bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex flex-col items-center justify-center">
                  <a className="text-md font-bold text-black">Service Type</a>
                  <input
                    value="New Drive Install"
                    name="Service Type"
                    className="bg-none text-center text-black"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <a className="text-md font-bold text-black">Work Status</a>
                  <input
                    value="No"
                    name="Work Status"
                    className="bg-none text-center text-black"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center justify-center">
                  <a className="text-md font-bold text-black">
                    Taken for Office
                  </a>
                  <input
                    value="Yes"
                    name="Taken for Office"
                    className="bg-none text-center text-black"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <a className="text-md font-bold text-black">Check In Date</a>
                  <input
                    value="30/07/2024"
                    name="Check In Date"
                    className="bg-none text-center text-black"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">
                Alarm Error Faced
              </a>
              <textarea
                value="Content"
                name="Work Taken"
                disabled
                className="h-30 w-40 bg-none text-center text-black"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center bg-blue-600">
            <a className="w -full text-md flex items-center justify-center bg-blue-600 p-1 font-bold text-white">
              Service Work Details
            </a>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Issues Faced</a>
              <textarea
                value="Content"
                name="Work Taken"
                disabled
                className="h-30 w-60 bg-none text-center text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <div className="flex flex-col justify-center items-center">
                  <a className="text-md font-bold text-black">Process Date</a>
                  <input value="30/07/2024" name="Process Date" disabled className="text-center text-center bg-none"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <a className="text-md font-bold text-black">Type</a>
                  <input value="Servicable" name="Type" disabled className="text-center text-center bg-none"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <a className="text-md font-bold text-black">Complete Date</a>
                  <input value="30/07/2024" name="Complete Date" disabled className="text-center text-center bg-none"/>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
              <a className="text-md font-bold text-black">Materials Replaced</a>
                <ul className="flex gap-20">
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center bg-blue-600">
            <a className="w -full text-md flex items-center justify-center bg-blue-600 p-1 font-bold text-white">
              Customer Feedback
            </a>
          </div>
          <div className="flex items-center justify-around gap-10 py-2">
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">About the Company</a>
              <div className="flex">
                <TiStarFullOutline size={20} fill="#FFD700"/>
                <input
                type="tel"
                value="4.5"
                name="About the Company"
                disabled
                className="bg-none text-center w-10 text-black"
              />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">About the Engineer</a>
              <div className="flex">
                <TiStarFullOutline size={20} fill="#FFD700"/>
                <input
                type="tel"
                value="4.5"
                name="About the Engineer"
                disabled
                className="bg-none text-center w-10 text-black"
              />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">About the Work</a>
              <div className="flex">
                <TiStarFullOutline size={20} fill="#FFD700"/>
                <input
                type="tel"
                value="4.5"
                name="About theWork"
                disabled
                className="bg-none text-center w-10 text-black"
              />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a className="text-md font-bold text-black">Star Rating</a>
              <div className="flex">
                <TiStarFullOutline size={20} fill="#FFD700"/>
                <input
                type="tel"
                value="4.5"
                name="Star Rating"
                disabled
                className="bg-none text-center w-10 text-black"
              />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center bg-blue-600">
            <a className="w -full text-md flex items-center justify-center bg-blue-600 p-1 font-bold text-white">
              Image Details
            </a>
          </div>
          <div className="flex flex-col justify-center items-center py-2">
            <div className="flex justify-around gap-20">
              <div className="flex flex-col justify-center items-center">
                <a className="text-md font-bold text-black">Drive Image</a>
                <Image src={images.driveImg} width={150} height={75} alt="driveimage" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <a className="text-md font-bold text-black">Alarm Image</a>
                <Image src={images.alarmImg} width={150} height={75} alt="alarmimage" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <a className="text-md font-bold text-black">Work Image</a>
                <Image src={images.workImg} width={150} height={75} alt="workimage" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <a className="text-md font-bold text-black">eSign</a>
                <Image src={images.eSign} width={150} height={75} alt="eSign" />
              </div>
              </div>
            </div>
        </div>
        <button
          onClick={generatePDF}
          className="no-print absolute bottom-20 right-90 rounded bg-red-600 px-4 py-2 font-bold text-white"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Individual;
