import React from "react";
import genAI from "../../src/assets/images/genAI.png";
import cloudData from "../../src/assets/images/cloudData.png";
import upskill from "../../src/assets/images/upskill.png";

export default function WhatWeDo() {
  return (
    <div className="pb-20 bg-[url('/../src/assets/images/bgimg2.png')] bg-no-repeat bg-cover py-20">
      <div className="px-20">
        <p className="flex gap-2 justify-center pt-10 font-bold ">
          {" "}
          <span className="text-[48px] font-[700 bg-gradient-to-r from-[#0697DF] to-[#0697DF] text-transparent bg-clip-text">
            What
          </span>
          <span className=" text-[48px] font-[700 bg-gradient-to-r from-[#0697DF] via-[#000A1C] to-[#000A1C] text-transparent bg-clip-text">
            we do
          </span>
        </p>

        <div className="flex items-center justify-between gap-40">
          <div className="flex flex-col items-center gap-3">
            <p className="">
              <img src={genAI} alt="genAI" width={100} className="w-full" />
            </p>
            <p className="font-[600] text-center text-[32px] text-[#000000]">
              Generative AI <br /> Solutions
            </p>
            <p className="font-[400] font-Marcellus text-[20px] text-[#000000] text-center">
              Optimize your operations, scale effortlessly, and innovate faster
              with our comprehensive cloud engineering services.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="">
              <img src={cloudData} alt="genAI" width={100} className="w-full" />
            </p>
            <p className="font-[600] text-center text-[32px] text-[#000000]">
              Cloud Data <br /> Enginerring
            </p>
            <p className="font-[400] font-Marcellus text-[20px] text-[#000000] text-center">
              Optimize your operations, scale effortlessly, and innovate faster
              with our comprehensive cloud engineering services.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 mt-[-50px]">
            <p className="">
              <img src={upskill} alt="genAI" width={100} className="w-full" />
            </p>
            <p className="font-[600] text-center text-[32px] mt-[-50px] text-[#000000]">
              Upskilling in <br />
              the age of AI
            </p>
            <p className="font-[400] font-Marcellus text-[20px] text-[#000000] text-center">
              Whether you desire to be competitive or preparing for
              transformation, our upskilling programs are your gateway to
              success in the age of AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
