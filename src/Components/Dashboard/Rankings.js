import React, { useState } from "react"; // Import React Component
import "../../index.css";
import { Container, Row, Col, List } from "reactstrap";
import ShowHideButton from "./ShowHideButton.js";
import SchoolList from "./SchoolData";
import SortDropdown from "./SortDropdown.js";

// This components renders a ranking of the schools as well as different ways
// of sorting the card view of schools on the dashboard
export function Rankings(props) {
  const [show, setShow] = useState(true);
  function handleClick() {
    setShow(!show);
  }
  if (show) {
    return (
        <div>
          <h1 className="labels text-center">Rankings</h1>
          <Container>
            <Row>
              <Col>
                <h2 className="temp">Top School</h2>
                <List className="topList">
                  <li>Newport High School</li>
                  <li>Skyline High School</li>
                  <li>Lake Washington High School</li>
                </List>
              </Col>
              <Col>
                <h2 className="temp">Top District</h2>
                <List className="topList">
                  <li>Bellevue School District</li>
                  <li>Issaquah School District</li>
                  <li>Seattle School District</li>
                </List>
              </Col>
              <div className="button-col">
                <Row>
                  <ShowHideButton handleClick={handleClick} show={show}/>
                </Row>
                <div className="sort-row">
                  <SortDropdown sort={props.sort}/>
                </div>
              </div>
            </Row>
          </Container>
          <SchoolList schools={props} />
        </div>
      );
  } else {
    return (
      <div>
        <h1 className="labels text-center">Rankings</h1>
        <Container>
          <Row>
            <Col>
              <h2 className="temp">Top School</h2>
              <List className="topList">
                <li>Newport High School</li>
                <li>Skyline High School</li>
                <li>Lake Washington High School</li>
              </List>
            </Col>
            <Col>
              <h2 className="temp">Top District</h2>
              <List className="topList">
                <li>Bellevue School District</li>
                <li>Issaquah School District</li>
                <li>Seattle School District</li>
              </List>
            </Col>
            <div className="button-col">
              <Row>
                <ShowHideButton handleClick={handleClick}/>
              </Row>
              <div className="sort-row">
                <SortDropdown sort={props.sort}/>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
  
}