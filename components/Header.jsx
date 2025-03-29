import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo3 from "../src/assets/images/logo3.png";

export default function Header({ src, textColor }) {
  const [show, setShow] = useState(true);

  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <div className="absolute w-full py-3">
      <div className="flex justify-between items-center lg:px-20 md:px-5 px-3 w-[80%] ">
        <div className="">
          <NavLink to="/">
            {" "}
            <img width={140} src={src} alt="logo" />
          </NavLink>
        </div>

        <div
          className={`font-[400] text-[20px] ${textColor} font-Marcellus-SC hidden md:block`}
        >
          <ul className="flex justify-between gap-10  mt-10 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/solutions">Solutions</NavLink>
            </li>
            <li>
              <NavLink to="/upskilling">Upskilling</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden text-xl">
          <button onClick={handleMenu}>
            {" "}
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col px-5 gap-5 border border-gray-100  w-fit pb-5 shadow-md h-screen z-50 bg-white absolute top-0 ${
          show ? "hidden" : ""
        } `}
      >
        <div className="" onClick={handleMenu}>
          <NavLink to="/">
            {" "}
            <img width={140} src={logo3} alt="logo" />
          </NavLink>
        </div>

        <div className={`font-[400] text-[20px] font-Marcellus-SC`}>
          <ul className="flex flex-col gap-5 mt-3 text-black">
            <li onClick={handleMenu}>
              <NavLink to="/">
                {" "}
                <button onClick={handleMenu} className="cursor-pointer">
                  Home
                </button>
              </NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to="/solutions">
                {" "}
                <button onClick={handleMenu} className="cursor-pointer">
                  Solutions
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/upskilling">
                {" "}
                <button onClick={handleMenu} className="cursor-pointer">
                  Upskilling
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                <button onClick={handleMenu} className="cursor-pointer">
                  Blog
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
