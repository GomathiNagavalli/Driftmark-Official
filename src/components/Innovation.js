import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cloudnew from "../assets/cloudnew.jpg";

const Innovation = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeIn = {
    animation: "fadeIn 1s ease-in",
  };

  const zoomIn = {
    animation: "zoomIn 1s ease-in",
  };

  const borderAnimation = {
    border: "5px solid transparent",
    backgroundClip: "padding-box",
    animation: "borderAnimation 3s linear infinite",
  };

  return (
    <>
      <Container className="py-4">
        <Row>
          <Col md={6}>
            <div>
              <h2 className="my-3" style={fadeIn}>
                Our Mission
              </h2>
              <p
                className="my-4"
                
              >
                Driftmark Technology is a cutting-edge software development
                company that specializes in creating innovative solutions for
                businesses. Our team of expert developers, designers, and
                project managers work collaboratively to deliver high-quality
                products that meet the evolving needs of our clients.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image
                src={cloudnew}
                fluid
                rounded
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  ...zoomIn,
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-2">
        <Row>
          <Col  className="text-center">
            <div >
              <h1 >Why Choose Driftmark Technology?</h1>
            </div>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={4}>
            <h3 style={{ color: "#FF8C00" }}>Mobile Applications</h3>
            <p>
              We provide Custom Software Development. We create tailored
              software solutions that meet the unique needs of our clients. We
              design and develop mobile apps that are intuitive, engaging, and
              scalable.
            </p>
          </Col>
          <Col md={4}>
            <h3 style={{ color: "#FF8C00" }}>Web Development</h3>
            <p>
              We build fast, secure, and scalable websites that drive business
              growth. IT Consulting: We provide expert advice and guidance to
              help businesses navigate the complexities of technology.
            </p>
          </Col>
          <Col md={4}>
            <h3 style={{ color: "#FF8C00" }}>Revolution</h3>
            <p>
              At Driftmark Technology, our mission is to empower businesses to
              succeed in the digital age. We strive to deliver exceptional
              software solutions that drive growth, improve efficiency, and
              enhance customer experiences.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="bg-light shadow my-3">
        <Row className="d-flex justify-content-center align-items-center py-5 px-2">
          <Col
            md={6}
            className="p-3"
            style={{
              ...borderAnimation,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1c1b1b",
              color: "white",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h2>Your partner in business success</h2>
            <Button
              className="mt-3 btn-lg custom-button"
              
              onClick={() => handleLinkClick("/contact")}
            >
              Get in Touch
            </Button>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <h3 className="my-3">The Right Team, Behind You</h3>
              <p>
                Our advantage lies in our experienced team, dedicated to
                providing custom IT solutions and exceptional support to help
                our clients achieve their goals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col>
            <div className="text-center">
              <h1>Driftmark Brings Your Vision to Life!</h1>
              <p>
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
    </>
  );
};

export default Innovation;

// import React from "react";
// import { Col, Container, Row, Image, Button } from "react-bootstrap";
// import "../components/Solutions.css";
// import { useNavigate } from "react-router-dom";
// import cloudnew from "../assets/cloudnew.jpg";

// const Innovation = () => {
//    const navigate = useNavigate();

//     const handleLinkClick = (path) => {
//       navigate(path);
//       window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
//     };
//   return (
//     <>
//       <Container className="mt-4">
//         <Row>
//           <Col md={6}>
//             <div>
//               <h1 className="mt-3">Our Mission</h1>

//               <p className="mt-3">
//                 Driftmark Technology is a cutting-edge software development
//                 company that specializes in creating innovative solutions for
//                 businesses. Our team of expert developers, designers, and
//                 project managers work collaboratively to deliver high-quality
//                 products that meet the evolving needs of our clients.
//               </p>
//             </div>
//           </Col>
//           <Col md={6}>
//             <div className="text-center">
//               <Image src={cloudnew} fluid rounded className="shadow" style={{ width: "500px", height: "300px" }}/>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-5">
//         <Row className="background-image mb-3 justify-content-center align-items-center">
//           <Col lg={10}>
//             {" "}
//             <div className="text-center">
//               <h1 className="" style={{ color: "white" }}>
//                 Why Choose Driftmark Technology?
//               </h1>
//             </div>
//           </Col>
//         </Row>
//         <Row className="my-4">
//           <Col md={4}>
//             <h3>Mobile Applications</h3>
//             <p>
//               We provide Custom Software Development. We create tailored
//               software solutions that meet the unique needs of our clients.  We design and develop mobile apps that are
//               intuitive, engaging, and scalable.
//             </p>
//           </Col>
//           <Col md={4}>
//             <h3>Web Development</h3>
//             <p>
//               We build fast, secure, and scalable websites that drive business
//               growth. IT Consulting: We provide expert advice and guidance to
//               help businesses navigate the complexities of technology.
//             </p>
//           </Col>
//           <Col md={4}>
//             <h3>Revolution</h3>
//             <p>
//               At Driftmark Technology, our mission is to empower businesses to
//               succeed in the digital age. We strive to deliver exceptional
//               software solutions that drive growth, improve efficiency, and
//               enhance customer experiences.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//       <Container >
//         <Row className="d-flex justify-content-center align-items-center">
//           <Col className="contact-container animated-border p-3" md={6}>
//           <div>
//           <h2 >Your partner in business</h2>
//           <h2 > success</h2>
//           <Button className="mt-3 orange-button" onClick={()=>handleLinkClick("/contact")}>
//             Get in Touch
//           </Button>
//         </div>
//           </Col>
//           <Col md={6}>
//             <div className="text-center">
//               <h3 className="my-3 ">The Right Team, Behind You</h3>
//               <p>
//                 Our advantage lies in our experienced team, dedicated to
//                 providing custom IT solutions and exceptional support to help
//                 our clients achieve their goals.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-4">
//         <Row>
//           <Col>
//             <div className="text-center">
//               <h1>
//                 Driftmark Brings Your Vision to Life!
//               </h1>
//               <p>
//                 Our team of experts specializes in delivering cutting-edge
//                 solutions in frontend development, full-stack development, and
//                 Flutter mobile app development. Leveraging the power of ReactJS
//                 and Flutter, we've successfully completed 3+ projects that
//                 empower businesses to reach new heights.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Innovation;
