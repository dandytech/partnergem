import React from "react";

import logo3 from "/assets/images/logo3.png";
import dataeng1 from "/assets/images/dataeng1.png";
import dataeng2 from "/assets/images/dataeng2.png";
import dataeng3 from "/assets/images/dataeng3.png";
import box2 from "/assets/images/box2.png";
import Header from "../Header";
import { motion } from "framer-motion";

export default function DataEng() {
  return (
    <div className="lg:pb-40 bg-[url('/assets/images/bgimg8.png')] bg-cover bg-center bg-no-repeat ">
      <Header src={logo3} textColor="text-black" />

      <div className="lg:px-20 md:px-5 px-3">
        <div>
          <p className="flex items-center md:pt-40 pt-34 font-[700] lg:text-[55px] md:text-[34px] text-[30px] bg-gradient-to-r from-[#0697DF] to-[#000A1C] bg-clip-text text-transparent lg:w-[40%]">
            Data Engineering Solutions
          </p>
          <p className="text-[#5F5F5F] md:text-[20px] text-[18px]  font-[400] lg:mt-10 md:mt-5 mt-3 font-Marcellus lg:w-[40%]">
            Our data engineering strategy involves aligning your data goals with
            business objectives, selecting the right architecture and tools and
            ensuring data quality and governance.
          </p>
        </div>

        <div className="lg:flex justify-between items-start lg:ml-40 lg:gap-10 lg:pt-20 ">
          {[
            { img: dataeng1, text: "Building Scalable Data Pipelines" },
            { img: dataeng2, text: "Implementing Security Measures" },
            { img: dataeng3, text: "Promoting Data Literacy" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5  mt-5 lg:mt-10 bg-[#EAF0F3] pt-10 lg:h-[500px] justify-between rounded-lg"
            >
              <p className="text-[#000000] text-center pb-5 md:text-[28px] text-[20px] font-[700] lg:px-20 px-10">
                {item.text}
              </p>
              <img alt="img" src={item.img} className="w-full   object-cover" />
            </div>
          ))}
        </div>

        <div className="lg:pb-20 pb-10 bg-[url('/assets/images/bgimg9.png')] bg-cover bg-center bg-no-repeat lg:mr-40 px-3 md:px-5 pt-10 md:pt-10 lg:p-20 lg:mt-24 mt-10">
          <div className="md:flex justify-between items-center space-y-5 md:space-y-0 ">
            <div className="md:w-[50%]">
              <p className="font-[700] md:text-[28px] text-[24px] text-white">
                Data Engineering Tools
              </p>
              <p className="text-[20px] font-[400] font-Marcellus text-white mt-5">
                We create data engineering tools and services for big data
                processing, real-time analytics and business intelligence. These
                include Azure data bricks, Microsoft fabric and lake house
                architecture.
              </p>
            </div>
            <div className="md:w-[50%]">
              <motion.img
                src={box2}
                alt="box"
                className="w-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
