import useTypingEffect from "../../hook/useTypingEffect";
import React from "react";

export default function MeetFoundersSection() {
  const text = useTypingEffect(
    "PartnerGem was created when 2 visionary tech enthusiasts met and realised they shared the same passion for proffering tech solutions. This collaboration inspired their journey to bridge the gap between complex technology and real-world business challenges.",
    50
  );

  return (
    <div className="pb-20 bg-[url('/assets/images/bgimg3.png')] bg-no-repeat bg-cover lg:pb-40 pb-10 md:pt-20 pt-10 px-3 md:px-5 overflow-x-hidden">
      <div className="lg:w-[45%] m-auto text-center text-white">
        <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl pb-3">
          Meet the Founders
        </h2>
        <p className="font-light font-Marcellus md:text-lg text-base">{text}</p>
      </div>
    </div>
  );
}
