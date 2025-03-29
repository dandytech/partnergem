import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";

export default function Footer() {
  return (
    <div>
      <div className="lg:pb-20 bg-[url('/assets/images/bgimg7.png')] bg-no-repeat bg-cover lg:py-20 md:py-10 px-3 md:px-5">
        <div className="lg:w-[35%] m-auto">
          <p className="font-[700] lg:text-[48px] pt-10 text-[30px] md:text-[34px] text-white">
            Let us know about your new venture
          </p>
          <p className="font-[400] text-[20px] md:py-10 pt-10 pb-3 md:pt-0 text-white font-marcellus">
            Tell us about your company.
          </p>
          <form className="flex flex-col gap-5 ">
            <InputBox placeholder="NAME" type="text" name="name" />
            <InputBox placeholder="EMAIL" type="text" name="name" />
            <InputBox placeholder="COMPANY NAME" type="text" name="name" />
            <InputBox placeholder="COMPANY WEBSITE" type="text" name="name" />
            <InputBox placeholder="PHONE" type="text" name="name" />
            <InputBox
              placeholder="HOW CAN WE HELP YOU"
              type="text"
              name="name"
            />

            <p className="mt-7">
              {" "}
              <Button>Submit</Button>
            </p>
          </form>
        </div>

        <div className="lg:px-20 px-3 md:px-5 py-10 lg:mt-20 mt-10">
          <p className="font-[700] text-[20px] text-white">Privacy Policy</p>

          <p className="font-[700] text-[20px] text-white py-5">
            Terms of Service
          </p>
          <p className="lg:flex justify-between text-white gap-10 font-[700] md:text-[20px] text-[18px] space-y-5 lg:space-y-0">
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
    </div>
  );
}
