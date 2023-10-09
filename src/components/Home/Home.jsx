import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Authentications/AuthProvider";
import Banner from "./Banner";
import { Link, useLoaderData } from "react-router-dom";
import Service from "./Service";
import Customers from "./Customers";

const Home = (props) => {
  const services = useLoaderData();
  // console.log(services);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Banner></Banner>
      <div
        style={{ backgroundImage: "url( cool-background.png)" }}
        className="grid md:grid-cols-2 lg:grid-cols-3  py-24   mx-auto gap-16 px-5 bg-cover bg-center bg-no-repeat bg-blend-overlay"
      >
        {services?.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <Customers></Customers>
      <div className="grid grid-cols-2 items-center mx-auto py-2">
        <img className="mx-auto " src="./demo.png" alt="" />
        <div className="mx-auto space-y-5 lg:space-y-14">
          <h2 className="font-bold md:max-w-xs text-2xl lg:max-w-3xl md:text-5xl ">
            Request Live Demo
          </h2>
          <Link className="btn text-white bg-gray-900 px-10">Contact</Link>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
