import React from "react";
import PropTypes from "prop-types";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url( banner.jpg)",
      }}
      className="bg-cover bg-center bg-no-repeat h-screen bg-blend-overlay bg-[#000000B2]"
    >
      <div className="flex  h-screen items-center p-10 space-y-4 min-w-sm">
        <p className="text-gray-400 text-4xl   lg:text-6xl max-w-3xl  font-medium   ">
          <span className="text-gradient  font-bold text-5xl lg:text-7xl">
            Commuting Ideas And Brand Stories
          </span>{" "}
          <br />
          Lets Thrive Together Live And Virtual Experience...
        </p>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
