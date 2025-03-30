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

const slides = [
  {
    id: 1,
    image: "/assets/images/slide1.png",
    text: "Data Warehousing Healtcare Project",
  },
  {
    id: 2,
    image: "/assets/images/slide2.png",
    text: "Serverless Computing Model Projects",
  },
  {
    id: 3,
    image: "/assets/images/slide3.png",
    text: "Docker Healthcare Project",
  },
  {
    id: 4,
    image: "/assets/images/slide3.png",
    text: "  Capstone Project Cloud Native",
  },
  {
    id: 5,
    image: "/assets/images/slide5.png",
    text: "Cloud Native Application Design",
  },
];
export default function CaseStudySection() {
  return (
    <div className="lg:px-20 md:px-5 px-3  pb-20 ">
      <p className="lg:flex gap-3 justify-center pt-10 md:pt-20 font-bold overflow-x-hidden">
        <span className="lg:text-[48px] md:text-[34px] text-[30px] font-[700] bg-gradient-to-r from-[#0697DF] to-[#0697DF] text-transparent bg-clip-text">
          View Our
        </span>
        <span className="lg:text-[48px] md:text-[34px] text-[24px]  font-[700] bg-gradient-to-r from-[#0697DF] via-[#000A1C] to-[#000A1C] text-transparent bg-clip-text">
          Case Study
        </span>
      </p>

      <div className="text-[80px] font-[700] flex items-center justify-center rounded-4xl mt-5 md:mt-5 lg:h-[500px] h-[300px] border border-amber-100">
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
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="pb-20 bg-cover bg-center bg-no-repeat h-full w-full flex justify-center items-center rounded-4xl px-3 "
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <p className="text-center lg:text-[80px] md:text-[60px] text-[34px] font-[700] text-[#FFFFFF] lg:w-[70%]">
                    {slide.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
