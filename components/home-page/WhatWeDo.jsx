import React from "react";
import { motion } from "framer-motion";
import genAI from "/assets/images/genAI.png";
import cloudData from "/assets/images/cloudData.png";
import upskill from "/assets/images/upskill.png";

export default function WhatWeDo() {
  const bounceAnimation = {
    y: [0, -20, 0], // Moves up by 10px and returns
    transition: {
      duration: 1.5, // Smooth animation
      repeat: Infinity, // Infinite loop
      repeatType: "reverse", // Smooth bouncing
      ease: "easeInOut",
    },
  };

  return (
    <div className="pb-20 bg-[url('/assets/images/bgimg2.png')] bg-no-repeat bg-cover lg:py-20 md:py-5 overflow-x-hidden">
      <div className="lg:px-20 md:px-5 px-3 pt-5">
        <p className="flex gap-2 justify-center pt-10 font-bold">
          <span className="lg:text-[48px] md:text-[34px] text-[30px] font-[700] bg-gradient-to-r from-[#0697DF] to-[#0697DF] text-transparent bg-clip-text">
            What
          </span>
          <span className="lg:text-[48px] md:text-[34px] text-[30px] font-[700] bg-gradient-to-r from-[#0697DF] via-[#000A1C] to-[#000A1C] text-transparent bg-clip-text">
            we do
          </span>
        </p>

        <div className="lg:flex items-center justify-between lg:gap-40 space-y-10 md:space-y-10 lg:space-y-0 md:pb-20" >
          {/* Generative AI Solutions */}
          <div className="flex flex-col items-center gap-3" data-aos="fade-right">
            <motion.p animate={bounceAnimation}>
              <img src={genAI} alt="genAI" width={100} className="w-full" />
            </motion.p>
            <p className="font-[600] text-center text-[24px] md:text-[32px] text-[#000000]">
              Generative AI <br /> Solutions
            </p>
            <p className="font-[400] font-Marcellus text-[20px] text-[#000000] text-center">
              Optimize your operations, scale effortlessly, and innovate faster
              with our comprehensive cloud engineering services.
            </p>
          </div>

          {/* Cloud Data Engineering */}
          <div className="flex flex-col items-center gap-3"  >
            <motion.p animate={bounceAnimation}>
              <img
                src={cloudData}
                alt="cloudData"
                width={100}
                className="w-full"
              />
            </motion.p>
            <p className="font-[600] text-center md:text-[32px] text-[#000000] text-[24px]">
              Cloud Data <br /> Engineering
            </p>
            <p className="font-[400] font-Marcellus text-[20px] text-[#000000] text-center">
              Optimize your operations, scale effortlessly, and innovate faster
              with our comprehensive cloud engineering services.
            </p>
          </div>

          {/* Upskilling in the Age of AI */}
          <div className="flex flex-col items-center gap-3 mt-[-100px] lg:mt-[-50px]" data-aos="fade-left">
            <motion.p animate={bounceAnimation}>
              <img src={upskill} alt="upskill" width={100} className="w-full" />
            </motion.p>
            <p className="font-[600] text-center md:text-[32px] text-[24px] mt-[-50px] lg:mt-[-50px] text-[#000000]">
              Upskilling in <br /> the age of AI
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
