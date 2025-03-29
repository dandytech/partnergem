import React from "react";
import logoPartnergen from "/assets/images/logoPartnergen.png";

import Header from "../components/Header";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const blogs = [
  {
    id: 1,
    pic: "/assets/images/blog1.png",
    date: "SEP, 2024",
    title: "Exploring AI Agent-Driven Auto Insurance Claims RAG Pipeline",
    description:
      "In this post, I explore a recent experiment aimed at creating a RAG pipeline tailored for the insurance industry, specifically for handling automobile insurance claims, with the goal of potentially reducing processing times.",
  },

  {
    id: 2,
    pic: "/assets/images/blog2.png",
    date: "JUL, 2024",
    title:
      "Enhancing Document Extraction with Azure AI Document Intelligence and LangChain for RAG Workflows",
    description:
      "In this post, I explore a recent experiment aimed at creating a RAG pipeline tailored for the insurance industry, specifically for handling automobile insurance claims, with the goal of potentially reducing processing times.",
  },

  {
    id: 3,
    pic: "/assets/images/blog3.png",
    date: "JUL, 2024",
    title:
      "Enhancing Document Extraction with Azure AI Document Intelligence and LangChain for RAG Workflows",
    description:
      "The broadening of conventional data engineering pipelines and applications to include document extraction and preprocessing for unstructured PDFs, audio, and video files is becoming more prevalent.",
  },

  {
    id: 4,
    pic: "/assets/images/blog4.png",
    date: "MAY, 2021",
    title:
      "Ingest Azure Event Hub Telemetry Data with Apache PySpark Structured Streaming on Databricks",
    description:
      "Ingesting, storing and processing millions of telemetry data from a plethora of remote IoT devices and Sensors has become common place. One of the primary Cloud services used to process streaming telemetry events at scale is Azure Event Hub.",
  },

  {
    id: 5,
    pic: "/assets/images/blog5.png",
    date: "NOV, 2020",
    title:
      "Write Data from Azure Databricks to Azure Dedicated SQL Pool using ADLS Gen 2",
    description:
      "Ingesting, storing and processing millions of telemetry data from a plethora of remote IoT devices and Sensors has become common place. One of the primary Cloud services used to process streaming telemetry events at scale is Azure Event Hub.",
  },

  {
    id: 6,
    pic: "/assets/images/blog6.png",
    date: "NOV, 2020",
    title:
      "Publish PySpark Streaming Query Metrics to Azure Log Analytics using the Data Collector REST API ",
    description:
      "At the time of this writing, there doesn’t seem to be built-in support for writing PySpark Structured Streaming query metrics from Azure Databricks to Azure Log Analytics. After some research, I found a work around that enables capturing the Streaming query metrics as a Python dictionary object from.......",
  },
];
export default function Blog() {
  return (
    <div>
      <Header src={logoPartnergen} textColor="text-white" />
      {blogs.map((blog, index) => {
        const isWhiteBg = index % 4 >= 2; // Determines if the background is white
        const isLastItem = index === blogs.length - 1; // Checks if it's the last item

        return (
          <div
            key={blog.id}
            className={` py-10 ${
              isWhiteBg
                ? "bg-white"
                : "bg-[url('/assets/images/bgimg14.png')] bg-cover bg-center bg-no-repeat"
            }`}
          >
            <div className={`${blog.id === 1 ? "pt-40" : ""}`}>
              <div
                className={`w-[75%] m-auto gap-5 pb-20 flex ${
                  isWhiteBg
                    ? "border-[#000000] border-b-2"
                    : " border-b-2 border-b-white"
                } ${isLastItem ? "mb-20" : ""}`}
              >
                <div>
                  <img src={blog.pic} alt="blog" className="w-full h-full" />
                </div>
                <div className="w-[40%]">
                  <p
                    className={`font-[400] text-[20px] font-Marcellus-SC ${
                      isWhiteBg ? "text-[#000A1C]" : "text-white"
                    }`}
                  >
                    {blog.date}
                  </p>
                  <p
                    className={`font-[700] text-[40px] ${
                      isWhiteBg ? "text-[#000A1C]" : "text-white"
                    }`}
                  >
                    {blog.title}
                  </p>
                  <p
                    className={`font-[400] text-[20px] font-Marcellus-SC py-7 ${
                      isWhiteBg ? "text-[#000A1C]" : "text-white"
                    }`}
                  >
                    {blog.description}
                  </p>
                  <NavLink to="/blog-details">
                    <p className="w-[40%] font-Marcellus-SC text-[20px] font-[400] ">
                      <Button className="cursor-pointer">
                        <span className="cursor-pointer">Discover</span>
                      </Button>
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
