import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Authentications/AuthProvider";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import Marquee from "react-fast-marquee";

const Home = (props) => {
  const services = useLoaderData();
  console.log(services);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 container py-24   mx-auto gap-16 px-5">
        {services?.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
