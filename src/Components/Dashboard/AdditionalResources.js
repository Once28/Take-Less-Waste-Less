import React from "react"; //import React Component
import "../../index.css";
import { Container, Row, Col, Button } from "reactstrap";

// This components renders additional resources on the dashboard
export function AdditionalResources() {
  return (
    <div>
      <h1 className="labels">Additional Resources</h1>
      <Container>
        <Row>
          <Col>
            <div className="resourceSection">
              <h4>Want to improve your school?</h4>
              <ul className="resourceLinks">
                <li>
                  <Button>www.wastefood.com</Button>
                </li>
                <li>
                  <Button>www.saveyourwaste.com</Button>
                </li>
                <li>
                  <Button>www.foodwastes.com</Button>
                </li>
                <li>
                  <Button>www.wastefood.com</Button>
                </li>
                <li>
                  <Button>www.saveyourwaste.com</Button>
                </li>
                <li>
                  <Button>www.foodwastes.com</Button>
                </li>
                <li>
                  <Button>www.wastefood.com</Button>
                </li>
                <li>
                  <Button>www.saveyourwaste.com</Button>
                </li>
                <li>
                  <Button>www.foodwastes.com</Button>
                </li>
                <li>
                  <Button>www.wastefood.com</Button>
                </li>
                <li>
                  <Button>www.saveyourwaste.com</Button>
                </li>
                <li>
                  <Button>www.foodwastes.com</Button>
                </li>
              </ul>
            </div>
          </Col>
          <div className="earthPicCol">
            <img
              src="img/earth.png"
              className="earthPic"
              alt="Clip art of Students"
            />
          </div>
        </Row>
        <div className="tipSection">
          <h4>Tip of the day</h4>
          <p className="tipofDay">
            Make sure to only take as much food as you will eat each meal!
          </p>
        </div>
      </Container>
    </div>
  );
}
