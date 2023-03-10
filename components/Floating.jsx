import { useModeContext } from "@/context/ModeContext";
import React from "react";

const Floating = ({ image, text1, text2 }) => {
  const { darkTheme } = useModeContext();
  return (
    <div
      className={`flex items-center gap-4 shadow-sm rounded-2xl px-6 md:px-8 xl:px-10 2xl:px-12 md:py-2 z-40 ${
        darkTheme ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } py-1`}
    >
      <img
        src={image}
        alt="floatingImage"
        className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16 rounded-full bg-gray-200 p-1 object-cover"
      />
      <div>
        <p className="font-semibold text-[12px] md:text-[16px]">{text1}</p>
        <p className="font-semibold text-[12px] md:text-[16px]">{text2}</p>
      </div>
    </div>
  );
};

export default Floating;
