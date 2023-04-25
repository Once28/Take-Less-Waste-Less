import React, { useState } from "react"; //import React Component
import { Button } from "reactstrap";
import { EditCard } from "./EditCard.js";

export default function SchoolList(props) {

  let schools = props.schools.school;

  if (schools.length === 0) {
    return null;
  }

  let schoolItems = [];
  schoolItems = schools.map((schoolObj) => {
    return <Cards school={schoolObj} key={schoolObj.key} />;
  });

  return <div className="card-container">{schoolItems}</div>;
}

function Cards(props) {
  let school = props.school;
  let wpc =
    Math.round(
      (parseInt(props.school.foodWaste) /
        parseInt(props.school.numOfStudents)) *
        100
    ) / 100;
  let key = props.school.key; 

  const [show, toggleShow] = useState(false);

  function showCallBack() {
    if (show) {
      toggleShow(false);
    } else {
      toggleShow(true);
    }
  }

  return (
    <div className="card">
      <Button className="edit btn btn-success btn-sm" onClick={() => toggleShow(!show)}>
        Edit
      </Button>
      <h1>{school.schoolName}</h1>
      <p>Food waste (lbs): {school.foodWaste}</p>
      <p>Number of students: {school.numOfStudents}</p>
      <p>Waste per capita: {wpc}</p>
      { show &&       
      <div id={key}>
        <EditCard keyName={key} school={props.school} callback={showCallBack} />
      </div>
      }
    </div>
  );
}