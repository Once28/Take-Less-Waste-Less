import React, { useState } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// This function takes in a key name and school name and allows the user to edit a school card.
export function EditCard(props) {
  const [school, setSchool] = useState(props.school.schoolName);
  const [waste, setWaste] = useState(props.school.foodWaste);
  const [student, setStudent] = useState(props.school.numOfStudents);

  function handleConfirm(e) {
    e.preventDefault();
    if (school === "" || waste === "" || student === "") {

    } else {
      let key = props.keyName;
      const schoolRef = firebase.database().ref("schools/" + key);
      schoolRef.set({
        schoolName: school,
        foodWaste: waste,
        numOfStudents: student,
      });
    }
    props.callback();
  }

  function handleDelete(e) {
    e.preventDefault();
    let key = props.keyName;
    const schoolRef = firebase.database().ref("schools/" + key);
    schoolRef.remove();
  }

  return (
    <Modal.Dialog>
      <Modal.Body>
        <div>
          <section className="formCard">
            <form id="inputForm">
              <label>School Name: </label>
              <input
                type="text"
                defaultValue={props.school.schoolName}
                onChange={(e) => setSchool(e.target.value)}
                id={"school" + props.keyName}
                name="schoolName"
              />
              <label>Food Waste (Pounds):</label>
              <input
                type="number"
                defaultValue={props.school.foodWaste}
                onChange={(x) => setWaste(x.target.value)}
                id={"waste" + props.keyName}
                name="foodWaste"
              />
              <div id="foodWasteFeedback" className="invalid-feedback"></div>
              <label>Total Students:</label>
              <input
                type="number"
                id={"student" + props.keyName}
                name="totalStudents"
                defaultValue={props.school.numOfStudents}
                onChange={(y) => setStudent(y.target.value)}
              />
            </form>
          </section>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          onClick={handleDelete}
          className="btn btn-danger btn-sm mr-auto">
          Delete
        </Button>
        <Button
          type="submit"
          onClick={handleConfirm}
          className="btn btn-success btn-sm">
          Save
        </Button>
        
      </Modal.Footer>
    </Modal.Dialog>
  );
}
