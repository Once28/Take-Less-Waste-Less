import React from "react"; //import React Component
import "../../index.css";
import { Container, Row, Col } from "reactstrap";

// Footer with copyright
export function Footer() {
  return (
    <footer role="doc-endnotes" className="footer-landing mt-0 light-green">
      <Container>
        <Row className="footer-row">
          <Col
            aria-label="copyright of DhruvMaxNJustin.co"
            role="doc-credits"
          >
            <p>&copy; DhruvMaxNJustin.co</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
