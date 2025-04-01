import React from "react";
import InputBox from "./InputBox";

export default function Footer2() {
  return (
    <>
      <div className="lg:pb-5 md:pb-5 bg-[url('/assets/images/bgimg16.png')] bg-no-repeat bg-cover lg:py-20 md:py-10 py-5 lg:px-20 px-3 md:px-5">
        <div className="md:flex items-center justify-between gap-20 md:w-[90%]">
          <div className="md:w-[40%]">
            <p className="font-[700 text-[30px] md:text-[34px]  lg:text-[55px] text-white pb-3 md:pb-0">
              Speak to an Advisor
            </p>
            <p className="font-Marcellus font-[400] text-lg:[22px] text-[18px] text-white">
              Our admissions department is here to help with admissions
              questions, course recommendations and guide you to the areas you
              need to improve to reach your goals.
            </p>
          </div>
          <div className="md:w-[60%] mt-5 md:mt-0">
            <form className="flex flex-col gap-5">
              <InputBox placeholder="NAME" type="text" name="name" />
              <InputBox placeholder="Email" type="text" name="name" />
              <InputBox placeholder="Phone" type="text" name="name" />
              <textarea
                className="px-5 py-3 w-full bg-white rounded-lg uppercase placeholder:font-Marcellus-SC"
                placeholder="Which Course Are You Interested In?"
                rows={5}
              />

              <button className="rounded-4xl bg-gradient-to-r from-[#C28383] to-[#7C2CC2] hover:from-[#7C2CC2] hover:to-[#0697DF] font-[400] text-[20px] py-3 text-white font-marcellus-SC w-full">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className=" px-3 md:px-5 py-5 lg:mt-20 mt-10">
          <p className="font-[700] lg:text-[20px] text-white text-[14px]">
            Privacy Policy
          </p>

          <p className="font-[700] lg:text-[20px] text-[14px] text-white py-5">
            Terms of Service
          </p>
          <p className="lg:flex justify-between text-white gap-10 font-[700] md:text-[20px] lg:text-[48px] space-y-5 lg:space-y-0 text-[14px]">
            <div className="lg:text-[20px] text-[14px]">
              © PARTNERGEM {new Date().getFullYear()} ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-3">
              <button className="lg:text-[20px] text-[14px]">Linkedin</button>
              <button className="lg:text-[20px] text-[14px]">X</button>
              <button className="lg:text-[20px] text-[14px]">Instagram</button>
            </div>

            <div className="lg:text-[20px] text-[14px]">
              business@partnergem.com
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
