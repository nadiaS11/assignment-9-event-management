import React from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import SpeakerCard from "./SpeakerCard";

const OurSpeakers = (props) => {
  const speakers = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 my-20">
      {speakers?.map((speaker) => (
        <SpeakerCard key={speaker.id} speaker={speaker}></SpeakerCard>
      ))}
    </div>
  );
};

OurSpeakers.propTypes = {};

export default OurSpeakers;
