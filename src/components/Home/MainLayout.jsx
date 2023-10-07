import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "./../LayoutComponents/Header";
import Footer from "./../LayoutComponents/Footer";

const MainLayout = (props) => {
  return (
    <div className=" ">
      <Header></Header>
      <div className="h-screen">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
