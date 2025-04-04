import React from "react";
import map from "/assets/images/africamap.png";
import map2 from "/assets/images/map2.png";

export default function AfricaMap() {
  return (
    <div className="px-3 md:px-5 lg:px-20 py-10 lg:py-20 bg-[#F8F8F8] space-y-10 md:space-y-10 md:pt-10 lg:pb-20 relative">

      <div className="md:flex justify-between">
        <div className="md:w-[50%]   lg:pt-20">
          <p className="font-[700] lg:text-[48px] text-[24px] md:text-[34px] lg:w-[70%] bg-gradient-to-r from-[#0697DF] to-[#000A1C] bg-clip-text text-transparent leading-tight">
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

          <p className="w-full lg:ml-40 lg:w-[50%] md:w-[60%]  md:mt-10 md:absolute py-10 md:py-0 lg:mt-10 md:pb-20 bg-[#F8F8F8] lg:pb-20">
          <img src={map2} alt="USA map" width={100} className="w-full" />
        </p>
        </div>
        <div className="md:w-[50%]  h-full bg-[#F8F8F8] md:pt-20 lg:pt-10 ">
          <img src={map} alt="map" width={100} className="w-full" />
        </div>
      </div>
     
    </div>
  );
}
