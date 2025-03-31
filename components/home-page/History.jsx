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
    title: "The spark of an idea",
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
    year: 2024,
    title: "Today Looking Forward",
    history:
      "We're just getting started. As we scale, innovate, and push boundaries, we remain committed to building technology that makes a difference..",
  },

  {
    id: 5,
    year: 2017,
    title: "The spark of an idea",
    history:
      "What started as an idea between [founders/co-founders] turned into late-night coding sessions, countless prototypes, and the official launch of [Startup Name].",
  },

  {
    id: 6,
    year: 2019,
    title: "The first Breakthrough",
    history:
      "Our first major product release/partnership/customer marked a turning point, proving that our vision had real impact.",
  },

  {
    id: 7,
    year: 2021,
    title: "Gaining Momentum",
    history:
      "We expanded our team, secured funding, and saw incredible adoption of our technology, fuelling our next phase of innovation..",
  },

  {
    id: 8,
    year: 2024,
    title: "Today Looking Forward",
    history:
      "We're just getting started. As we scale, innovate, and push boundaries, we remain committed to building technology that makes a difference..",
  },
];

export default function History() {
  return (
    <div className="lg:pb-20 bg-[url('/assets/images/bgimg6.png')] bg-no-repeat bg-cover lg:pt-20 md:pt-10 lg:px-20 md:px-5 md:pb-14 px-3 lg:pb-20 !overflow-x-hidden">
      <p className="font-[700] lg:text-[48px] text-[24px] md:text-[34px] text-white md:pb-20 pb-10 pt-10">
        Our History
      </p>
      <Swiper
        spaceBetween={30}
        slidesPerView={4} // Default for larger screens
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={6000}
        loop={true}
        freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile screens (smaller screens)
          640: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Small laptops
          1280: { slidesPerView: 4 }, // Large screens
        }}
      >
        {histories.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!bg-transparent text-white border-l-4 px-5 pb-10 border-[#7A06DF]"
          >
            <div className="flex flex-col gap-3">
              <p className="font-[600] md:text-[32px] text-[24px] font-Syne">
                {item.year}
              </p>
              <p className="font-[400] text-[32px]md:text-[32px] text-[24px] ">
                {item.title}
              </p>
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
