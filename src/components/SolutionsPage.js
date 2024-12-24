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
        <h2 className="text-center">
          Tailored Solutions to Meet Your
        </h2>
        <h2 className="text-center"> Unique Requirements</h2>
        <p className="text-center mb-5">
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
                  <h2 style={{ color: "white" }}>
                    Transform Your Online Presence
                     {/* with Custom Web Development
                    Solutions */}
                  </h2>
                  <p style={{ color: "white" }}>
                    Elevate your business with a stunning responsive website
                    {/* responsive website that drives engagement and conversions. */}
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
                  <h2 style={{ color: "white" }}>
                     Visually stunning mobile apps
                  </h2>
                  <p style={{ color: "white" }}>
                    {/* Flutter app development services.  */}
                    Cross-platform
                    experiences that drive business success.
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
                  <h2 style={{ color: "white" }}>
                    Protecting Your Network Around the Clock
                  </h2>
                  <p style={{ color: "white" }}>
                   Designed to safeguard your network from threats.
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
