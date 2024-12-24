import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h2>Enjoying coding with difference courses</h2>
            <p>
              This site was created with the goal of providing educational
              content that lets you experience the sweet joy of learning web
              development and programming.
            </p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlbEgPN2yE3geYLBQ-B1ZpsDsAzy7LadeCw&s"
              alt="New Logo"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
