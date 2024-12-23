import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
// import Cloudpage1 from "../assets/Cloudpage1.png";
// import SmallCloud1 from "../assets/smallcloud1.png";
// import SmallCloud2 from "../assets/smallcloud2.png";
// import SmallCloud3 from "../assets/smallcloud3.png";
// import cloud from "../assets/cloud.jpg";
// import ITsolution from "../assets/ITsolution.png";
// import cloud2 from "../assets/cloud2.png";
import "../components/Solutions.css";
import { useNavigate } from "react-router-dom";
import cloudnew from "../assets/cloudnew.jpg";
// import Backgroundimg from '../assets/Background.jpg';

const Cloud = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <div>
              {/* <span style={{color:'skyblue'}}>CLOUD</span> */}
              <h2> Secure Access, </h2>
              <h2>Anywhere, Anytime</h2>
              <p>
                The modern workplace is no longer confined to a physical office.
                To keep pace, small and midsize businesses need secure, reliable
                access to their data from anywhere. We provide the solutions you
                need to stay connected, productive, and secure - no matter where
                your work takes you.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image src={cloudnew} fluid rounded style={{ height: "70%" }} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="background-image mb-3 justify-content-center align-items-center">
          <Col lg={10}>
            {" "}
            <div className="text-center">
              <h4 className="" style={{ color: "white" }}>
                How It Works in high-level-language
              </h4>
              <h6 className="" style={{ color: "white" }}>
                Cloud Technology Made Easy
              </h6>
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={4}>
            <h3>Secure Data Hosting, Peace of Mind Guaranteed</h3>
            <p>
              We safeguard your critical data and applications in
              state-of-the-art, highly secure data centers. Our team of expert
              technicians monitors and maintains these facilities 24/7, ensuring
              your information is always protected and available.
            </p>
          </Col>
          <Col md={4}>
            <h3>Instant Access to Your Data, Anywhere</h3>
            <p>
              Need to access your information on the go? We'll deploy your data
              and applications directly to your device of choice, eliminating
              the need for on-site hardware. Enjoy seamless, instant access to
              your critical information, wherever you are.
            </p>
          </Col>
          <Col md={4}>
            <h3>We Backup Your Data</h3>
            <p>
              When we backup your data, our backups have backups. Your
              information will always be in secure hands.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="contact-container">
        <div>
          <h1 style={{ color: "white" }}>We allways ready to</h1>
          <h1 style={{ color: "white" }}> help your business.</h1>
          <Button className="mt-3" href="/contact">
            Contact Us Today
          </Button>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="text-center">
              <h3 className="my-3 ">The Right Team, Behind You</h3>
              <p>
                Our advantage lies in our experienced team, dedicated to
                providing custom IT solutions and exceptional support to help
                our clients achieve their goals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-3">
        <Row>
          <Col>
            <div className="text-center">
              <h1 className="display-6 ">
                Driftmark Brings Your Vision to Life!
              </h1>
              <p className="lead">
                Our team of experts specializes in delivering cutting-edge
                solutions in frontend development, full-stack development, and
                Flutter mobile app development. Leveraging the power of ReactJS
                and Flutter, we've successfully completed 3+ projects that
                empower businesses to reach new heights.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Row g={3}>
          <Col className="layout p-4 m-3">
            <div className="text-center">
              <Image
                src={ITsolution}
                style={{ width: "200px", height: "200px" }}
              ></Image>
            </div>
            <h3 className="my-2">
              Trusted IT Solutions for a Stronger Business
            </h3>
            <p>
              We've been delivering expertly managed IT solutions that empower
              businesses to thrive. Our comprehensive approach safeguards your
              business, protects your data, and provides a solid foundation for
              growth and success.
            </p>
            <Button href="/enterprise">How It Works</Button>
          </Col>
          <Col className="layout p-4 m-3">
            <div className="text-center">
              <Image
                src={cloud2}
                style={{ width: "200px", height: "200px" }}
              ></Image>
            </div>

            <h3 className="my-2">Expert IT Support for Enterprise Teams</h3>
            <p>
              As seasoned IT professionals, we partner with internal IT
              departments at large organizations to provide specialized
              expertise and support. Whether you need to augment your team's
              capabilities or tackle complex IT challenges, we're here to help
              drive your business forward.
            </p>
            {/* <Button>Reinforce Your IT</Button> */}
      {/* <Button onClick={() => navigate("/enterprise")}> Know More</Button>
          </Col>
      //   </Row>
      // </Container> */}
    </>
  );
};

export default Cloud;
