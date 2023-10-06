import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Authentications/AuthProvider";

const Home = (props) => {
  const { name } = useContext(AuthContext);
  return <div>this is home {name}</div>;
};

Home.propTypes = {};

export default Home;
