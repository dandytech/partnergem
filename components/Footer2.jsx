import React from "react";
import InputBox from "./InputBox";

export default function Footer2() {
  return (
    <>
      <div className="pb-20 bg-[url('/../public/assets/images/bgimg16.png')] bg-no-repeat bg-cover py-20 px-20">
        <div className="flex items-center justify-between gap-20 w-[90%]">
          <div className="w-[40%]">
            <p className="font-[700] text-[55px] text-white">
              Speak to an Advisor
            </p>
            <p className="font-Marcellus font-[400] text-[22px] text-white">
              Our admissions department is here to help with admissions
              questions, course recommendations and guide you to the areas you
              need to improve to reach your goals.
            </p>
          </div>
          <div className="w-[60%]">
            <form className="flex flex-col gap-5">
              <InputBox placeholder="NAME" type="text" name="name" />
              <InputBox placeholder="Email" type="text" name="name" />
              <InputBox placeholder="Phone" type="text" name="name" />
              <textarea
                className="px-5 py-3 w-full bg-white rounded-lg uppercase placeholder:font-Marcellus-SC"
                placeholder="Which Course Are You Interested In?"
                rows={5}
              />

              <button className="rounded-4xl bg-gradient-to-r from-[#C28383] to-[#7C2CC2] font-[400] text-[20px] py-3 text-white font-marcellusSC w-full">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="py-10 mt-20">
          <p className="font-[700] text-[20px] text-white">Privacy Policy</p>

          <p className="font-[700] text-[20px] text-white py-5">
            Terms of Service
          </p>
          <p className="flex justify-between text-white gap-10 font-[700] text-[20px]">
            <div>© PARTNERGEM 2024 ALL RIGHTS RESERVED</div>
            <div className="flex gap-3">
              <button className="">Linkedin</button>
              <button>X</button>
              <button>Instagram</button>
            </div>

            <div>business@partnergem.com</div>
          </p>
        </div>
      </div>
    </>
  );
}
