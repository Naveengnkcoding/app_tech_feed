import PopUp from "@/components/Popup/Index";
import Image from "next/image";

const driveimg = "";

const Individual = () => {
  return (
    <div className="bg-white h-[300vh]">
      <div className="fixed inset-0 flex justify-center overflow-y-scroll">
        <div className="h-[300vh] overflow-scroll-y relative  w-[2480px] border-e-emerald-600 bg-white p-2 py-5 shadow-xl md:w-1/2">
          <div className="absolute w-[2480px] items-center justify-center 2xsm:h-[300vh] 2xsm:w-full xsm:h-[300vh] xsm:w-full md:h-[300vh] md:w-full lg:h-[300vh] xl:h-[300vh] 2xl:h-[300vh]">
            <h2 className="py-1 text-center text-xl font-semibold">
              Application details
            </h2>
            <div className="flex items-center justify-center gap-2">
              <a className="text-regular text-black">Token number:</a>
              <span className="text-xl font-bold text-black">Token number</span>
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Engineer Name:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Engineer name"
                value="Engineer name"
              />
            </div>
            <a className="text-black text-lg font-bold flex justify-center">Customer Info</a>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Company Name:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Company name"
                value="Company name"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Customer Name:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Customer name"
                value="Customer name"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Address:</a>
              <textarea
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Address"
                value="Address"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">GST No:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="GST No"
                value="GST No"
              />
            </div>
            <a className="text-black text-lg font-bold flex justify-center">Drive Details</a>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Drive Type:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Yaskawa Drive"
                value="Drive Type"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Model:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Drive Model"
                value="Drive Model"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">KW:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="KW"
                value="0.75KW"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">AMPS:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="AMPS"
                value="AMPS."
              />
            </div>
            <div className="justfiy-start flex gap-2 p-4">
              <a className="text-md font-bold text-black">Drive Image:</a>
              <Image src={driveimg} width={100} height={100} alt="img" className="flex justify-center items-center"/>
            </div>
            <a className="text-black text-lg font-bold flex justify-center">Work Details</a>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Work Taken:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Work Taken"
                value="Work Taken..."
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Service Type:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Service Type"
                value="New Drive Install"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Work Status:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Work Status"
                value="Completed"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Taken for Office:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Taken for Office"
                value="Yes"
              />
            </div>
            <a className="text-black text-lg font-bold flex justify-center">Customer Feedback</a>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Taken for Office:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Taken for Office"
                value="Yes"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">About the Company:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="About Company"
                value="About Company.."
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">About the Engineer:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="About Engineer"
                value="About Engineer.."
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">About the Work:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="About Work"
                value="About Work.."
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">Star Rating:</a>
              <input
                type="text"
                className="border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="Star Rating"
                value="5"
              />
            </div>
            <div className="justfiy-start flex items-center gap-2 p-4">
              <a className="text-md font-bold text-black">E-Sign:</a>
              <input
                type="text"
                className="w-50 rounded-md h-25 border-1 border border-b-black p-2 outline-none focus:border focus:border-b-black focus:outline-none"
                disabled
                name="E-Sign"
                value="E-Sign"
              />
            </div>
            <div className="flex justify-center items-center py-3">
              <button className="bg-red-600 w-400 h-10 cursor-pointer border-none outline-none rounded-md p-4 flex justify-center items-center font-bold text-md text-white">Generate</button>
            </div>
          </div>
        </div>
      </div>
    </div>            
  )
}


export default Individual;
