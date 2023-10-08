import React from "react";
import PropTypes from "prop-types";

const SpeakerCard = ({ speaker }) => {
  const { name, image, title, company, bio } = speaker;
  return (
    <div className="px-6 w-4/5 mt-10 mx-auto flex flex-col border rounded-lg shadow-lg">
      <div className="">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 flex justify-center">
            <img
              className="w-28 h-28 -mt-14 rounded-full shadow-lg"
              src={image}
              alt={name}
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div>
            <p className="text-sm  mt-0 mb-2   font-bold uppercase">{title}</p>

            <p className="mb-2 ">{company}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed ">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SpeakerCard.propTypes = {};

export default SpeakerCard;
