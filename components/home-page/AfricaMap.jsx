import React from "react";
import map from "../../src/assets/images/africamap.png";

export default function AfricaMap() {
  return (
    <div className="flex justify-between items-center px-20 py-40 bg-[#F8F8F8]">
      <div className="w-[50%]">
        <p className="font-[700] text-[48px] w-[70%] bg-gradient-to-r from-[#0697DF] to-[#000A1C] bg-clip-text text-transparent">
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
      <div className="w-[50%]">
        <img src={map} alt="map" width={100} className="w-full" />
      </div>
    </div>
  );
}
