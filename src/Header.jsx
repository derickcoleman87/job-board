import React, { useState } from "react";
import "./Header.css";

let mode = "dark";

function Header({ mode, setMode }) {
  return (
    <header className={mode === "dark" ? "header-dark" : "header-light"}>
      <div className="header_top-row">
        <h1>devjobs</h1>
        <button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
          {mode} mode
        </button>
      </div>
      <div className="search-container">
        <div>
          <input
            type="text"
            placeholder="Filter by title, companies, expertise.."
          />
        </div>
        <div>
          <input type="text" placeholder="filter by location.." />
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Full Time Only</span>
          <button>Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
