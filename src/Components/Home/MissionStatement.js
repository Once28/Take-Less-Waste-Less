import React from "react"; //import React Component
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

// This components renders the name of our app and the about us on Home Page
export function MissionStatement() {
  return (
    <Container fluid={true}>
      <Row>
        <Col id="titleSubtitle">
          <h1 className="title" title="Take Less Waste Less">
            Take Less, <br />
            Waste Less
            <br />
          </h1>
          <h2 className="subtitle" aria-label="This is who we are">
            We are a dedicated team of students who are passionate about saving
            the planet one step at a time.
            <br />
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
