import React, { useContext } from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import Customers from "./Customers";
import TestimonialCard from "./TestimonialCard";

const Home = () => {
  const services = useLoaderData();
  // console.log(services);

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

      <div>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Read reviews from out trusted customers.
            </h2>

            {services?.slice(0, 1).map((service) => (
              <TestimonialCard
                key={service.id}
                service={service}
              ></TestimonialCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
