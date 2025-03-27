import React from "react";
import box from "../../src/assets/images/box.png";
export default function BannerSection() {
  return (
    <div className="pb-20 bg-[url('/../src/assets/images/bgimg1.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center px-20 w-full pt-40 text-[#FFFFFF]">
        <div className="w-[70%] mt-10">
          <p className="font-[700] text-[55px] md:block">
            {" "}
            A dynamic outfit <br /> delivering innovative <br />
            solutions in Generative AI,
            <br />
            Cloud and Data Engineering
          </p>

          <p className="font-[700] text-[55px]  leading-tight md:hidden">
            A dynamic outfit delivering innovative solutions in Generative AI,
            Cloud, and Data Engineering
          </p>
          <p className="font-[400] pt-5 text-[20px] font-Marcellus w-[70%]">
            Make your awesome business idea a reality with PartnerGem, High-
            performing tech solutions that drives your business forward.
          </p>
          <button className="rounded-lg mt-10 text-[#FFFFFF] px-7 py-2 text-[20px] font-[400] bg-gradient-to-r from-[#C28383] to-[#7C2CC2] cursor-pointer font-Marcellus-SC">
            Get Started
          </button>
        </div>
        <div className="w-[30%]">
          <img src={box} alt="box" width={100} className="w-full" />
        </div>
      </div>
    </div>
  );
}
