import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "../components/NavigationBar.css";
import logo from "../assets/Driftmarklogo.jpg";

function NavigationBar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="navigation-bar border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Image
              src={logo}
              style={{ width: "70px", height: "70px" }}
              className="me-2"
              alt="Driftmark Logo"
            />
            <h5 className="text-teal fw-bold m-0" style={{color:'teal'}}>Driftmark Technology</h5>
          </Navbar.Brand>
          <Button
            variant="outline-primary"
            className="d-lg-none"
            onClick={handleShow}
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav className="nav-links">
              {[
                { to: "/", label: "Home" },
                { to: "/innovation", label: "Innovation" },
                { to: "/enterprise", label: "Enterprise" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <Nav.Link
                  key={to}
                  as={Link}
                  to={to}
                  className={`nav-item ${
                    pathname === to ? "active-link" : ""
                  }`}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {[
              { to: "/", label: "Home" },
              { to: "/innovation", label: "Innovation" },
              { to: "/enterprise", label: "Enterprise" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={Link}
                to={to}
                onClick={handleClose}
                className={`nav-item ${
                  pathname === to ? "active-link" : ""
                }`}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationBar;



// import React, { useState } from "react";
// import {
//   Navbar,
//   Nav,
//   Container,
//   Button,
//   Offcanvas,
//   Image,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useLocation } from "react-router-dom";
// import "../components/NavigationBar.css";
// import logo from "../assets/Driftmarklogo.jpg";

// function NavigationBar() {
//   const [show, setShow] = useState(false);
//   const { pathname } = useLocation();

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Navbar expand="lg" className="navigation-bar border-bottom">
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//             <Image
//               src={logo}
//               style={{ width: "70px", height: "70px" }}
//               className="me-2"
//               alt="Driftmark Logo"
//             />
//             <h5 className="text-teal fw-bold m-0">Driftmark Technology</h5>
//           </Navbar.Brand>
//           <Button
//             variant="outline-primary"
//             className="d-lg-none"
//             onClick={handleShow}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </Button>
//           <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
//             <Nav className="nav-links">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className={pathname === "/" ? "active-link" : ""}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/innovation"
//                 className={pathname === "/innovation" ? "active-link" : ""}
//               >
//                 Innovation
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/enterprise"
//                 className={pathname === "/enterprise" ? "active-link" : ""}
//               >
//                 Enterprise
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 className={pathname === "/about" ? "active-link" : ""}
//               >
//                 About Us
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/services"
//                 className={pathname === "/services" ? "active-link" : ""}
//               >
//                 Services
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 className={pathname === "/contact" ? "active-link" : ""}
//               >
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton></Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link
//               as={Link}
//               to="/"
//               className={pathname === "/" ? "active-link" : ""}
//               onClick={handleClose}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/innovation"
//               className={pathname === "/innovation" ? "active-link" : ""}
//               onClick={handleClose}
//             >
//               Innovation
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/enterprise"
//               className={pathname === "/enterprise" ? "active-link" : ""}
//               onClick={handleClose}
//             >
//               Enterprise
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/about"
//               className={pathname === "/about" ? "active-link" : ""}
//               onClick={handleClose}
//             >
//               About Us
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/services"
//               className={pathname === "/services" ? "active-link" : ""}
//               onClick={handleClose}
//             >
//               Services
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//               to="/contact"
//               className={pathname === "/contact" ? "active-link" : ""}
//               onClick={handleClose}
//             >
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default NavigationBar;



// import React, { useState } from "react";
// import {
//   Navbar,
//   Nav,
//   Container,
//   Button,
//   Offcanvas,
//   Image,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import "../components/NavigationBar.css";
// import logo from "../assets/Driftmarklogo.jpg";

// function NavigationBar() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Navbar expand="lg" className="navigation-bar border-bottom">
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//             <Image
//               src={logo}
//               style={{ width: "70px", height: "70px" }}
//               className="me-2"
//               alt="Driftmark Logo"
//             />
//             <h5 className="text-teal fw-bold m-0">Driftmark Technology</h5>
//           </Navbar.Brand>
//           <Button
//             variant="outline-primary"
//             className="d-lg-none"
//             onClick={handleShow}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </Button>
//           <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
//             <Nav className="nav-links">
//               <Nav.Link as={Link} to="/" activeClassName="active-link">
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/innovation" activeClassName="active-link">
//               Innovation
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/enterprise"
//                 activeClassName="active-link"
//               >
//                 Enterprise
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" activeClassName="active-link">
//                 About Us
//               </Nav.Link>
//               <Nav.Link as={Link} to="/services" activeClassName="active-link">
//                 Services
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact" activeClassName="active-link">
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton></Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to="/" onClick={handleClose}>
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/innovation" onClick={handleClose}>
//             Innovation
//             </Nav.Link>
//             <Nav.Link as={Link} to="/enterprise" onClick={handleClose}>
//               Enterprise
//             </Nav.Link>
//             <Nav.Link as={Link} to="/about" onClick={handleClose}>
//               About Us
//             </Nav.Link>
//             <Nav.Link as={Link} to="/services" onClick={handleClose}>
//               Services
//             </Nav.Link>
//             <Nav.Link as={Link} to="/contact" onClick={handleClose}>
//               Contact
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default NavigationBar;


