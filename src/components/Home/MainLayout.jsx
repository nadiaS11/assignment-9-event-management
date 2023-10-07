import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "./../LayoutComponents/Header";
import Footer from "./../LayoutComponents/Footer";

const MainLayout = () => {
  return (
    <div className=" ">
      <Header></Header>
      <div>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
