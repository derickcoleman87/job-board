import React from "react";
import "./Job.css";

function Job({ data }) {
  return (
    <div className="job">
      <span className="time-created">{data.timeCreated}</span>
      <span className="duration">{data.duration}</span>
      <h3 className="title">{data.title}</h3>
      <p className="company">{data.company}</p>
      <p className="country">{data.country}</p>
    </div>
  );
}

export default Job;
