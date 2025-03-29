import React from "react";
import cloud1 from "../../src/assets/icons/cloud1.png";
import cloud2 from "../../src/assets/icons/cloud2.png";
import cloud3 from "../../src/assets/icons/cloud3.png";
import cloud4 from "../../src/assets/icons/cloud4.png";

export default function CloudSolutions() {
  return (
    <div className="pb-40 bg-[url('/../src/assets/images/bgimg11.png')] bg-cover bg-center bg-no-repeat ">
      <div className="flex gap-10 justify-between px-20 pt-20">
        <div className="w-[30%]">
          <p className="bg-gradient-to-r from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] text-[55px] ">
            Cloud Solutions
          </p>
          <p className="text-[#5F5F5F] font-[400] text-[20px] font-Marcellus">
            We focus on designing, deploying, managing, and optimizing cloud
            solutions using Microsoft Azure.
          </p>
        </div>

        <div className="grid grid-cols-2 py-10 px-5 gap-5 pt-40">
          <div className="flex flex-col items-center gap-5 boder shadow-2xl bg-[#EAF0F3] px-5 py-7 rounded-xl">
            <p>
              {" "}
              <img src={cloud1} atl="icon" width={100} />
            </p>
            <p className="text-[#5F5F5F] font-[700] text-[28px]">
              {" "}
              Cloud Security
              <br />
              and Compliance
            </p>
            <p className="text-[#5F5F5F] font-[400] text-[20px] font-Marcellus">
              We provide cloud data storage and management via scalable storage,
              data lakes and delta lakehouse.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 boder shadow-2xl bg-[#EAF0F3] px-5 py-7 rounded-xl">
            <p>
              {" "}
              <img src={cloud2} atl="icon" width={100} className="w-full" />
            </p>
            <p className="text-[#5F5F5F] font-[700] text-[28px]">
              {" "}
              Cloud <br />
              Storage
            </p>
            <p className="text-[#5F5F5F] font-[400] text-[20px] font-Marcellus">
              Protect your data, ensure compliance, and build trust with our
              expert cloud security solutions.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 boder shadow-2xl bg-[#EAF0F3] px-5 py-7 rounded-xl">
            <p>
              {" "}
              <img src={cloud3} atl="icon" width={100} className="w-full" />
            </p>
            <p className="text-[#5F5F5F] font-[700] text-[28px]">
              {" "}
              Cloud <br />
              Optimization
            </p>
            <p className="text-[#5F5F5F] font-[400] text-[20px] font-Marcellus">
              Maximize efficiency, reduce costs, and enhance scalability with
              our expert cloud optimization services.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 boder shadow-2xl bg-[#EAF0F3] px-5 py-7 rounded-xl">
            <p>
              {" "}
              <img src={cloud4} atl="icon" width={100} className="w-full" />
            </p>
            <p className="text-[#5F5F5F] font-[700] text-[28px]">
              {" "}
              Cloud <br />
              Networking
            </p>
            <p className="text-[#5F5F5F] font-[400] text-[20px] font-Marcellus">
              Let’s help you build a resilient and high-performance network
              tailored to your cloud infrastructure needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
