import React from "react";
import flower from "/assets/images/flower.png";

import Button from "../Button";

export default function BannerSection() {
  return (
    <div>
      <div className="px-20 bg-[#F1FAFF]">
        <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] text-[55px] w-[70%] text-center m-auto pt-40 pb-5">
          Stay Ahead of the Curve with the Latest Generative AI Courses
        </p>
        <div className="pb-40 bg-[url('/assets/images/bgimg12.png')] bg-cover bg-center bg-no-repeat h-[846px]"></div>
      </div>

      <div className="flex items-center justify-between gap-10 px-20 py-20">
        <div className="flex flex-col gap-5 w-[35%]">
          <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] text-[55px]">
            Align Yourself With The Latest AI Trends
          </p>
          <p className="text-[#000A1C] font-Marcellus font-[400] text-[24px]">
            PartnerGem courses offer a unique, immersive learning experience to
            help you master your craft, stay current with evolving trends, and
            expand your horizons.
          </p>
          <p className="mt-5 w-[30%] font-Marcellus-SC font-[400] text-[20px]">
            {" "}
            <Button>View Courses</Button>
          </p>
        </div>
        <div>
          <img src={flower} alt="flower" width={100} className="w-full" />
        </div>
      </div>
    </div>
  );
}
