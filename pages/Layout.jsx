import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  //Auto scroll page up
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <>
        {/* <Header /> */}

        <Outlet />

        <Footer />
      </>
    </div>
  );
}
