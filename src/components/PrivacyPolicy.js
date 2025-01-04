import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Container className="py-4 bg-light shadow">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={10}>
        
      <div>
        <h1 className="text-center display-4 fw-bold my-3"> Privacy Policy</h1>
        <p className="text-center">
          Driftmark Technology ("we," "us," or "our") is committed to protecting
          your privacy. This Privacy Policy explains how we collect, use, and
          protect your personal information.
        </p>
        <h3 style={{fontWeight:'normal'}}>1. Information We Collect</h3>
        <p>We may collect the following types of information </p>
        <ul>
          <li>
            <p>
              <span className="text-decoration-underline">
                Personal Information:
              </span>{" "}
              Name, email address, phone number, and business details provided
              through contact forms or service inquiries.
            </p>
          </li>
          <li>
            <p>
              <span className="text-decoration-underline">
                {" "}
                Non-Personal Information:
              </span>{" "}
              Browser type, IP address, operating system, and usage data
              collected through cookies or analytics tools to improve our
              website and services.
            </p>
          </li>
          <li>
            <p>
              <span className="text-decoration-underline">
                Payment Information:
              </span> Billing details for service payments. We do not store credit card
              or other payment details; such information is processed securely
              by trusted third-party payment gateways.
            </p>{" "}
          </li>
        </ul>
        <h3 style={{fontWeight:'normal'}}>2. How We Use Your Information</h3>
        <p>We use the information collected for the following purposes: </p>
        <ul>
          <li>
            <p>
              To provide and improve our web design, development, and related
              services.
            </p>
          </li>
          <li>
            <p>
              {" "}
              To communicate with you regarding project updates, promotional
              offers, or inquiries.
            </p>
          </li>
          <li>
            <p>To process payments and manage accounts.</p>
          </li>
          <li>
            {" "}
            <p>
              To analyze user behavior to enhance website performance and user
              experience.
            </p>
          </li>
        </ul>
        <h3 style={{fontWeight:'normal'}}>3.Information Sharing and Disclosure</h3>
        <p>
          We respect your privacy and do not sell, rent, or share your personal
          information with third parties, except:
        </p>
        <ul>
          <li>
            <p> When required by law or to comply with legal obligations.</p>
          </li>
          <li>
            <p>
              {" "}
              With trusted third party service providers who assist us in
              delivering our services, such as hosting providers or payment
              processors.
            </p>
          </li>
          <li>
            {" "}
            <p>
              To protect the rights, safety, and security of Driftmark
              Technology or others.
            </p>
          </li>
        </ul>{" "}
        <h3 style={{fontWeight:'normal'}}> 4. Data Security</h3>
        <p>
          {" "}
          We implement robust security measures to protect your personal
          information from unauthorized access, alteration, or disclosure. These
          include:
        </p>{" "}
        <ul>
          <li>
            <p> Secure servers and encryption protocols.</p>
          </li>
          <li>
            <p> Regular system updates and security audits.</p>
          </li>
          <li>
            {" "}
            <p>
              Restricted access to sensitive information to authorized personnel
              only.
            </p>
          </li>
        </ul>
        <h3 style={{fontWeight:'normal'}}>5. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience. Cookies help us analyze website traffic and user
          behavior to deliver better services. You can manage cookie preferences
          through your browser settings.
        </p>{" "}
        <h3 style={{fontWeight:'normal'}}> 6. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. Driftmark
          Technology is not responsible for the privacy practices or content of
          these external sites. We encourage you to review the privacy policies
          of any third-party websites you visit.
        </p>
        <h3 style={{fontWeight:'normal'}}>7. Your Rights</h3>{" "}
        <p> You have the following rights concerning your personal data:</p>
        <ul>
          <li>
            <p>
              <span className="text-decoration-underline">
                Access and Correction:
              </span>{" "}
              Request access to the personal information we hold about you and
              request corrections if necessary.
            </p>
          </li>
          <li>
            <p>
              <span className="text-decoration-underline"> Opt-Out:</span>{" "}
              Unsubscribe from marketing communications at any time.{" "}
            </p>
          </li>
          <li>
            <p>
              <span className="text-decoration-underline"> Data Deletion:</span>{" "}
              Request the deletion of your personal information from our
              records, subject to legal and contractual obligations.
            </p>
          </li>
        </ul>{" "}
        <h3 style={{fontWeight:'normal'}}>8. Children's Privacy</h3>{" "}
        <p>
          Our services are not directed at individuals under the age of 18. We
          do not knowingly collect personal information from children. If we
          become aware that a child has provided us with personal data, we will
          take steps to delete it.
        </p>
        <h3 style={{fontWeight:'normal'}}> 9. Updates to this Privacy</h3>
        <p>
          {" "}
          Policy We may update this Privacy Policy periodically to reflect
          changes in our practices or legal requirements. Any updates will be
          posted on this page with a revised effective date.
        </p>
        <h3 style={{fontWeight:'normal'}}>10. Contact Us </h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or how
          we handle your information,
        </p>
        <div style={{backgroundColor:'white'}} className="shadow rounded p-4">
          <h3 style={{fontWeight:'normal'}}> please contact us at:</h3>
          <p>
            <span className="fw-bold">Driftmark Technology:</span>
          </p>
          <p>Kadirimangalam, Tirupathur, Tamil Nadu 635653</p>
          <p>
            <span className="fw-bold">Email:</span><Link to="mailto:driftmarktechnology@gmail.com"> driftmarktechnology@gmail.com</Link>
          </p>
          <p>
            <span className="fw-bold">phone:</span> +91 63814 75573
          </p>
          
        </div>
        <p className="text-center my-4">
            This Privacy Policy ensures compliance with applicable data
            protection laws, including GDPR, where relevant.
          </p>
      </div>
      </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
