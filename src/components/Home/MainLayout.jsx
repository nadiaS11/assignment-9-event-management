import React from "react";
import PropTypes from "prop-types";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Header from "./../LayoutComponents/Header";

const MainLayout = (props) => {
  return (
    <div className=" ">
      <Header></Header>
      <div className="h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
