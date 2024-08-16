import React from "react";
import { Container, Row, Col } from "react-bootstrap";

/**
 * Footer component that displays a footer section with the current year.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
const Footer = () => {
  // Gets the current year using the Date object
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Container component from react-bootstrap to align content and provide padding */}
      <Container>
        <Row>
          {/* Column component from react-bootstrap for layout and styling */}
          <Col className="text-center py-3">
            {/* Displays the footer text with the current year */}
            <p>Jorge Castro &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

// Exports the Footer component as the default export
export default Footer;
