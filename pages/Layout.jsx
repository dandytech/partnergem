import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";

export default function Layout() {
  //Auto scroll page up
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Outlet />

      {location.pathname === "/upskilling" ? <Footer2 /> : <Footer />}
    </div>
  );
}
