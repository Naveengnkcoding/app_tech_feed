"use client";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

const driveimg = "";
const checkInimg = "";
const eSign = "";

const Individual = () => {
  const contentRef = useRef(null);
  const generatePDF = async () => {
    if (contentRef.current) {
      const content = contentRef.current;
      const pdf = new jsPDF("p", "mm", "a4");
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();

      // Set white background for each page
      const setWhiteBackground = () => {
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageWidth, pageHeight, "F");
      };

      // Capture content
      const canvas = await html2canvas(content, {
        backgroundColor: "#ffffff", // Ensure white background during capture
      });
      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pageWidth;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = pdfHeight;
      let position = 0;

      // First page
      setWhiteBackground();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        setWhiteBackground(); // Set white background for new page
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("application_details.pdf");
    }
  };

  return (
    <div className="bg-white">
      <div className="fixed inset-0 flex justify-center overflow-y-scroll">
        <div
          ref={contentRef}
          className="overflow-scroll-y relative h-[430vh] w-[80vw] border-e-emerald-600 bg-white p-2 py-5 shadow-xl md:w-1/2"
        >
          <div className="absolute w-[80vw] items-center justify-center 2xsm:h-[300vh] 2xsm:w-full xsm:h-[300vh] xsm:w-full md:h-[300vh] md:w-full lg:h-[300vh] xl:h-[300vh] 2xl:h-[300vh]">
            <h2 className="py-1 text-center text-xl font-semibold">
              Application details
            </h2>
            <div className="flex items-center justify-center gap-2">
              <a className="text-regular text-black">Token number:</a>
              <span className="text-xl font-bold text-black">Token number</span>
            </div>
            <a className="flex items-center justify-center py-2 text-lg font-bold text-black">
              Engineer Details
            </a>
            <div className="flex items-center justify-center px-2 py-4">
              <div className="flex flex-col gap-2">
                <a className="text-lg font-bold text-black">Engineer Name</a>
                <input
                  className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                  name="Engineer Name"
                  value="Naveen"
                  disabled
                />
              </div>
            </div>
            <a className="flex items-center justify-center py-2 text-lg font-bold text-black">
              Customer Info
            </a>
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Company Name</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Company Name"
                    value="Yaskawa"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Customer Name</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Customer Name"
                    value="Customer"
                    disabled
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Address</a>
                  <textarea
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Address"
                    value="Tirupur,Tamil Nadu,India"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Gst No</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="GST No"
                    value="GSTIN9823872"
                    disabled
                  />
                </div>
              </div>
            </div>
            <a className="flex items-center justify-center py-2 text-lg font-bold text-black">
              Drive Details
            </a>
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Drive Type</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Drive Type"
                    value="Yaskawa Drive"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Model</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Model"
                    value="Drive Model"
                    disabled
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">KW</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="KW"
                    value="0.75KW"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">AMPS.</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="AMPS."
                    value="Amps"
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <a className="flex flex-col items-center justify-center text-lg font-bold text-black">
                  Drive img
                </a>
                <img
                  src={driveimg}
                  width={200}
                  height={200}
                  className="flex items-center justify-center border-none outline-none"
                />
              </div>
            </div>
            <a className="flex items-center justify-center text-lg font-bold text-black">
              Work Details
            </a>
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Drive Type</a>
                  <textarea
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Drive Type"
                    value="Yaskawa Drive"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Service Type</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Service Type"
                    value="New Drive Install"
                    disabled
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Work Status</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Work Status"
                    value="No"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">
                    Taken for Office
                  </a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Taken for Office"
                    value="Yes"
                    disabled
                  />
                </div>
              </div>
              <div className="flex justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Check In Date</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Check In Date"
                    value="20/07/2024"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">
                    Taken for Office
                  </a>
                  <img
                    src={checkInimg}
                    width={200}
                    height={200}
                    className="flex items-center justify-center border-none outline-none"
                  />
                </div>
              </div>
            </div>
            <a className="flex items-center justify-center text-lg font-bold text-black">
              Service Work Details
            </a>
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Issue Faced</a>
                  <textarea
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Issue Faced"
                    value="Problems Faced in Drive"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Process Date</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Process Date"
                    value="20/07/2024"
                    disabled
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Type</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Type"
                    value="Servicable"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Complete Date</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Complete Date"
                    value="20/07/2024"
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 py-8">
                <a className="text-lg font-bold text-black">
                  Materails Replaced
                </a>
                <ul className="flex flex-col items-center justify-center">
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                  <li className="list-disc text-black">Add</li>
                </ul>
              </div>
            </div>
            <a className="flex items-center justify-center py-4 text-lg font-bold text-black">
              Customer Feedback
            </a>
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">
                    About the Company
                  </a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="About the Company"
                    value="About Company.."
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">
                    About the Engineer
                  </a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="About the Engineer"
                    value="About Engineer.."
                    disabled
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-20 px-2 py-4">
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">About the Work</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="About the Work"
                    value="About Work.."
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <a className="text-lg font-bold text-black">Star Rating</a>
                  <input
                    className="rounded-md border-none bg-gray-100 p-3 text-black outline-2 outline-black"
                    name="Star Rating"
                    value="5"
                    disabled
                  />
                </div>
              </div>
              <div className="flex justify-center gap-20 px-2 py-4">
                <div className="flex flex-col items-center justify-center">
                  <a className="flex flex-col items-center justify-center text-lg font-bold text-black">
                    E-Sign
                  </a>
                  <img
                    src={eSign}
                    width={200}
                    height={200}
                    className="flex items-center justify-center border-none outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={generatePDF}
                className="flex items-center justify-center rounded-lg border-none bg-red-600 px-4 py-4 font-bold text-white outline-none hover:border-none hover:outline-none"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
