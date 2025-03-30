import React from "react";
import flower from "/assets/images/flower.png";
import { motion } from "framer-motion";
import Button from "../Button";

export default function BannerSection() {
  const zoomAnimation = {
    scale: [1, 0.9, 1], // Zoom in to 1.1x, then back to normal
    transition: {
      duration: 2.5, // Adjust speed
      repeat: Infinity, // Loop forever
      repeatType: "reverse", // Smooth transition back and forth
      ease: "easeInOut",
    },
  };

  return (
    <div>
      <div className="lg:px-20 px-3 md:px-5 bg-[#F1FAFF]">
        <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] lg:text-[55px] md:txt-[34px] text-[30px] md:w-[70%] text-center m-auto lg:pt-40 pt-34 pb-5">
          Stay Ahead of the Curve with the Latest Generative AI Courses
        </p>
        <div
          className="pb-40 bg-[url('/assets/images/bgimg12.png')] bg-cover bg-center bg-no-repeat h-[846px]"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-up"
        ></div>
      </div>

      <div className="md:flex items-center justify-between lg:gap-10 lg:px-20 px-3 md:text-5 lg:py-20 py-10">
        <div className="lg:flex flex-col gap-5 lg:w-[35%] md:w-full">
          <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] lg:text-[55px] text-[30px] md:text-[34px]">
            Align Yourself With The Latest AI Trends
          </p>
          <p className="text-[#000A1C] font-Marcellus font-[400] md:text-[24px] text-[20px]">
            PartnerGem courses offer a unique, immersive learning experience to
            help you master your craft, stay current with evolving trends, and
            expand your horizons.
          </p>
          <p className="mt-5 lg:w-[30%] font-Marcellus-SC font-[400] text-[20px]">
            {" "}
            <Button>View Courses</Button>
          </p>
        </div>
        <motion.div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-up"
          animate={zoomAnimation}
        >
          <img src={flower} alt="flower" width={100} className="w-full" />
        </motion.div>
      </div>
    </div>
  );
}
