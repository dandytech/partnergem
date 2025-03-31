import React from "react";
import BannerSection from "../components/home-page/BannerSection";
import WhatWeDo from "../components/home-page/WhatWeDo";
import MeetFoundersSection from "../components/home-page/MeetFoundersSection";
import CaseStudySection from "../components/home-page/CaseStudySection";
import History from "../components/home-page/History";

import AfricaMap from "../components/home-page/AfricaMap";
import Header from "../components/Header";

import logoPartnergen from "/assets/images/logoPartnergen.png";

export default function Home() {
  return (
    <div className="!overflow-x-hidden overflow">
      <Header src={logoPartnergen} textColor="text-white" />
      <BannerSection />
      <WhatWeDo />
      <MeetFoundersSection />
      <CaseStudySection />
      <History />
      <AfricaMap />
    </div>
  );
}
