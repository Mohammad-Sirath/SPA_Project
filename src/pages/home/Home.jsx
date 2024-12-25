import React from "react";
import "./Home.css";
import "../../index.css";
import MyNavbar from "../../components/navbar/Navbar";
import progImage from "../../assets/images/programming2.png";
import { Container, Row, Col } from "react-bootstrap";
import CourseItem from "../../components/courseItem/CourseItem";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import { courseData } from "../../data";

function Home() {
  const [courses, setCourses] = useState(courseData);

  return (
    <div>
      <MyNavbar />
      <Container fluid="md">
        <Row className="my-5 align-items-center">
          <Col lg={6}>
            <h1 className="title-name">
              Programming with <strong className="title-name">Mohammad</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem I psum has been the industry's standard dummy text
              ever since the 1500s, when an unknown pri nter took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also t he leap into
              electronic typesetting, remaining essentially unchanged
            </p>
          </Col>
          <Col lg={6} className="py-4">
            <img src={progImage} className="img-fluid" />
          </Col>
        </Row>
        <Row id="learning-programs" className="my-5">
          <h2 className="py-4 lalezar">Learning Programs</h2>
          {courses.map((course) => (
            <Col key={course.id} md={6} lg={4} xl={3} className="py-3">
              <CourseItem {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
