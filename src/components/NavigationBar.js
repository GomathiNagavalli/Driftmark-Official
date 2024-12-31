import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Offcanvas,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/NavigationBar.css";
import OfficialLogo2 from "../assets/OfficialLogo2.jpeg";

function NavigationBar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Check if the current path matches `/services` or its child routes
  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      <Navbar expand="lg" className="navigation-bar border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Image
              src={OfficialLogo2}
              style={{ width: "40px", height: "30px" }}
              className="me-2"
              alt="Driftmark Logo"
            />
            <span className="text-teal fw-bold m-0" style={{ color: "#0085BD" }}>
              Driftmark Technology
            </span>
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
              {[{ to: "/", label: "Home" }, { to: "/innovation", label: "Innovation" }, { to: "/enterprise", label: "Enterprise" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact" }]
                .map(({ to, label }) => (
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
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-services"
                  className={`nav-item ${isServicesActive ? "active-link" : ""}`}
                  variant="link"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/services/blog">
                    Blog
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/downloads">
                    Downloads
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {[{ to: "/", label: "Home" }, { to: "/innovation", label: "Innovation" }, { to: "/enterprise", label: "Enterprise" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact" }]
              .map(({ to, label }) => (
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
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-services-mobile"
                className={`nav-item ${isServicesActive ? "active-link" : ""}`}
                variant="link"
                style={{ textDecoration: "none" }}
              >
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/services/blog" onClick={handleClose}>
                  Blog
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/services/downloads" onClick={handleClose}>
                  Downloads
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
//   Dropdown,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useLocation } from "react-router-dom";
// import "../components/NavigationBar.css";
// import OfficialLogo2 from "../assets/OfficialLogo2.jpeg";

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
//               src={OfficialLogo2}
//               style={{ width: "40px", height: "30px" }}
//               className="me-2"
//               alt="Driftmark Logo"
//             />
//             <span className="text-teal fw-bold m-0" style={{ color: "#0085BD" }}>
//               Driftmark Technology
//             </span>
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
//               {[{ to: "/", label: "Home" }, { to: "/innovation", label: "Innovation" }, { to: "/enterprise", label: "Enterprise" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact" }]
//                 .map(({ to, label }) => (
//                   <Nav.Link
//                     key={to}
//                     as={Link}
//                     to={to}
//                     className={`nav-item ${
//                       pathname === to ? "active-link" : ""
//                     }`}
//                   >
//                     {label}
//                   </Nav.Link>
//                 ))}
//               <Dropdown>
//                 <Dropdown.Toggle
//                   id="dropdown-services"
//                   className="nav-item"
//                   variant="link"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Services
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item as={Link} to="/services/blog">
//                     Blog
//                   </Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/services/downloads">
//                     Downloads
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Offcanvas show={show} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton></Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             {[{ to: "/", label: "Home" }, { to: "/innovation", label: "Innovation" }, { to: "/enterprise", label: "Enterprise" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact" }]
//               .map(({ to, label }) => (
//                 <Nav.Link
//                   key={to}
//                   as={Link}
//                   to={to}
//                   onClick={handleClose}
//                   className={`nav-item ${
//                     pathname === to ? "active-link" : ""
//                   }`}
//                 >
//                   {label}
//                 </Nav.Link>
//               ))}
//             <Dropdown>
//               <Dropdown.Toggle
//                 id="dropdown-services-mobile"
//                 className="nav-item"
//                 variant="link"
//                 style={{ textDecoration: "none" }}
//               >
//                 Services
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item as={Link} to="/services/blog" onClick={handleClose}>
//                   Blog
//                 </Dropdown.Item>
//                 <Dropdown.Item as={Link} to="/services/downloads" onClick={handleClose}>
//                   Downloads
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default NavigationBar;





