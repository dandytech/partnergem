import React from "react";
import box from "/assets/images/box.png";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <div className="pb-20 bg-[url('/assets/images/bgimg1.png')] bg-cover bg-center bg-no-repeat overflow-x-hidden">
      <div className="md:flex items-center lg:px-20 md:px-5 px-3 w-full pt-40 text-[#FFFFFF]">
        <div className="md:w-[70%] lg:mt-10 md:mt-5">
          <p className="font-[700] text-[55px] lg:block hidden leading-tight">
            {" "}
            A dynamic outfit <br /> delivering innovative <br />
            solutions in Generative AI,
            <br />
            Cloud and Data Engineering
          </p>

          <p className="font-[700] text-[24px] md:text-[34px] lg:hidden">
            {" "}
            A dynamic outfit delivering innovative solutions in Generative AI,
            Cloud and Data Engineering
          </p>

          <p className="font-[400] pt-5 text-[18px] font-Marcellus lg:w-[70%]">
            Make your awesome business idea a reality with PartnerGem, High-
            performing tech solutions that drives your business forward.
          </p>
          <button className="rounded-lg mt-10 text-[#FFFFFF] px-7 py-2 text-[20px] font-[400] bg-gradient-to-r from-[#C28383] to-[#7C2CC2] hover:from-[#7C2CC2] hover:to-[#0697DF] cursor-pointer font-Marcellus-SC">
            Get Started
          </button>
        </div>
        <div className="lg:w-[30%] md:w-[50%]">
          <motion.img
            src={box}
            alt="box"
            className="w-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
        </div>
        {/* <div className="lg:w-[30%] md:w-[50%]">
          <motion.img
            src={box}
            alt="box"
            className="w-full"
            animate={{
              rotateX: [0, 180],
              rotateY: [0, 360], // Smaller range to reduce warping
              rotateZ: [0, 180],
            }}
            transition={{
              rotateX: { repeat: Infinity, duration: 4, ease: "linear" },
              rotateY: { repeat: Infinity, duration: 6, ease: "linear" }, // Slightly slower
              rotateZ: { repeat: Infinity, duration: 5, ease: "linear" }, // Slightly different speed
            }}
          />
        </div> */}
      </div>
    </div>
  );
}
