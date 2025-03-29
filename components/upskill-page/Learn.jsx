import React from "react";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const courses = [
  {
    id: 1,
    pic: "../../src/assets/images/learn1.png",
    title: "Build Scalable, AI-Ready Data Pipelines with Industry Experts",
    author: "By David Mark",
  },
  {
    id: 2,
    pic: "../../src/assets/images/learn2.png",
    title:
      "Training Custom AI Models– Using TensorFlow, PyTorch, and Hugging Face ",
    author: "By Osas Adams",
  },
  {
    id: 3,
    pic: "../../src/assets/images/learn3.png",
    title:
      "Speech & Voice Synthesis – How To Generates Realistic Speech With AI",
    author: "By Angela Bait",
  },
  {
    id: 4,
    pic: "../../src/assets/images/learn4.png",
    title: "Understanding And Using Large      Language Models (LLMs)",
    author: "By Mark Chello",
  },
];

const morecourses = [
  {
    id: 1,
    pic: "../src/assets/images/course1.png",
    title:
      "Image Generation with AI- Introduction to DALL·E, Stable Diffusion, and MidJourney",
  },
  {
    id: 2,
    pic: "../src/assets/images/course2.png",
    title:
      "Data Engineering for AI Models-How to Build, Optimize, and Scale AI-Ready Data Pipelines!",
  },
  {
    id: 3,
    pic: "../src/assets/images/course3.png",
    title:
      "Building AI-Powered Chatbots-Create Smart, Conversational AI Assistants with GPT!",
  },
];
export default function Learn() {
  return (
    <>
      <div className="px-20 pb-10">
        <div className="flex flex-col gap-5 w-[27%] m-auto">
          <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] text-[55px] text-center">
            Learn From The Best
          </p>
          <p className="text-[#000A1C] font-Marcellus font-[400] text-[24px] text-center">
            {" "}
            Take a look at the incredible classes being taught by our
            instructors
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 py-20">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex  flex-col gap-5 shadow-md border border-gray-100 pb-5 rounded-xl"
            >
              <div>
                <img src={course.pic} alt="image" className="w-full" />
              </div>
              <div className="font-[400] font-Marcellus-SC text-[28px] px-20">
                {course.title}
              </div>

              <div className="flex justify-between items-center px-10 gap-5">
                <div className="font-Marcellus font-[400] text-[20px]">
                  {course.author}
                </div>
                <div>
                  {" "}
                  <NavLink to="/upskill-details">
                    <Button>
                      <span className="font-[400] font-Marcellus-SC text-[20px] px-5">
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
          <p className="bg-gradient-to-b from-[#0697DF] bg-clip-text text-transparent to-[#000A1C] font-[700] text-[32px] mb-5 ">
            More Courses
          </p>
          <div className="grid grid-cols-3 gap-5 pb-10">
            {morecourses.map((course) => (
              <div
                key={course.id}
                className="flex  flex-col gap-5 shadow-md border border-gray-100  rounded-xl pb-10"
              >
                <div className="flex items-center justify-center">
                  <img src={course.pic} width={100} className="w-full" />
                </div>
                <div className="font-[400] font-Marcellus-SC text-[28px] text-center px-5">
                  {course.title}
                </div>

                <div className="w-[40%] m-auto mt-3">
                  <NavLink to="/upskill-details">
                    <Button>
                      <span className="font-[400] font-Marcellus-SC text-[20px]">
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
