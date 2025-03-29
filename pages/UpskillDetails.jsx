import React from "react";
import Header from "../components/Header";
import logo3 from "../src/assets/images/logo3.png";
import videocover from "../src/assets/images/videocover.png";

const lessons = [
  {
    id: 1,
    week: "Week 1",
    title: "Introduction to Large Language Models (LLMs) and Their Evolution",
    chapter: "7",
  },
  {
    id: 2,
    week: "Week 2",
    title: "The Inner Workings of LLMs – How They Learn and Generate Text",
    chapter: "4",
  },
  {
    id: 3,
    week: "Week 3",
    title: "Prompt Engineering – The Art of Communicating with LLMs",
    chapter: "7",
  },
  {
    id: 4,
    week: "Week 4",
    title: "Fine-Tuning and Customizing LLMs for Specific Tasks",
    chapter: "3",
  },
  {
    id: 5,
    week: "Week 5",
    title: "Building LLM-Powered Applications and Chatbots",
    chapter: "3",
  },

  {
    id: 6,
    week: "Week 6",
    title: "Evaluating LLMs – Performance, Bias, and Ethical Considerations",
    chapter: "4",
  },
  {
    id: 7,
    week: "Week 7",
    title: "Deploying, Scaling, and Optimizing LLMs",
    chapter: "5",
  },
  {
    id: 8,
    week: "Week 8",
    title: "The Future of LLMs and Capstone Project Showcase",
    chapter: "5",
  },
];

const payments = [
  {
    id: 1,
    title: "Pay in Full",
    instruction:
      "No need to worry about monthly payments, make a one-off payment and focus on the course.",
    description: "Total cost of the course",
    amount: "$1499",
    qty: "Full Tuition",
  },
  {
    id: 2,
    title: "Payment Plan",
    instruction:
      "Choose the payment plan that works for you. Divide your tuition into two, three, or four easy payments.",
    description: "As low as",
    amount: "$375",
    qty: "Per Month",
  },
  {
    id: 1,
    title: "PEmployer Sponsorship",
    instruction:
      "You may be eligible for full or partial tuition reimbursement, so ask your employer about their tuition reimbursement options.",
    description: "As low as",
    amount: "$0",
    qty: "Per your employer’s benefits",
  },
];
export default function UpskillDetails() {
  return (
    <div>
      <Header src={logo3} textColor="text-black" />

      <div className=" bg-[url('/../src/assets/images/bgimg13.png')] bg-no-repeat bg-center bg-cover  pb-20">
        <div className="pt-40 lg:flex justify-between gap-10 items-center lg:px-20 md:px-5 px-3 pb-10 ">
          <div className=" lg:w-[35%] lg:mb-20 mb-10">
            <p className="text-[#000A1C] font-[700] font-Syne md:text-[48px] text-[24px]">
              <div>Understanding And Using Large Language Models (LLMs)</div>
            </p>
            <p className="font-[400] text-[24px] font-Marcellus-SC mt-3">
              Instructed by Chinny Chukwudozie
            </p>
            <p className="flex gap-2 mt-3">
              <span className="flex gap-2 items-center">
                {" "}
                <span>icon</span>
                <span>Expert Lead Program</span>
              </span>
              <span className="flex gap-2 items-center">
                {" "}
                <span>icon</span>
                <span>Lifetime Acess</span>
              </span>
            </p>

            <p className="flex gap-2">
              <span className="flex gap-2 items-center">
                {" "}
                <span>icon</span>
                <span>Language English</span>
              </span>
              <span className="flex gap-2 items-center">
                {" "}
                <span>icon</span>
                <span>Weekly Live Q&A</span>
              </span>
            </p>
            <p className="text-[#000000] font-[600] md:text-[48px] text-[30px] md:mt-10 mt-3">
              Coming Soon
            </p>
          </div>

          <div>
            <img
              src={videocover}
              alt="video"
              width={100}
              className="lg:w-[65%] w-full"
            />
          </div>
        </div>

        <div className="bg-white py-10">
          <div className="lg:w-[35%] m-auto md:px-5 px-3 ">
            <p className="text-[#000000] font-[400] font-Marcellus-SC text-[24px] pt-5">
              Overview
            </p>
            <p className="font-[#000A1C] font-[700] md:text-[48px] text-[24px] py-5">
              Understanding And Using Large Language Models (LLMs)
            </p>
            <p className="text-[#4D4D4D] font-[400] text-[20px] font-Marcellus-SC pb-10">
              Large Language Models (LLMs) like GPT-4, Claude, and LLaMA are
              transforming the way we interact with AI. This course will give
              you a deep understanding of LLMs, from their fundamental
              principles to practical applications whether you're a developer,
              researcher, or AI enthusiast.
            </p>
          </div>
        </div>

        <div className=" bg-[url('/../src/assets/images/bgimg13.png')] bg-no-repeat bg-center bg-cover pt-10">
          <div className="lg:flex justify-between gap-5 lg:px-20 px-3 md:py-10">
            <div>
              <p className="font-[400] text-[30px] font-Marcellus-SC text-[#000000]">
                Course Details
              </p>
              <p className="font-[400] md:text-[48px] text-[24px] font-Syne text-[#000A1C] lg:w-[70%] leading-tight mt-3 mb-10 lg:mb-0">
                What it’s all about
              </p>
            </div>

            <div className="lg:w-[60%]">
              <div className="flex justify-between gap-10 ">
                <div className="flex flex-col gap-5 md:gap-10">
                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Course Format
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px]font-Marcellus-SC">
                      Online virtual classroom
                    </p>
                  </div>
                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Level
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px]font-Marcellus-SC">
                      Intermediate
                    </p>
                  </div>

                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Software/Material List
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px]font-Marcellus-SC">
                      Adobe After Effects, React
                    </p>
                  </div>

                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Language
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px]font-Marcellus-SC">
                      English
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:gap-10">
                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Structure
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px]font-Marcellus-SC">
                      Pre-recorded Lecture, once-a- week Q&A, individual
                      feedback
                    </p>
                  </div>

                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Category
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px]font-Marcellus-SC">
                      Data engineering, Gen AI
                    </p>
                  </div>

                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Duration
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px]font-Marcellus-SC">
                      Duration
                    </p>
                  </div>

                  <div>
                    <p className="font-Syne font-[700] md:text-[24px] text-[20px] text-[#000000]">
                      Capstone Project
                    </p>
                    <p className="font-[400] text-[#000000] text-[16px] md:text-[20px] font-Marcellus-SC">
                      Yes
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:mt-10 mt-5">
                <p className="font-Syne font-[700] text-md:text-[24px] text-[20px] text-[#000000]">
                  Learning Outcome
                </p>
                <p className="font-[400] text-[#000000]font-Marcellus-SC text-[16px] md:text-[20px]">
                  Describe the data requirements and training processes for
                  LLMs. Understand fine-tuning vs. prompt engineering and when
                  to use each.. Use tools like Hugging Face, TensorFlow, and
                  PyTorch to fine-tune LLMs. Use APIs like OpenAI, Cohere, or
                  Anthropic to integrate LLMs into applications. Optimize LLMs
                  for efficiency, scalability, and cost-effectiveness in
                  production. Explore on-premise vs. cloud-based deployment
                  options for LLM applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-20">
        <div className="mb-5 md:mb-10 pt-10">
          <p className="font-[400] text-[24px] font-Marcellus-SC text-[#000000] mb-3">
            Content
          </p>
          <p className="text-[#000A1C] font-[700] font-Syne text-[48px] leading-tight w-[30%]">
            What you will learn on this course
          </p>
        </div>

        <div className="pb-10">
          <div className="flex justify-between items-center border-b pb-5">
            <div className="flex justify-between items-center w-[82%] ">
              <span className="font-Marcellus-SC font-[400] text-[24px] text-[#000000] ">
                Lesson
              </span>
              <span className="font-Marcellus-SC font-[400] text-[24px] text-[#000000] ">
                Chapters
              </span>
            </div>
            <div className="hidden">Button</div>
          </div>

          {lessons.map((lesson) => (
            <div
              className="flex justify-between items-center gap-5 border-b py-5"
              key={lesson.id}
            >
              <div className="flex justify-between items-center gap-5 w-[80%]">
                <div className="flex items-center gap-2  ">
                  {" "}
                  <span className="font-Marcellus-SC font-[400] text-[20px]  bg-[#C685FF] rounded-xl text-white py-1 px-5">
                    {lesson.week}
                  </span>
                  <span className="font-Marcellus-SC font-[400] text-[20px] text-[#000000] ">
                    {lesson.title}
                  </span>
                </div>
                <div className="font-Syne font-[400] text-[20px] text-[#000000] ">
                  {lesson.chapter}
                </div>
              </div>

              <div>
                <button className="font-[400] text-[20px] font-Marcellus-SC px-5 py-1 border border-[#0E0E0E] rounded-xl cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-[url('/../src/assets/images/bgimg13.png')] bg-no-repeat bg-center bg-cover  pb-20">
        <div className="mb-5 md:mb-10 pt-10 px-20">
          <p className="font-[400] text-[24px] font-Marcellus-SC text-[#000000] mb-3 pt-10">
            Payment Method
          </p>
          <p className="text-[#000A1C] font-[700] font-Syne text-[48px] leading-tight w-[30%]">
            Find the plan that suits you
          </p>
        </div>

        <div className=" grid grid-cols-3 gap-5 px-20">
          {payments.map((payment) => (
            <div key={payment.id}>
              <div className="flex flex-col gap-5 border-[#E8E8E8] border-l-3 px-5 py-3">
                <p className="text-[#000000] font-[600] font-Syne text-[32px]">
                  {payment.title}
                </p>
                <p className="font-[400] text-[#5B5B5B] text-[24px] font-Marcellus-SC">
                  {payment.instruction}
                </p>
                <p className="font-[400] text-[#5B5B5B] text-[24px] font-Marcellus-SC pt-3">
                  {payment.description}
                </p>
                <p className="font-[400] text-[#5B5B5B] text-[24px] font-Marcellus-SC py-3">
                  {payment.amount}
                </p>
                <p className="font-[400] text-[#5B5B5B] text-[24px] font-Marcellus-SC">
                  {payment.qty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
