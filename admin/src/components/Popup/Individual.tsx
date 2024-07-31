"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const placeholderImg = "https://via.placeholder.com/200x100?text=Loading...";

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
          driveImg: "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Dash%2Fs2.jpg?alt=media&token=9cbfb64e-2e17-4364-94ff-0ecd05d9a212",
          alarmImg: "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Dash%2Fs2.jpg?alt=media&token=9cbfb64e-2e17-4364-94ff-0ecd05d9a212",
          eSign: "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Sign%2F1720929450336s.png?alt=media&token=1550ffc1-a3fd-49e6-8c91-5311c2f81815",
          workImg: "https://firebasestorage.googleapis.com/v0/b/skilltech-bb672.appspot.com/o/Dash%2Fs2.jpg?alt=media&token=9cbfb64e-2e17-4364-94ff-0ecd05d9a212",
        };

        const loadedImages: Partial<ImageUrls> = {};
        for (const [key, url] of Object.entries(imageUrls)) {
          const img = document.createElement('img');
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

      const canvas = await html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: true,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(
        imgData,
        "JPEG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.save("application_details.pdf");
    } else {
      console.error("PDF content not ready");
    }
  };
  return (
    <div
      id="ModelContainer"
      className="fixed inset-0 z-[200] flex h-[110vh] items-center justify-center overflow-y-scroll bg-black bg-opacity-20 backdrop-blur-sm"
    >
      <div className="w-3/4 border-e-emerald-600 bg-white p-2 py-5 shadow-inner md:w-1/2">
        <div
          ref={pdfContentRef}
          className="relative h-[112vh] w-3/4 items-center justify-center 2xsm:w-full xsm:w-full md:w-full"
        >
          <div className="flex justify-between gap-2 p-4">
            <div className="flex flex-col px-8">
              <a className="text-2xl font-bold text-black underline">
                Application Details
              </a>
              <a className="text-lg font-bold text-black">
                Application Number:
              </a>
              <span></span>
              <div className="flex gap-2">
                <a className="text-lg font-bold text-black">Engineer name:</a>
                <input
                  type="text"
                  value="Naveen"
                  name="Engineer name"
                  disabled
                  className="bg-none px-1 text-black"
                />
              </div>
            </div>
            <img
              className="h-auto w-[50%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_HKLxlwH7VAJzZLN-BFB11PQVhpw9aafoMAEbCzIAn7xvXIKGzqcbctsDlteeaYXsQ&usqp=CAU"
              alt="logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <a className="text-lg font-bold text-black">Customer Info</a>
          </div>
          <div className="flex justify-around py-2">
            <div className="flex flex-col gap-2 ">
              <a className="font-bold text-black">Company Name</a>
              <input
                type="text"
                value="Yaskawa"
                name="Company Name"
                disabled
                className=" rounded  p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Customer Name</a>
              <input
                type="text"
                value="Customer"
                name="Customer Name"
                disabled
                className=" rounded  p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Address</a>
              <textarea
                value="Address"
                name="Address"
                disabled
                className=" h-9 rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">GST No</a>
              <input
                type="text"
                value="GSTIN9072814"
                name="GST No"
                disabled
                className=" rounded  p-1 text-black"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a className="py-1 text-lg font-bold text-black">Drive Details</a>
          </div>
          <div className="flex justify-around py-2">
            <div className="flex flex-col gap-2 ">
              <a className="font-bold text-black">Drive Type</a>
              <input
                type="text"
                value="Yaskawa Drive"
                name="Drive Type"
                disabled
                className=" rounded  p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Model</a>
              <input
                type="text"
                value="Drive Model"
                name="Model"
                disabled
                className=" rounded  p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">KW</a>
              <input
                type="tel"
                value="0.75KW"
                name="KW"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">AMPS</a>
              <input
                type="tel"
                value="AMPS"
                name="AMPS"
                disabled
                className=" rounded  p-1 text-black"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a className="py-1 text-lg font-bold text-black">Work Details</a>
          </div>
          <div className="flex justify-around py-2">
            <div className="flex flex-col gap-2 ">
              <a className="font-bold text-black">Work Taken</a>
              <textarea
                value="Work Taken..."
                name="Drive Type"
                disabled
                className="h-9 rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Service Type</a>
              <input
                type="text"
                value="New Drive Install"
                name="Service Type"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Work Status</a>
              <input
                type="text"
                value="No"
                name="Work Status"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Taken for Office</a>
              <input
                type="text"
                value="Yes"
                name="Taken for Office"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Check In Date</a>
              <input
                type="text"
                value="31/07/2024"
                name="Check In Date"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <a className="font-bold text-black">
              Alarm & Error Faced by Customer
            </a>
            <textarea
              value="Alarm & Error Faced by Customer"
              name="Alarm & Error Faced by Customer"
              disabled
              className="rounded p-1 text-black"
            />
          </div>
          <div className="flex items-center justify-center">
            <a className="py-1 text-lg font-bold text-black">
              Service work Details
            </a>
          </div>
          <div className="flex justify-around py-2">
            <div className="flex flex-col gap-2 ">
              <a className="font-bold text-black">Issue Faced</a>
              <textarea
                value="Problems "
                name="Issued Faced"
                disabled
                className="h-9 rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Process Date</a>
              <input
                type="text"
                value="12/07/2024"
                name="Process Date"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Work Status</a>
              <input
                type="text"
                value="No"
                name="Work Status"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Taken for Office</a>
              <input
                type="text"
                value="Yes"
                name="Taken for Office"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Check In Date</a>
              <input
                type="text"
                value="31/07/2024"
                name="Check In Date"
                disabled
                className="rounded p-1 text-black"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a className="py-1 text-lg font-bold text-black">
              Customer Feedback
            </a>
          </div>
          <div className="flex justify-around py-2">
            <div className="flex flex-col gap-2 ">
              <a className="font-bold text-black">About the Company</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="About the company"
                  disabled
                  className="rounded p-1 text-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">About the Engineer</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="About the Engineer"
                  disabled
                  className="rounded p-1 text-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">About the Work</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="About the Work"
                  disabled
                  className="rounded p-1 text-black"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a className="font-bold text-black">Star Rating</a>
              <div className="flex gap-1">
                <TiStarFullOutline fill="#FFD700" size={32} />
                <input
                  type="tel"
                  value="4.5"
                  name="Star Rating"
                  disabled
                  className="rounded p-1 text-black"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around p-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <a className="text-md pb-2 font-bold text-black">Drive Image</a>
              <Image src={images.driveImg} width={200} height={100} alt="Drive" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <a className="text-md pb-2 font-bold text-black">Alarm Image</a>
              <Image src={images.alarmImg} width={200} height={100} alt="Alarm" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <a className="text-md pb-2 font-bold text-black">Work Image</a>
              <Image src={images.workImg} width={200} height={100} alt="Work" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <a className="text-md pb-2 font-bold text-black">Esign</a>
              <Image src={images.eSign} width={200} height={100} alt="E-sign" />
            </div>
        </div>
      </div>
      <div className="absolute bottom-20 left-[900px] z-[1000]">
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
