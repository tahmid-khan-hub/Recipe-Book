import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="w-[99%] md:max-w-[1500px] mx-auto overflow-x-hidden">
      <div className="max-w-[1420px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;