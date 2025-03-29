import React from "react";
import map from "/assets/images/africamap.png";

export default function AfricaMap() {
  return (
    <div className="md:flex justify-between items-center px-3 md:px-5 lg:px-20 py-10 lg:py-40 bg-[#F8F8F8] space-y-10 md:space-y-10">
      <div className="md:w-[50%]">
        <p className="font-[700] lg:text-[48px] text-[24px] md:text-[34px] lg:w-[70%] bg-gradient-to-r from-[#0697DF] to-[#000A1C] bg-clip-text text-transparent">
          We’re growing our team across the United States, Africa, and beyond
        </p>
        <p className="flex items-center gap-5 mt-10">
          <span className="w-[86px] h-[33px] rounded-xl bg-gradient-to-r from-[#2498E5] to-[#00B78D] "></span>
          <span className="font-[400] text-[20px] font-Marcellus-SC">
            Opened location
          </span>
        </p>

        <p className="flex items-center gap-5 mt-5">
          <span className="w-[86px] h-[33px] rounded-xl bg-gradient-to-r from-[#CCEBFF] to-[#12FFC9]"></span>
          <span className="font-[400] text-[20px] font-Marcellus-SC">
            Opening soon
          </span>
        </p>
      </div>
      <div className="md:w-[50%]">
        <img src={map} alt="map" width={100} className="w-full" />
      </div>
    </div>
  );
}
