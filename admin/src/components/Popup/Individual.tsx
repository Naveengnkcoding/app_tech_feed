import PopUp from "@/components/Popup/Index";
import Link from "next/link";
import next from "next";

const Individual = () => {
  return (
    <div className="bg-gray-900">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm">
        <div className="h-screen w-[2480px] border-e-emerald-600 bg-white p-2 py-5 shadow-inner md:w-1/2 lg:h-screen">
          <div className="relative h-screen w-[2480px] items-center justify-center 2xsm:h-[60vh] 2xsm:w-full xsm:h-[60vh] xsm:w-full md:h-[40vh] md:w-full lg:h-screen xl:h-[80vh] 2xl:h-[3508px]">
            <h2 className="py-3 text-center text-xl font-semibold">Details</h2>
            <p className="font-regular pt-4 text-center text-lg text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              quasi excepturi illum itaque repellat debitis, consequuntur
              laudantium quas vel totam iste est, maiores architecto doloremque
              ut. Natus iure ad atque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
