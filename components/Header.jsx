import React from "react";

import { NavLink } from "react-router-dom";

export default function Header({ src, textColor }) {
  return (
    <div className="absolute w-full py-3">
      <div className="flex justify-between items-center px-20 w-[80%] ">
        <div className="">
          <NavLink to="/">
            {" "}
            <img width={140} src={src} alt="logo" />
          </NavLink>
        </div>

        <div className={`font-[400] text-[20px] ${textColor}`}>
          <ul className="flex justify-between gap-10  mt-10 uppercase">
            <li>
              <NavLink to="/" className="font-marcellusSC">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="solutions">Solutions</NavLink>
            </li>
            <li>
              <NavLink to="/" className="font-marcellusSC">
                Upskilling
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
