import React from "react";
import "./Job.css";

function Job() {
  return (
    <div className="job">
      <span className="time-created">5h ago</span>
      <span className="duration">Full Time</span>
      <h3 className="title">Senior Software Engineer</h3>
      <p className="company">Scoot</p>
      <p className="country">United Kingdom</p>
    </div>
  );
}

export default Job;
