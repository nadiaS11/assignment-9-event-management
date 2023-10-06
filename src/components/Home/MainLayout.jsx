import React from "react";
import PropTypes from "prop-types";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div>
      this is Main
      <Outlet></Outlet>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
