import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "../components/Solutionspage.css";
import Carousel from "react-bootstrap/Carousel";
import courosalboy from "../assets/courosalboy.jpg";
import courosalsecurity from "../assets/courosalsecurity.jpg";
// import courosal from '../assets/courosal.jpg';
import coursalNew from "../assets/courosalNew.jpg";

const SolutionsPage = () => {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center display-6">
          Tailored Solutions to Meet Your
        </h2>
        <h2 className="text-center display-6"> Unique Requirements</h2>
        <p className="text-center">
          Your success is our top priority. We start by understanding your
          unique needs, aspirations, and challenges. Together, we'll conduct a
          thorough assessment of your current situation to craft a personalized
          plan that aligns with your goals and ensures our services deliver the
          results you need to drive your business forward.
        </p>

        <Row className="justify-content-center align-items-center my-3">
          {/* <div className="text-center"> */}
          <Col lg={10}>
            <Carousel>
              <Carousel.Item>
                <Image
                  src={courosalboy}
                  fluid
                  style={{ filter: "brightness(50%)", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h1 style={{ color: "white" }}>
                    Transform Your Online Presence
                     {/* with Custom Web Development
                    Solutions */}
                  </h1>
                  <p style={{ color: "white" }}>
                    Elevate your business with a stunning, user-friendly, and
                    responsive website that drives engagement and conversions.
                    {/* Our expert web developers craft tailored solutions using the
                    latest technologies to help you stand out in the digital
                    landscape. */}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={coursalNew}
                  fluid
                  style={{ filter: "brightness(50%)", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h1 style={{ color: "white" }}>
                    Create visually stunning mobile apps
                    with our expert
                  </h1>
                  <p style={{ color: "white" }}>
                    {/* Flutter app development services.  */}
                    Our team leverages the
                    power of Flutter to deliver seamless, cross-platform
                    experiences that delight users and drive business success.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={courosalsecurity}
                  fluid
                  style={{ filter: "brightness(50%)", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h1 style={{ color: "white" }}>
                    Protecting Your Network Around the Clock
                  </h1>
                  <p style={{ color: "white" }}>
                    Enjoy unparalleled peace of mind with our 24/7 security
                    services, designed to safeguard your network from threats.
                    {/* Our team of New England-based experts is always on standby,
                    just a phone call away, to provide prompt support and ensure
                    your business stays secure. */}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SolutionsPage;
