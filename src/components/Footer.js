import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../components/Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <>
      <Container
        fluid
        className="my-1 shadow"
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <Row>
          <Col>
            <div className="text-center mt-5">
              <h1 style={{color:'white'}}>Let Us Bring Your Product to life</h1>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col md={4} className="my-2">
            <div className="d-flex flex-column">
              <h4>Services</h4>
              <span
                onClick={() => handleLinkClick("/")}
                className="my-2 text-light "
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Home
              </span>
              <span
                onClick={() => handleLinkClick("/cloud")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Innovation
              </span>
              <span
                onClick={() => handleLinkClick("/enterprise")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Enterprise
              </span>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4>Resources</h4>
              <span
                onClick={() => handleLinkClick("/services")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Blog
              </span>
              <span
                onClick={() => handleLinkClick("/contact")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Contact Us
              </span>
              <span
                onClick={() => handleLinkClick("/services")}
                className="my-2 text-light"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Downloads
              </span>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="d-flex flex-column">
              <h4 className="">Follow Us</h4>
              <div
                className="d-flex justify-content-between my-2"
                style={{ width: "100px" }}
              >
                <Link
                  to="https://www.linkedin.com/company/driftmark-technology/?originalSubdomain=in"
                  target="_blank"
                >
                  <i className="bi bi-linkedin "></i>
                </Link>
                <Link
                  to="https://www.instagram.com/driftmarktechnology/"
                  target="_blank"
                  className=""
                >
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link to="mailto:driftmarktechnology@gmail.com">
                  <i className="bi bi-envelope"></i>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="p-5 small">
          <Col className="text-center">
            <span>
              ©2023 - 2024 Driftmark Technology Pvt. Ltd. All Rights Reserved
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;



// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();

//   const handleLinkClick = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
//   };

//   return (
//     <>
//       <Container
//         fluid
//         className="my-1  shadow text-light "
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           borderRadius: "10px",
//         }}
//       >
//         <Row>
//           <Col>
//             <div className="text-center mt-5">
//               <h1 className="text-light">Let Us Bring Your Product to life</h1>
//             </div>
//           </Col>
//         </Row>
//         <Row className="my-3">
//           <Col md={4} className="my-2">
//             <div className="d-flex flex-column">
//               <h4>Services</h4>
//               <span
//                 onClick={() => handleLinkClick("/")}
//                 style={{ textDecoration: "none", cursor: "pointer" }}
//                 className="my-2 text-light"
//               >
//                 Solutions
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/cloud")}
//                 style={{ textDecoration: "none", cursor: "pointer" }}
//                 className="my-2 text-light"
//               >
//                 Cloud
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/enterprise")}
//                 style={{ textDecoration: "none", cursor: "pointer" }}
//                 className="my-2 text-light"
//               >
//                 Enterprise
//               </span>
//             </div>
//           </Col>
//           <Col md={4} className="my-3">
//             <div className="d-flex flex-column">
//               <h4>Resources</h4>
//               <span
//                 onClick={() => handleLinkClick("/services")}
//                 style={{ textDecoration: "none", cursor: "pointer" }}
//                 className="my-2 text-light"
//               >
//                 Blog
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/contact")}
//                 style={{ textDecoration: "none", cursor: "pointer" }}
//                 className="my-2 text-light"
//               >
//                 Contact Us
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/services")}
//                 style={{ textDecoration: "none", cursor: "pointer" }}
//                 className="my-2 text-light"
//               >
//                 Downloads
//               </span>
//             </div>
//           </Col>
//           <Col md={4} className="my-3">
//             <div className="d-flex flex-column">
//               <h4 className="text-light">Follow Us</h4>
//               <div
//                 className="d-flex justify-content-between my-2"
//                 style={{ width: "100px" }}
//               >
//                 <Link
//                   to="https://www.linkedin.com/company/driftmark-technology/?originalSubdomain=in"
//                   target="_blank"
//                 >
//                   <i className="bi bi-linkedin "></i>
//                 </Link>
//                 <Link
//                   to="https://www.instagram.com/driftmarktechnology/"
//                   target="_blank"
//                   className=""
//                 >
//                   <i className="bi bi-instagram"></i>
//                 </Link>
//                 <Link to="mailto:driftmarktechnology@gmail.com">
//                   <i className="bi bi-envelope"></i>
//                 </Link>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         <Row className="p-5 small">
//           <Col className="text-center">
//             <span>
//               ©2023 - 2024 Driftmark Technology Pvt. Ltd. All Rights Reserved
//             </span>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Footer;





// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <>
//       <Container
//         fluid
//         className="my-1  shadow text-light "
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           borderRadius: "10px",
//         }}
//       >
//         <Row>
//           <Col>
//             <div className="text-center mt-5">
//               <h1 className="text-light">Let Us Bring Your Product to life</h1>
//             </div>
//           </Col>
//         </Row>
//           <Row className="my-3">
//             <Col md={4} className="my-2">
//               <div className="d-flex flex-column">
//                 <h4>Services</h4>
//                 <Link to="/" style={{ textDecoration: "none" }} className="my-2">
//                   Solutions
//                 </Link>
//                 <Link to="/cloud" style={{ textDecoration: "none" }} className="my-2">
//                   Cloud
//                 </Link>
//                 <Link to="/enterprise" style={{ textDecoration: "none" }} className="my-2">
//                   Enterprise
//                 </Link>
//               </div>
//               {/* <Link to={''}>Solutions</Link> */}
//             </Col>
//             <Col md={4} className="my-3">
//               <div className="d-flex flex-column">
//                 <h4>Resources</h4>
//                 <Link to="/services" style={{ textDecoration: "none" }} className="my-2">
//                   Blog
//                 </Link>
//                 <Link to="/contact" style={{ textDecoration: "none" }} className="my-2">
//                   Contact Us
//                 </Link>
//                 <Link to="/services" style={{ textDecoration: "none" }} className="my-2">
//                   Downloads
//                 </Link>
//               </div>
//             </Col>
//             <Col md={4} className="my-3">
//               <div className="d-flex flex-column">
//                 <h4 className="text-light">Follow Us</h4>
//                 <div
//                   className="d-flex justify-content-between my-2"
//                   style={{ width: "100px" }} 
//                 >
//                   <Link
//                     to="https://www.linkedin.com/company/driftmark-technology/?originalSubdomain=in"
//                     target="_blank"
//                   >
//                     <i className="bi bi-linkedin "></i>
//                   </Link>
//                   <Link
//                     to="https://www.instagram.com/driftmarktechnology/"
//                     target="_blank"
//                     className=""
//                   >
//                     <i className="bi bi-instagram"></i>
//                   </Link>
//                   <Link to="mailto:driftmarktechnology@gmail.com">
//                     <i className="bi bi-envelope"></i>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         <Row className="p-5 small">
//         <Col className="text-center">
//               <span>
//                 ©2023 - 2024 Driftmark Technology Pvt. Ltd. All Rights Reserved
//               </span>
//             </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Footer;
