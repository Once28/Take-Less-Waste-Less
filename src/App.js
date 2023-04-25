import React, { useEffect, useState } from "react"; //import React Component
import firebase from "firebase/app";
import "firebase/database";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar.js";
import { Rankings } from "./Components/Dashboard/Rankings.js";
import { AdditionalResources } from "./Components/Dashboard/AdditionalResources.js";
import { InputForm } from "./Components/Dashboard/InputForm.js";
import { MissionStatement } from "./Components/Home/MissionStatement.js";
import { SchoolOfTheMonth } from "./Components/Home/SchoolOfTheMonth.js";
import { TipOfTheDay } from "./Components/Home/TipOfTheDay.js";
import { Footer } from "./Components/Footer/Footer.js";
import "./index.css";
import { Container } from "reactstrap";

let firebaseConfig = {
  apiKey: "AIzaSyA35yPNOAmUzIxaOTg8FNa4JGnLwSkBEBU",
  authDomain: "take-less-waste-less.firebaseapp.com",
  databaseURL: "https://take-less-waste-less-default-rtdb.firebaseio.com",
  projectId: "take-less-waste-less",
  storageBucket: "take-less-waste-less.appspot.com",
  messagingSenderId: "361456464742",
  appId: "1:361456464742:web:82a261768978025f258ea7",
  measurementId: "G-L8F86WVNH6",
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();
let schoolRef = database.ref("schools");

function App() {

  // Keeps track of the schools to be rendered
  const [schools, setSchools] = useState([]);
  
  // Pulls school info from Firebase
  useEffect(() => {
    const schoolReference = firebase.database().ref("schools");
    schoolReference.on("value", (snapshot) => {
      const schoolObj = snapshot.val();

      let objectKeyArray = Object.keys(schoolObj);
      let schoolArray = objectKeyArray.map((key) => {
        let singleSchool = schoolObj[key];
        singleSchool.key = key;
        return singleSchool;
      });
      setSchools(schoolArray);
    });
  }, []);

  // Update the state to render in alphabetical order
  function sortAlphaCallBack() {
    let schoolArray = schools;
    schoolArray.sort(function(a, b) {
      let nameA = a.schoolName.toUpperCase();
      let nameB = b.schoolName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    let newOrder = schoolArray.slice();
    setSchools(newOrder);
  }

  // Update the state to render in reverse alphabetical order
  function sortReverseCallBack() {
    let schoolArray = schools;
    schoolArray.sort(function(a, b) {
      let nameA = a.schoolName.toUpperCase();
      let nameB = b.schoolName.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    let newOrder = schoolArray.slice();
    setSchools(newOrder);
  }

  // Update the state to render in greatest wpc order
  function sortGreatestCallBack() {
    let schoolArray = schools;
    schoolArray.sort((a, b) => (b.foodWaste / b.numOfStudents) - (a.foodWaste / a.numOfStudents));
    let newOrder = schoolArray.slice();
    setSchools(newOrder);
  }

  // Update the state to render in least wpc order
  function sortLeastCallBack() {
    let schoolArray = schools;
    schoolArray.sort((a, b) => (a.foodWaste / a.numOfStudents) - (b.foodWaste / b.numOfStudents));
    let newOrder = schoolArray.slice();
    setSchools(newOrder);
  }

  // Array of the different sorting algorithms to be passed as a callback
  let algorithms = [sortAlphaCallBack, sortReverseCallBack, sortGreatestCallBack, sortLeastCallBack];

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Switch>
          <Route path="/Dashboard">
            <Rankings school={schools} sort={algorithms} />
            <AdditionalResources />
            <InputForm schoolRef={schoolRef}/>
          </Route>
          <Route path="/Home">
            <MissionStatement />
            <SchoolOfTheMonth />
            <TipOfTheDay />
          </Route>
          <Route exact path="/">
            <Redirect to="/Dashboard" />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
