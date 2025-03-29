import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay } from "swiper/modules";

const histories = [
  {
    id: 1,
    year: 2017,
    title: "The spark of an idea  ",
    history:
      "What started as an idea between [founders/co-founders] turned into late-night coding sessions, countless prototypes, and the official launch of [Startup Name].",
  },

  {
    id: 2,
    year: 2019,
    title: "The first Breakthrough",
    history:
      "Our first major product release/partnership/customer marked a turning point, proving that our vision had real impact.",
  },

  {
    id: 3,
    year: 2021,
    title: "Gaining Momentum",
    history:
      "We expanded our team, secured funding, and saw incredible adoption of our technology, fuelling our next phase of innovation..",
  },

  {
    id: 4,
    year: 2019,
    title: "The first Breakthrough",
    history:
      "Our first major product release/partnership/customer marked a turning point, proving that our vision had real impact.",
  },

  {
    id: 5,
    year: 2021,
    title: "Gaining Momentum",
    history:
      "We expanded our team, secured funding, and saw incredible adoption of our technology, fuelling our next phase of innovation..",
  },
  {
    id: 6,
    year: 2018,
    title: "The first Breakthrough",
    history:
      "Our first major product release/partnership/customer marked a turning point, proving that our vision had real impact.",
  },

  {
    id: 7,
    year: 2010,
    title: "The spark of an idea  ",
    history:
      "What started as an idea between [founders/co-founders] turned into late-night coding sessions, countless prototypes, and the official launch of [Startup Name].",
  },
];

export default function History() {
  return (
    <div className="pb-20 bg-[url('/../public/assets/images/bgimg6.png')] bg-no-repeat bg-cover pt-20 px-20 pb-40">
      <p className="font-[700] text-[48px] text-white pb-20 pt-10">
        Our History
      </p>
      <Swiper
        spaceBetween={30}
        slidesPerView={4} // ✅ Show multiple slides at once for smooth effect
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000} // ✅ Controls smooth continuous movement
        loop={true}
        freeMode={true} // ✅ Enables continuous smooth scrolling
        modules={[Autoplay]}
        className="mySwiper"
      >
        {histories.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!bg-transparent text-white border-l-4 px-5 pb-10 border-[#7A06DF]"
          >
            {" "}
            {/* ✅ Force transparent background */}
            <div className="flex flex-col gap-3">
              <p className="font-[600] text-[32px] font-Syne">{item.year}</p>
              <p className="font-[400] text-[32px] ">{item.title}</p>
              <p className="font-[400] text-[20px] font-Marcellus pr-5">
                {item.history}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
