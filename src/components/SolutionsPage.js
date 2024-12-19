import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import solution1 from "../assets/solution1.png";
import solution2 from "../assets/solution2.jpg";
import solution3 from "../assets/solution3.png";
import solution4 from "../assets/solution4.png";
import '../components/Solutionspage.css';

const SolutionsPage = () => {
  return (
    <>
      <Container>
        <h2 className="text-center">Custom Solution For Any Need</h2>
        <p className="text-center">
          Our game plan begins with you: your needs, your goals, and the support
          you need to keep your business thriving. So, we’ll kick off our
          partnership with a close look at your current state of affairs to
          develop a custom strategy and ensure our services check off all the
          right boxes.
        </p>
        <Row>
          <Col md={6}>
            <div className="flex-container">
              <div className="image-container">
                <Image src={solution1} className="responsive-image"/>
              </div>
              <div className="text-container">
                <h3>Backup & Recover</h3>
                <p >
                  Your data is safe with us—and our ironclad backup system
                  that’s anything but obsolete. Lost data just isn’t a concept
                  we’re familiar with.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="flex-container">
              <div  className="image-container" >
                <Image src={solution2} className="responsive-image"/>
              </div>
              <div className="text-container">
                <h3>Cybersecurity</h3>
                <p>
                  We’ve got your back with 24/7 security to safeguard your
                  network. Our team of experts based in New England are always
                  just a call away.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="flex-container">
              <div className="image-container">
                <Image src={solution3} className="responsive-image" />
              </div>
              <div className="text-container">
                <h3>Workstation Management</h3>
                <p>
                  Protect the place where your goals turn into results. We’ll
                  maintain, monitor, and protect the workstation tools that keep
                  your business productive, including computers, phone systems,
                  printer networks, and more.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="flex-container">
              <div className="image-container">
                <Image src={solution4} className="responsive-image" />
              </div>
              <div className="text-container">
                <h3>Cloud Computing</h3>
                <p>
                We keep things “cloud-first,“ meaning your network will stay up and running regardless of what unexpected challenges pop up today or tomorrow.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SolutionsPage;
