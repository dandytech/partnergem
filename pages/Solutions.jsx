import React from "react";
import DataEng from "../components/solution-page/DataEng";
import GenAI from "../components/solution-page/GenAI";
import CloudSolutions from "../components/solution-page/CloudSolutions";

export default function Solutions() {
  return (
    <div className="!overflow-x-hidden overflow">
      <DataEng />
      <GenAI />
      <CloudSolutions />
    </div>
  );
}
