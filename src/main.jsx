import React from "react";
import "./Main.css";
import Job from "./Job";

function Main({ mode, jobData }) {
  return (
    <main className={mode === "dark" ? "main--dark" : "main--light"}>
      {jobData.map((job) => (
        <Job data={job} />
      ))}
    </main>
  );
}

export default Main;
