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

        <div className="lg:grid grid-cols-3 items-center justify-between lg:gap-20 gap-10 md:pb-20">
          {[
            {
              image: genAI,
              title: "Generative AI Solutions",
              text: "Transform how you create, innovate, and engage with our cutting-edge Generative AI solutions.",
            },
            {
              image: cloudData,
              title: "Cloud Data Engineering",
              text: "Optimize your operations, scale effortlessly, and innovate faster with our comprehensive cloud engineering services.",
            },
            {
              image: upskill,
              title: "Upskilling in the age of AI",
              text: "Whether you desire to be competitive or preparing for transformation, our upskilling programs are your gateway to success in the age of AI.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center lg:gap-5 w-full mt-10"
              data-aos="fade-up"
            >
              {/* Fixed-size wrapper for images with a condition for the second image */}
              <motion.div
                animate={bounceAnimation}
                className={`flex-shrink-0 flex items-center justify-center 
          ${
            index === 1
              ? " lg:w-[270px] lg:h-[270px] "
              : " lg:w-[200px] lg:h-[200px]"
          }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-auto object-contain  ${
                    index === 2 ? "mt-[-90px] lg:mt-0" : ""
                  }`}
                />
              </motion.div>
              <p
                className={` space-y-3 font-[600] leading-tight text-[24px] md:text-[32px] text-[#000000] ${
                  index === 1
                    ? "lg:mt-[-50px]"
                    : index === 2
                    ? "mt-[-40px] lg:mt-0"
                    : ""
                }`}
              >
                {item.title.split(" ")[0]} <br />{" "}
                {item.title.split(" ").slice(1).join(" ")}
              </p>
              <p
                className={`font-[400] lg:w-[80%] font-Marcellus text-[20px] text-[#000000] 
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
