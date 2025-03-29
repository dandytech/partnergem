import React from "react";
import ai1 from "/assets/images/ai1.png";
import ai2 from "/assets/images/ai2.png";
import ai3 from "/assets/images/ai3.png";
import ai4 from "/assets/images/ai4.png";
export default function GenAI() {
  return (
    <div>
      <div className="pb-40 bg-[url('/assets/images/bgimg10.png')] bg-cover bg-center bg-no-repeat ">
        <div className="flex justify-between w-[50%] pt-40 m-auto">
          <div className="w-[158px] h-[158px] mt-20">
            <img src={ai1} alt="ai1" width="100" className="w-full" />
          </div>
          <div className="w-[236px] h-[236px]">
            <img src={ai2} alt="ai1" width="100" className="w-full" />
          </div>
          <div className="w-[158px] h-[158px] mt-20">
            <img src={ai3} alt="ai1" width="100" className="w-full" />
          </div>
        </div>

        <div className="w-[50%] m-auto text-center mt-20">
          <p className="font-[700] text-[55px] text-white">
            Generative AI Solutions
          </p>
          <p className="text-white font-[400] font-Marcellus text-[20px] px-28 mt-3">
            We empower businesses and people to leverage AI-driven solutions for
            content creation, automation, and enhanced decision-making.
          </p>
        </div>

        <div className="w-[50%] m-auto  flex items-center justify-center mt-20">
          <div className="w-[158px] h-[158px] ">
            <img src={ai4} alt="ai1" width="100" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
