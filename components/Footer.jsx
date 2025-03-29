import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";

export default function Footer() {
  return (
    <div>
      <div className="pb-20 bg-[url('/assets/images/bgimg7.png')] bg-no-repeat bg-cover py-20">
        <div className="w-[35%] m-auto">
          <p className="font-[700] text-[48px] text-white">
            Let us know about your new venture
          </p>
          <p className="font-[400] text-[20px] py-10 text-white font-marcellus">
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

        <div className="px-20 py-10 mt-20">
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
    </div>
  );
}
