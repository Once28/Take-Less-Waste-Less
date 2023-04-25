import React, { useState } from "react"; //import React Component
import "../../index.css";
import { Container, Button, Form, Label, Input, Alert } from "reactstrap";

// This function changes the passed in string to TitleCase
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// This components displays a form where the user can input information to create a card for their school on the dashboard
// The props is expecting a reference to the firebase database
export function InputForm(props) {
  const [school, setSchool] = useState("");
  const [waste, setWaste] = useState("");
  const [student, setStudent] = useState("");
  const [missingInput, setMissingInput] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    if (school === "" || waste === "" || student === "") {
      setMissingInput(true);
    } else {
      let sName = school;
      if (sName.toLowerCase().slice(-11) !== "high school") {
        sName += " High School";
      }
      let data = {
        foodWaste: waste,
        numOfStudents: student,
        schoolName: toTitleCase(sName),
      };
      props.schoolRef.push(data);
      setSchool("");
      setWaste("");
      setStudent("");
      setMissingInput(false);
    }
  }
  if (missingInput) {
    return (
      <Container>
        <h1 className="labels text-center">Input</h1>
        <h2 className="descriptions landing-desc">(For the past week)</h2>
        <section>
          <Form id="inputForm">
            <Label>School Name: </Label>
            <Input type="text" id="schoolName" name="schoolName" value={school} onChange={(e) => setSchool(e.target.value)} />

            <Label>Food Waste (Pounds):</Label>
            <Input type="number" id="foodWaste" name="foodWaste" value={waste} onChange={(x) => setWaste(x.target.value)} />

            <Label>Total Students:</Label>
            <Input type="number" id="totalStudents" name="totalStudents" value={student} onChange={(y) => setStudent(y.target.value)} />

            <Alert variant="danger" id="alert">An input is missing in one or more of the fields!</Alert>
            <div className="submittoForm">
              <Button
                type="submit"
                className="btn btn-success"
                id="inputSubmitBtn"
                onClick={handleClick}>
                Add New School
            </Button>
            </div>
          </Form>
        </section>
      </Container>
    );
  } else {
    return (
      <Container>
        <h1 className="labels text-center">Input</h1>
        <h2 className="descriptions landing-desc">(For the past week)</h2>
        <section>
          <Form id="inputForm">
            <Label>School Name: </Label>
            <Input type="text" id="schoolName" name="schoolName" value={school} onChange={(e) => setSchool(e.target.value)} />

            <Label>Food Waste (Pounds): </Label>
            <Input type="number" id="foodWaste" name="foodWaste" value={waste} onChange={(x) => setWaste(x.target.value)} />

            <Label>Total Students: </Label>
            <Input type="number" id="totalStudents" name="totalStudents" value={student} onChange={(y) => setStudent(y.target.value)} />
            
            <div className="submittoForm">
              <Button
                type="submit"
                className="btn btn-success"
                id="inputSubmitBtn"
                onClick={handleClick}
              >
                Add New School
            </Button>
            </div>
          </Form>
        </section>
      </Container>
    );
  }
}
