// import { Col, Row, Container } from "react-bootstrap";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col>
//             <h2>Enjoying coding with difference courses</h2>
//             <p>
//               This site was created with the goal of providing educational
//               content that lets you experience the sweet joy of learning web
//               development and programming.
//             </p>
//           </Col>
//           <Col style={{ textAlign: "left" }}>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlbEgPN2yE3geYLBQ-B1ZpsDsAzy7LadeCw&s"
//               alt="New Logo"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default Footer;

import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css"; // Optional for custom styles

function Footer() {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Heading and Paragraph */}
          <Col xs={12} md={8} lg={8}>
            <h2 className="text-primary mb-3">
              Enjoying coding with different courses
            </h2>
            <p className="text-muted">
              This site was created with the goal of providing educational
              content that lets you experience the sweet joy of learning web
              development and programming.
            </p>
          </Col>

          {/* Right Column - Logo Image */}
          <Col
            xs={12}
            md={4}
            lg={4}
            className="d-flex justify-content-center justify-content-md-start"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlbEgPN2yE3geYLBQ-B1ZpsDsAzy7LadeCw&s"
              alt="New Logo"
              className="img-fluid"
              style={{ maxWidth: "200px" }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
