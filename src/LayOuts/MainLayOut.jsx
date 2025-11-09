import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../Component/Footer";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayOut;
