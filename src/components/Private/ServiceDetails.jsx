import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import TestimonialCard from "../Home/TestimonialCard";
const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(services);
  const [service, setService] = useState({});

  useEffect(() => {
    const findService = services.find((service) => service.id === idInt);

    setService(findService);
    console.log(findService);
  }, [idInt, services]);

  const {
    image,
    name,
    short_description,
    key_features,
    service_benefits,
    price,
  } = service;
  return (
    <div className="container mx-auto min-h-screen">
      <div
        style={{
          backgroundImage: `url( ${image})`,
          backgroundRepeat: "no-repeat",
          height: "60vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded  flex flex-col justify-end items-center mt-10 bg-blend-overlay bg-[#a89d84be] "
      >
        <div className=" text-center  -mb-12 ">
          <h2 className="py-5 border max-w-3xl text-5xl text-white bg-gray-900 font-bold px-2 rounded ">
            {name}
          </h2>
        </div>
      </div>

      {/* work from here */}
      <div className="relative block md:flex items-center mt-32 mb-20">
        <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
          <div className="text-lg font-medium text-green-600 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
            What are we offering?
          </div>

          <div className="flex justify-center mt-3 py-10 px-5 ">
            <ul className="space-y-2">
              {service_benefits?.map((benefit, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="w-4 h-4 icon-umbrella"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="primary"
                        d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
                      />
                      <path
                        className="secondary"
                        d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={"/register"}
            className="  flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16"
          >
            <span>Create account</span>
            <span className="font-medium text-gray-700 ml-2">➔</span>
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
          <div className="bg-gray-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
            <div className="text-lg font-medium uppercase p-8 text-center border-b border-gray-800 tracking-wide">
              Starts at {price}
            </div>
            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
              {short_description}
            </div>
            <div className="mt-8 border border-gray-800 mx-8 lg:mx-16 flex flex-wrap">
              {key_features?.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-gray-800"
                >
                  {feature}
                </div>
              ))}
            </div>
            <Link className="  flex items-center justify-center bg-gray-800 hover:bg-gray-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8">
              <span>Contact sales</span>
              <span className="font-medium text-gray-300 ml-2">➔</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Do not trust us. Hear from our clients
          </h2>

          <TestimonialCard service={service}></TestimonialCard>
        </div>
      </div>
    </div>
  );
};

ServiceDetails.propTypes = {};

export default ServiceDetails;
