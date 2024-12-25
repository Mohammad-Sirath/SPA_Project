import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <MyNavbar />
      <Container className="my-5">
        {/* Introduction Section with background and shadow */}
        <Row className="text-center about-intro p-5 mb-4 shadow-lg rounded">
          <Col>
            <h1 className="text-primary">
              Welcome to Programming with Mohammad
            </h1>
            <p>
              A friendly platform designed to make programming easy and
              enjoyable. Whether you're just starting out or looking to level up
              your skills, we provide a wide range of resources to help you
              master languages like React, JavaScript, Bootstrap, and more.
            </p>
            <p>
              Our approach focuses on real-world applications, hands-on coding
              exercises, and clear explanations, ensuring that you can learn at
              your own pace and achieve your goals.
            </p>
          </Col>
        </Row>

        {/* Target Audience and What We Offer with enhanced styling */}
        <Row className="my-5">
          <Col md={6} className="mb-4">
            <div className="about-card p-4 shadow-sm rounded">
              <h3>Who Can Benefit from Our Courses?</h3>
              <p>
                Whether you're a complete beginner or a seasoned professional,
                our courses are designed for everyone. If you're new to
                programming, we guide you step-by-step through the basics. For
                experienced developers, we offer advanced tutorials that dive
                deep into modern frameworks like React and JavaScript.
              </p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="about-card p-4 shadow-sm rounded">
              <h3>What Do We Offer?</h3>
              <p>
                We offer a variety of tutorials focused on the most popular
                programming languages and tools used in web development today.
                From building interactive user interfaces with React to
                designing responsive websites with Bootstrap, we cover it all.
              </p>
            </div>
          </Col>
        </Row>

        {/* Why Choose Us and Created by Mohammad sections */}
        <Row className="my-5">
          <Col md={6} className="mb-4">
            <div className="about-card p-4 shadow-sm rounded">
              <h3>Why Should You Choose Us?</h3>
              <p>
                Learning with us means getting access to a platform that
                prioritizes your success. Our step-by-step tutorials, combined
                with interactive exercises, ensure you gain the confidence to
                apply your knowledge in real-world scenarios.
              </p>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="about-card p-4 shadow-sm rounded">
              <h3>About Mohammad</h3>
              <p>
                Created by Mohammad, a passionate web developer with a deep love
                for teaching, our platform is built on the belief that anyone
                can become a great developer with the right guidance and
                resources.
              </p>
            </div>
          </Col>
        </Row>

        {/* Contact Information Section */}
        <Row className="my-5 text-center">
          <Col>
            <div className="about-card p-4 shadow-sm rounded">
              <h3>Need Help or Have Questions?</h3>
              <p>
                We're always here to help! If you have any questions about our
                courses, need technical support, or simply want to chat about
                programming, don't hesitate to reach out to us.
              </p>
              <p>
                You can contact us via email at{" "}
                <strong>contact@example.com</strong>, or if you'd prefer, visit
                our <a href="/contact">contact page</a> for more details.
              </p>
            </div>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="my-5 text-center">
          <Col>
            <div className="about-card p-4 shadow-sm rounded">
              <h3>Ready to Start Your Learning Journey?</h3>
              <p>
                There’s no better time than now to start learning and advancing
                your skills. Our courses are ready and waiting for you to dive
                into!
              </p>
              <Link to="/#learning-programs">
                <Button variant="primary">Explore Our Courses</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
