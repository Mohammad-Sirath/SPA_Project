import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Importing Bootstrap components
import MyNavbar from "../../components/navbar/Navbar"; // Assuming Navbar component exists
import Footer from "../../components/footer/Footer"; // Assuming Footer component exists
import { Link } from "react-router-dom"; // For navigation
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <MyNavbar />

      <Container fluid="lg" className="mt-5" style={{ marginBottom: "150px" }}>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={8} lg={6}>
            <div className="error-container">
              <h1 className="display-1 text-danger">404</h1>
              <h2 className="mb-4">Oops! Page Not Found</h2>
              <p className="lead text-muted">
                The page you are looking for might have been moved or deleted.
              </p>
              <Link to="/" className="btn btn-primary btn-lg">
                Go Back to Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default NotFound;
