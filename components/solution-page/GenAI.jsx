import React from "react";
import ai1 from "/assets/images/ai1.png";
import ai2 from "/assets/images/ai2.png";
import ai3 from "/assets/images/ai3.png";
import ai4 from "/assets/images/ai4.png";
export default function GenAI() {
  return (
    <div>
      <div className="lg:pb-40 pb-10 bg-[url('/assets/images/bgimg10.png')] bg-cover bg-center bg-no-repeat ">
        <div className="md:flex justify-between lg:w-[50%] px-3 md:px-10 lgz;pt-40 pt-5 md:pt-10 m-auto">
          <div className="md:w-[158px] md:h-[158px] lg:mt-20 md:mt-20 mt-5">
            <img src={ai1} alt="ai1" width="100" className="w-full"  />
          </div>
          <div className="md:w-[236px] md:h-[236px] py-5 md:py-0">
            <img src={ai2} alt="ai1" width="100" className="w-full" />
          </div>
          <div className="md:w-[158px] md:h-[158px] md:mt-20">
            <img src={ai3} alt="ai1" width="100" className="w-full" />
          </div>
        </div>

        <div className="md:w-[50%] m-auto text-center lg:mt-20 mt-10 ">
          <p className="font-[700] lg:text-[55px] text-[30px] md:text-[34px] text-white">
            Generative AI Solutions
          </p>
          <p className="text-white font-[400] font-Marcellus text-[20px] lg:px-28 mt-3">
            We empower businesses and people to leverage AI-driven solutions for
            content creation, automation, and enhanced decision-making.
          </p>
        </div>

        <div className="md:w-[50%] m-auto  flex items-center justify-center lg:mt-20 mt-10">
          <div className="md:w-[158px] md:h-[158px] ">
            <img src={ai4} alt="ai1" width="100" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
