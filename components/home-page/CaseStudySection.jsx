import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
export default function CaseStudySection() {
  return (
    <div className="px-20 pt-10 pb-20 ">
      <p className="flex gap-3 justify-center pt-10 font-bold">
        <span className="text-[48px] font-[700] bg-gradient-to-r from-[#0697DF] to-[#0697DF] text-transparent bg-clip-text">
          View Our
        </span>
        <span className="text-[48px] font-[700] bg-gradient-to-r from-[#0697DF] via-[#000A1C] to-[#000A1C] text-transparent bg-clip-text">
          Case Study
        </span>
      </p>

      <div className="text-[80px] font-[700] flex items-center justify-center rounded-4xl mt-10 h-[500px] border border-amber-100">
        <div className="w-[100%] h-full m-auto text-center">
          <Swiper
            cssMode={true}
            navigation={false}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // 🔥 Auto-play slides every 3s
            loop={true} // 🔄 Loop slides infinitely
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // 🛠️ Added Autoplay module
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="pb-20 bg-[url('/../public/assets/images/slide1.png')] bg-cover bg-center bg-no-repeat h-full w-full flex justify-center items-center rounded-4xl">
                <p className="text-center text-[80px] font-[700] text-[#FFFFFF] w-[70%]">
                  {" "}
                  Data Warehousing Healtcare Project
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="pb-20 bg-[url('/../public/assets/images/slide2.png')] bg-cover bg-center bg-no-repeat h-full w-full flex justify-center items-center rounded-4xl">
                <p className="text-center text-[80px] font-[700] text-[#FFFFFF] w-[70%]">
                  {" "}
                  Serverless Computing Model Projects
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="pb-20 bg-[url('/../public/assets/images/slide3.png')] bg-cover bg-center bg-no-repeat h-full w-full flex justify-center items-center rounded-4xl">
                <p className="text-center text-[80px] font-[700] text-[#FFFFFF] w-[60%]">
                  {" "}
                  Docker Healthcare Project
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="pb-20 bg-[url('/../public/assets/images/slide4.png')] bg-cover bg-center bg-no-repeat h-full w-full flex justify-center items-center rounded-4xl">
                <p className="text-center text-[80px] font-[700] text-[#FFFFFF] w-[60%]">
                  {" "}
                  Capstone Project Cloud Native
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="pb-20 bg-[url('/../public/assets/images/slide5.png')] bg-cover bg-center bg-no-repeat h-full w-full flex justify-center items-center rounded-4xl">
                <p className="text-center text-[80px] font-[700] text-[#FFFFFF] w-[60%]">
                  {" "}
                  Cloud Native Application Design
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
