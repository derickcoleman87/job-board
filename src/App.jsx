import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import React, { useState } from "react";

let jobData = [
  {
    id: 1,
    timeCreated: "5h ago",
    duration: "Full Time",
    isFullTime: true,
    title: "Senior Software Engineer",
    company: "Scoot",
    country: "United Kingdom",
  },
  {
    id: 2,
    timeCreated: "20h ago",
    duration: "Part Time",
    isFullTime: false,
    title: "Hakell and PureScript Dev",
    company: "Blogr",
    country: "United States",
  },
  {
    id: 3,
    timeCreated: "1d ago",
    duration: "Part Time",
    isFullTime: false,
    title: "Midlevel Back End Engineer",
    company: "Vector",
    country: "Russia",
  },
  {
    id: 4,
    timeCreated: "2d ago",
    duration: "Full Time",
    isFullTime: true,
    title: "Senior Application Engineer",
    company: "Office Lite",
    country: "Japan",
  },
  {
    id: 5,
    timeCreated: "2d ago",
    duration: "Part Time",
    isFullTime: false,
    title: "Remote DevOps Engineer",
    company: "Pod",
    country: "Thailand",
  },
  {
    id: 6,
    timeCreated: "4d ago",
    duration: "Part Time",
    isFullTime: false,
    title: "Desktop Support Manager",
    company: "Creative",
    country: "Germany",
  },
  {
    id: 7,
    timeCreated: "1w ago",
    duration: "Full Time",
    isFullTime: true,
    title: "iOS Engineer",
    company: "Pomodoro",
    country: "United States",
  },
  {
    id: 8,
    timeCreated: "1w ago",
    duration: "Full Time",
    isFullTime: true,
    title: "Senior EJB Developer",
    company: "Maker",
    country: "United Kingdom",
  },
  {
    id: 9,
    timeCreated: "1w ago",
    duration: "Part Time",
    isFullTime: false,
    title: "Senior Frontend Developer",
    company: "Coffeeroasters",
    country: "Singapore",
  },
];
function App() {
  const [mode, setMode] = useState("light");
  const [jobsToShow, setJobsToShow] = useState(jobData);

  function searchJobs(searchText, location, checked) {
    console.log(searchText);
    console.log(location);
    let jobs = [];
    // loop thru jobData based on search fields and push to jobs array
    for (let i = 0; i < jobData.length; i++) {
      if (
        jobData[i].title.includes(searchText) &&
        jobData[i].country.includes(location)
      ) {
        // targeting checkbox to display full time jobs when checked. Not working
        if (checked === true && jobData[i].isFullTime === true) {
          jobs.push(jobData[i]);
        }
      }
    }
    setJobsToShow(jobs);
  }

  // function isChecked(checked) {
  //   for (let i = 0; i < jobData.length; i++) {
  //     if (jobData[i].isFullTime === true) {
  //     }
  //   }
  // }
  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} searchJobs={searchJobs} />
      <Main mode={mode} jobData={jobsToShow} />
    </div>
  );
}

export default App;
