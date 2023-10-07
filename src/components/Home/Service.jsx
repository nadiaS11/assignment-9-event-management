import React from "react";
import PropTypes from "prop-types";

const Services = ({ service }) => {
  console.log(service);
  const { name, image, short_description, price, id } = service;
  return (
    <div className="max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col ">
      <img className="rounded-t-lg flex-grow " src={image} alt="" />

      <div className="p-5 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {short_description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {};

export default Services;
