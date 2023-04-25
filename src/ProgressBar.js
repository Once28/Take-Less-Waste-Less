import React, { useEffect, useState } from "react"; //import React Component
import {
  Route,
  Switch,
  Link,
  Redirect,
  NavLink,
} from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import firebase from "firebase/app";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";


export function ProgressBar(props) {
  
  let schoolArray = props.school
  if (schoolArray.length === 0) {
    return null;
  }
  //console.log("before "+ schoolArray.length);
  //console.log("before "+ schoolArray[0]);

  return (
  <div>
    <DropdownList school={schoolArray} />
    <ProgressBarMaker />
  </div>);
}

function DropdownList(props){

  
  function handleDropdown(e) {
    e.preventDefault();


  }

  return (
    <div>
      <h1 id="changed"></h1>
      <h1 className="labels text-center">Food Waste Tracker</h1>
      <h2 className="descriptions landing-desc">
        Your School vs. District Average
      </h2>
      <h3 className="descriptions landing-desc pt-0">
        Food Waste: pounds per capita
      </h3>
      <div className="dropDownList">
        <select id="schoolDropdownList" className="btn btn-success" onClick={handleDropdown}></select>
      </div>
    </div>
  );
}

function ProgressBarMaker(){
  return(
    <div className="p-bars">
    <h3 className="p-0 landing-desc text-left" id="schoolNameProgressbar">
      School
    </h3>
    <div className="progress">
      <div
        id="schoolProgress"
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: 0 + "%" }}
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <h3 className="p-0 landing-desc text-left">District</h3>
    <div className="progress">
      <div
        id="districtProgress"
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: 25.65 + "%" }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
  );
}