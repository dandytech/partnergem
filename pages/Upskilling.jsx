import React from "react";
import BannerSection from "../components/upskill-page/StayAhead";
import Learn from "../components/upskill-page/Learn";
import logo3 from "/assets/images/logo3.png";

import Header from "../components/Header";
export default function Upskilling() {
  return (
    <div className="!overflow-x-hidden overflow">
      <Header src={logo3} textColor="text-black" />
      <BannerSection />

      <Learn />
    </div>
  );
}
