import React from "react"; //import React Component
import "../../index.css";

// This components renders the school of the month on Home Page
export function SchoolOfTheMonth() {
    return (
      <main aria-label="Main content on the school of the month">
        <h1
          className="labels text-center"
          aria-label="School of the month"
        >
          School of the Month
        </h1>
        <h2 className="descriptions">Sammamish High School</h2>
        <img
          src="../../img/school.jpeg"
          className="schoolPic"
          alt="Sammamish High School"
        />
        <h3 className="descriptions">
          Sammamish High School reduced food waste by 65% since last month!
        </h3>
      </main>
    );
  }