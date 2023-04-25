import React from "react"; //import React Component
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

// Nav bar with both media queries
export function NavBar() {
  return (
    <header>
      <nav>
        <Container className="navbar" fluid={true}>
          <Row>
            <Col xs="4" aria-label="Take less Waste Less logo">
              <img
                src="./img/tlws.png"
                className="fullLogo"
                alt="Take Less, Waste Less Logo"
              />
            </Col>
            <Col>
              <NavLink
                className="active"
                to="/Home"
                aria-label="Go to home page"
              >
                Home
              </NavLink>
            </Col>
            <Col>
              <NavLink
                to="/Dashboard"
                aria-label="Go to food waste tracker page"
              >
                Dashboard
              </NavLink>
            </Col>
          </Row>
        </Container>
        <Dropdown id="dropdownMenuButton">
          <Dropdown.Toggle variant="success">MENU</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink
                to="/Home"
                id="dropdownMenuText"
                aria-label="Go to home page"
              >
                Home
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                to="/Dashboard"
                id="dropdownMenuText"
                aria-label="Go to food waste tracker page"
              >
                Dashboard
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </header>
  );
}
