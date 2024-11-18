import React from "react";

/* React-Bootstrap Imports */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Simple Footer Component
// Subject to change
function Footer() {
    return (
        <footer className="bg-dark-subtle py-4 mt-4">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-center" xs={12} md={6}>
                        <p className="mb-0">&copy; 2024 - Mark Canty</p>
                    </Col>
                    <Col className="d-flex flex-column justify-content-end text-center" xs={12} md={6}>
                        <p className="mb-0">Pages:</p>
                        <a href="#" className="ms-2 text-dark">Contact Us</a>
                        <a href="#" className="ms-2 text-dark">About Us</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;