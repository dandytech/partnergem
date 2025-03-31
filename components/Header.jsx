import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo3 from "/assets/images/logo3.png";
import { RiMenu5Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ src, textColor }) {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <div className="absolute w-full py-3">
      <div className="flex justify-between items-center lg:px-20 md:px-5 px-3 lg:w-[80%] ">
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
        <div className="md:hidden font-bold bg-white text-3xl pt-1 rounded-full px-2 shadow:4xl ">
          <button onClick={handleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Navbar Menu */}
      <motion.div
        initial={{ x: "-100%" }} // Start off-screen
        animate={{ x: show ? "0%" : "-100%" }} // Animate based on state
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
        className="flex flex-col px-5 gap-5 border border-gray-100 w-fit pb-5 shadow-md h-screen z-50 bg-white absolute top-0 left-0"
      >
        <div onClick={handleMenu}>
          <NavLink to="/">
            <img width={140} src={logo3} alt="logo" />
          </NavLink>
        </div>

        <div className="font-[400] text-[20px] font-Marcellus-SC">
          <ul className="flex flex-col gap-5 mt-3 text-black">
            <li onClick={handleMenu}>
              <NavLink to="/">
                <button
                  onClick={handleMenu}
                  className="cursor-pointer hover:text-[#0697DF]"
                >
                  Home
                </button>
              </NavLink>
            </li>
            <li onClick={handleMenu}>
              <NavLink to="/solutions">
                <button
                  onClick={handleMenu}
                  className="cursor-pointer hover:text-[#0697DF]"
                >
                  Solutions
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/upskilling">
                <button
                  onClick={handleMenu}
                  className="cursor-pointer hover:text-[#0697DF]"
                >
                  Upskilling
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                <button
                  onClick={handleMenu}
                  className="cursor-pointer hover:text-[#0697DF]"
                >
                  Blog
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
