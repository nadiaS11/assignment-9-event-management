import React from "react";
import PropTypes from "prop-types";
import TestimonialCard from "./TestimonialCard";

const Testimonial = (props) => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>
        <TestimonialCard></TestimonialCard>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"></div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {};

export default Testimonial;
