import React from "react";

import logo3 from "../../src/assets/images/logo3.png";
import dataeng1 from "../../src/assets/images/dataeng1.png";
import dataeng2 from "../../src/assets/images/dataeng2.png";
import dataeng3 from "../../src/assets/images/dataeng3.png";
import box2 from "../../src/assets/images/box2.png";
import Header from "../Header";

export default function DataEng() {
  return (
    <div className="pb-40 bg-[url('/../src/assets/images/bgimg8.png')] bg-cover bg-center bg-no-repeat ">
      <Header src={logo3} textColor="text-black" />

      <div className="px-20">
        <div>
          <p className="flex items-center pt-40 font-[700] text-[55px] bg-gradient-to-r from-[#0697DF] to-[#000A1C] bg-clip-text text-transparent w-[40%]">
            Data Engineering Solutions
          </p>
          <p className="text-[#5F5F5F] text-[20px] font-[400] mt-10 font-Marcellus w-[40%]">
            Our data engineering strategy involves aligning your data goals with
            business objectives, selecting the right architecture and tools and
            ensuring data quality and governance.
          </p>
        </div>

        <div className="flex justify-between items-start ml-40 gap-10 pt-20">
          {[
            { img: dataeng1, text: "Building Scalable Data Pipelines" },
            { img: dataeng2, text: "Implementing Security Measures" },
            { img: dataeng3, text: "Promoting Data Literacy" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-[#EAF0F3] pt-10 h-[500px] justify-between rounded-lg"
            >
              <p className="text-[#000000] text-center pb-5 text-[28px] font-[700] px-20">
                {item.text}
              </p>
              <img alt="img" src={item.img} className="w-full  object-cover" />
            </div>
          ))}
        </div>

        <div className="pb-20 bg-[url('/../src/assets/images/bgimg9.png')] bg-cover bg-center bg-no-repeat mr-40 p-20 mt-24">
          <div className="flex justify-between items-center ">
            <div className="w-[50%]">
              <p className="font-[700] text-[28px] text-white">
                Data Engineering Tools
              </p>
              <p className="text-[20px] font-[400] font-Marcellus text-white mt-5">
                We create data engineering tools and services for big data
                processing, real-time analytics and business intelligence. These
                include Azure data bricks, Microsoft fabric and lake house
                architecture.
              </p>
            </div>
            <div className="w-[50%]">
              <img src={box2} width={100} alt="box" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
