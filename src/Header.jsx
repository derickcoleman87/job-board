import React, { useState } from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";

let mode = "dark";

function Header({ mode, setMode, searchJobs, isChecked }) {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <header className={mode === "dark" ? "header-dark" : "header-light"}>
      <div className="header_top-row">
        <h1>devjobs</h1>
        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
          {mode} mode
        </button>
      </div>
      <form
        className="search-container"
        onSubmit={(event) => {
          event.preventDefault();
          searchJobs(searchText, location, checked);
        }}
      >
        <div>
          <AiOutlineSearch />
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Filter by title, companies, expertise.."
          />
        </div>
        <div>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Filter by location.."
          />
        </div>
        <div className="search">
          <input
            value={checked}
            onChange={(e) => setChecked(e.target.value)}
            type="checkbox"
            name=""
            id=""
          />
          <span>Full Time Only</span>
          <button className="search-btn">Search</button>
        </div>
      </form>
    </header>
  );
}

export default Header;
