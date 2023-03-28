import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import React, { useState } from "react";

let jobData = [
  {
    timeCreated: "5h ago",
    duration: "Full Time",
    title: "Senior Software Engineer",
    company: "Scoot",
    country: "United Kingdom",
  },
  {
    timeCreated: "20h ago",
    duration: "Part Time",
    title: "Hakell and PureScript Dev",
    company: "Blogr",
    country: "United States",
  },
  {
    timeCreated: "1d ago",
    duration: "Part Time",
    title: "Midlevel Back End Engineer",
    company: "Vector",
    country: "Russia",
  },
  {
    timeCreated: "2d ago",
    duration: "Full Time",
    title: "Senior Application Engineer",
    company: "Office Lite",
    country: "Japan",
  },
  {
    timeCreated: "2d ago",
    duration: "Part Time",
    title: "Remote DevOps Engineer",
    company: "Pod",
    country: "Thailand",
  },
  {
    timeCreated: "4d ago",
    duration: "Part Time",
    title: "Desktop Support Manager",
    company: "Creative",
    country: "Germany",
  },
  {
    timeCreated: "1w ago",
    duration: "Full Time",
    title: "iOS Engineer",
    company: "Pomodoro",
    country: "United States",
  },
  {
    timeCreated: "1w ago",
    duration: "Full Time",
    title: "Senior EJB Developer",
    company: "Maker",
    country: "United Kingdom",
  },
  {
    timeCreated: "1w ago",
    duration: "Part Time",
    title: "Senior Frontend Developer",
    company: "Coffeeroasters",
    country: "Singapore",
  },
];
function App() {
  const [mode, setMode] = useState("light");
  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} />
      <Main mode={mode} jobData={jobData} />
    </div>
  );
}

export default App;
