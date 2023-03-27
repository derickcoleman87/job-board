import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>devjobs</h1>
      <div>slider</div>
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
