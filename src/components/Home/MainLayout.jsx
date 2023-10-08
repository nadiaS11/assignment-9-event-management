import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "./../LayoutComponents/Header";
import Footer from "./../LayoutComponents/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div className=" ">
      <ToastContainer limit={1}></ToastContainer>
      <Header></Header>
      <div>
        <div className="min-h-screen mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
