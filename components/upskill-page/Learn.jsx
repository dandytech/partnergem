import React from "react";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const courses = [
  {
    id: 1,
    pic: "/assets/images/learn1.png",
    title: "Build Scalable, AI-Ready Data Pipelines with Industry Experts",
    author: "By David Mark",
  },
  {
    id: 2,
    pic: "/assets/images/learn2.png",
    title:
      "Training Custom AI Models– Using TensorFlow, PyTorch, and Hugging Face ",
    author: "By Osas Adams",
  },
  {
    id: 3,
    pic: "/assets/images/learn3.png",
    title:
      "Speech & Voice Synthesis – How To Generates Realistic Speech With AI",
    author: "By Angela Bait",
  },
  {
    id: 4,
    pic: "/assets/images/learn4.png",
    title: "Understanding And Using Large      Language Models (LLMs)",
    author: "By Mark Chello",
  },
];

const morecourses = [
  {
    id: 1,
    pic: "/assets/images/course1.png",
    title:
      "Image Generation with AI- Introduction to DALL·E, Stable Diffusion, and MidJourney",
  },
  {
    id: 2,
    pic: "/assets/images/course2.png",
    title:
      "Data Engineering for AI Models-How to Build, Optimize, and Scale AI-Ready Data Pipelines!",
  },
  {
    id: 3,
    pic: "/assets/images/course3.png",
    title:
      "Building AI-Powered Chatbots-Create Smart, Conversational AI Assistants with GPT!",
  },
];
export default function Learn() {
  return (
    <>
      <div className="lg:px-20 px-3 md:px-5 pb-10 md:mt-10 lg:mt-0">
        <div className="flex flex-col lg:gap-5 lg:w-[27%] m-auto">
          <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] lg:text-[55px] md:text-[34px] text-[30px] text-center leading-tight">
            Learn From The Best
          </p>
          <p className="text-[#000A1C] font-Marcellus font-[400] lg:text-[24px] text-[18px] md:text-[20px] text-center">
            {" "}
            Take a look at the incredible classes being taught by our
            instructors
          </p>
        </div>

        <div className="md:grid grid-cols-2 gap-5 lg:py-20 md:py-10 py-5">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex  flex-col gap-5 shadow-md border border-gray-100 pb-5 mt-5 md:mt-0 rounded-xl"
              data-aos={
                index === 0
                  ? "flip-left"
                  : index === 1
                  ? "flip-right"
                  : index === 2
                  ? "fade-left"
                  : index === 3
                  ? "fade-right"
                  : ""
              }
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div>
                <img src={course.pic} alt="image" className="w-full" />
              </div>
              <div className="font-[400] font-Marcellus-SC lg:text-[28px] text-[18px] md:text-[20px] lg:px-20 md:px-5 px-3">
                {course.title}
              </div>

              <div className="flex justify-between items-center px-10 lg:gap-5">
                <div className="font-Marcellus font-[400] lg:text-[20px] text-[16px] md:text-[18px]">
                  {course.author}
                </div>
                <div>
                  {" "}
                  <NavLink to="/upskill-details">
                    <Button>
                      <span className="font-[400] font-Marcellus-SC lg:text-[20px] md:text-[18px] text-[14px] md:px-5 px-3 cursor-pointer">
                        Enroll Now
                      </span>
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] md:text-[32px] text-[24px] mt-5 mb-5 ">
            More Courses
          </p>
          <div className="md:grid grid-cols-3 gap-5 pb-10">
            {morecourses.map((course, index) => (
              <div
                key={index}
                className="flex  flex-col gap-5 shadow-md border border-gray-100  rounded-xl pb-10"
                data-aos={
                  index === 0
                    ? "fade-right"
                    : index === 1
                    ? "flip-right"
                    : index === 2
                    ? "fade-left"
                   
                    : ""
                } >
                <div className="flex items-center justify-center">
                  <img src={course.pic} width={100} className="w-full" />
                </div>
                <div className="font-[400] font-Marcellus-SC lg:text-[28px] text-[18px] text-center px-5">
                  {course.title}
                </div>

                <div className="lg:w-[40%] md:w-full w-[50%] lg:w-fit md:px-10 lg:px-0  m-auto mt-3">
                  <NavLink to="/upskill-details">
                    <Button>
                      <span className="font-[400] font-Marcellus-SC lg:text-[20px] md:text-[18px] text-[14px] md:px-5 px-3 cursor-pointer">
                        Enroll Now
                      </span>
                    </Button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
