import { useEffect } from "react";
import PropTypes from "prop-types";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Services = ({ service }) => {
  // console.log(service);
  useEffect(() => {
    AOS.init();
  }, []);
  const { name, image, short_description, price, id } = service;
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      className="max-w-sm bg-gray-300 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 mx-auto dark:border-gray-700 flex flex-col "
    >
      <img className="rounded-t-lg flex-grow  h-[30vh]" src={image} alt="" />

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
          <Link
            to={`/service-details/${id}`}
            className="text-white bg-gray-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {
  service: PropTypes.object,
};

export default Services;
