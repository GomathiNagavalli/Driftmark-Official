import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "../components/Solutions.css";
import SolutionsPage from "./SolutionsPage";
import { useNavigate } from "react-router-dom";

import Frontpage2 from "../assets/Frontpage2.jpg";

const Solutions = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1 className="fw-bold display-5 mt-3">
          Let Us Bring Your Product to Life
        </h1>
        <Row className="mt-4">
          <Col md={6}>
            <h2 className="display-6">
              Expert Software Development & Consulting Services
            </h2>

            <p>
              To carry on the business of dealing and maintenance of computer
              hardware, computer systems and assemble data processors, program
              designs and to buy, sell or otherwise deal in such hardware and
              software packages and all types of tabulating machine, accounting
              machines, computerized telecommunication systems and network,
              their components, spare parts, equipments and devices.
            </p>
          </Col>
          <Col md={6}>
            <Image src={Frontpage2} rounded fluid className="shadow" />
          </Col>
        </Row>
      </Container>

      {/* ///////////////////// */}
      <SolutionsPage />
      <Container className="contact-container">
        <div>
          <h1 style={{ color: "white" }}>We're Dedicated to Your</h1>
          <h1 style={{ color: "white" }}>Business Success</h1>
          <Button className="mt-3" onClick={() => navigate("/contact")}>
            Contact Us Today
          </Button>
        </div>
      </Container>
      <Container className="mt-3">
        <Row>
          <Col md={6}>
            <h3 className="mb-3">Transparent Pricing for Peace of Mind</h3>
            <p>
              When unexpected IT issues arise, the last thing you need is a
              surprise bill. That's why we offer a simple, all-inclusive monthly
              rate that covers all your IT needs, regardless of the unexpected
              twists and turns. With our predictable pricing, you can budget
              with confidence and focus on what matters most - running your
              business.
            </p>
            <Button onClick={() => navigate("/contact")}>
              Get A Free Consulting
            </Button>
          </Col>
          <Col md={6}>
            <h3 className="mb-3 ">The Driftmark Difference</h3>
            <p>
              At Driftmark, expertise and experience come together to deliver
              unparalleled IT solutions. Our tailored services are backed by a
              team of dedicated experts who are always available to provide
              guidance and support. With Driftmark, you can trust that you're in
              good hands.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="layout my-4 py-3">
        
          <Col   md={6}>
            <h3 className="my-2"> Unlock the Power of Cloud Technology</h3>
            <p>
              As cloud computing specialists, we empower you to access your data
              from anywhere, at any time. Our secure and reliable solutions
              feature dedicated virtual servers hosted in a state-of-the-art,
              SSAE 16 certified data center, giving you peace of mind and
              unparalleled flexibility.
            </p>
            <Button on Click={() => navigate("/cloud")}>
              How It Works
            </Button>
          </Col>
          <Col md={6} >
          {/* className="layout p-4 m-3" */}
            <h3 className="my-2 ">
              Expert Support for Ambitious Organizations
            </h3>
            <p>
              As seasoned IT professionals, we're uniquely equipped to augment
              the capabilities of in-house IT teams at larger enterprises.
              Whether you need specialized expertise or an extra layer of
              support, we're here to help you overcome challenges and drive
              business growth.
            </p>
            <Button onClick={() => navigate("/contact")}>Get Your Team</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Solutions;
