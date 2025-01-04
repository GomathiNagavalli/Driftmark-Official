import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <>
      <Container className="py-4 bg-light shadow" >
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={10}>
            <div>
              <h1 className="text-center display-4 fw-bold my-3">Terms and Conditions</h1>
              {/* <h3>Introduction</h3> */}
              <p className="text-center">
                Welcome to Driftmark Technology, part of the Driftmark Group of
                Companies. By engaging with our services, you agree to be bound
                by the following Terms and Conditions. These terms ensure
                transparency, mutual understanding, and professionalism in all
                transactions and interactions.
              </p>
              <h3  style={{fontWeight:'normal'}}>Definitions</h3>
              <ul>
                <li>
                  <p>
                    "Company" refers to Driftmark Technology and its
                    subsidiaries.
                  </p>
                </li>
                <li>
                  <p>
                    "Client" refers to any individual, business, or organization
                    engaging in our services.
                  </p>
                </li>
                <li>
                  <p>
                    "Services" include but are not limited to Web Design, Web
                    Development, App Development, Digital Marketing, SEO, SMM,
                    E-Commerce Solutions, Graphics Designing, and Blockchain
                    Development provided by the Company.
                  </p>
                </li>
              </ul>
              <h3 style={{fontWeight:'normal'}}>Scope of Work The</h3>
              <p>
                Company will deliver services as outlined in the agreed project
                proposal or contract. Any additional requests or changes beyond
                the agreed scope will be subject to separate quotations or
                additional fees. Client Responsibilities The Client shall
                provide all necessary content, data, and access required for the
                project within a specified timeframe. The Client warrants that
                all materials supplied are either owned or have the necessary
                permissions for use.
              </p>
              <h3 style={{fontWeight:'normal'}}>Payment Terms</h3>
              <p>
                A non-refundable deposit of [specify percentage or amount] is
                required to initiate work. The remaining balance is due upon
                project completion or as per the payment schedule outlined in
                the proposal. Late payments may incur a [specify percentage or
                amount] late fee.
              </p>
              <h3 style={{fontWeight:'normal'}}>Intellectual Property </h3>
              <p>
                Ownership of the final deliverables will transfer to the Client
                upon full payment, excluding any third-party software, tools, or
                plugins used during the development. The Company retains the
                right to use non-sensitive parts of the project for portfolio
                purposes.
              </p>
              <h3  style={{fontWeight:'normal'}}>Revisions and Approvals</h3>
              <p>
                {" "}
                The Company provides [specify number] rounds of revisions as
                part of the service. Additional revisions will incur extra
                charges. Final approval must be provided within [specify
                timeline] of submission. Lack of feedback within this timeframe
                will be considered as approval.
              </p>{" "}
              <h3  style={{fontWeight:'normal'}}>Confidentiality</h3>
              <p>
                Both parties agree to keep all sensitive project-related
                information confidential. The Company may use subcontractors,
                provided they are also bound by confidentiality agreements.
              </p>{" "}
              <h3  style={{fontWeight:'normal'}}> Limitation of Liability</h3>
              <p>
                {" "}
                The Company is not responsible for any direct, indirect, or
                consequential losses arising from the use of the services
                provided. The Client agrees to indemnify the Company against any
                claims related to copyright infringement or unauthorized content
                provided by the Client.
              </p>
              <h3 style={{fontWeight:'normal'}}> Termination</h3>
              <p>
                {" "}
                Either party may terminate the agreement with a [specify notice
                period, e.g., 14 days] written notice. Upon termination, all
                outstanding payments for work completed shall be due
                immediately.
              </p>{" "}
              <h3 style={{fontWeight:'normal'}}>Third-Party Services</h3>
              <p>
                {" "}
                Any third-party subscriptions or fees are the sole
                responsibility of the Client.
              </p>
              <h3  style={{fontWeight:'normal'}}> Warranty and Support</h3>
              <p>
                {" "}
                The Company offers [specify warranty period, e.g., 30 days]
                post-launch support for bug fixes and minor adjustments.
                Extended maintenance or support contracts can be arranged at an
                additional cost.
              </p>
              <h3 style={{fontWeight:'normal'}}> Governing Law</h3>
              <p>
                {" "}
                These terms are governed by the laws of India, and any disputes
                will be subject to the jurisdiction of Chennai courts.
              </p>
              <h3  style={{fontWeight:'normal'}}> Changes to Terms</h3>
              <p>
                {" "}
                The Company reserves the right to amend these Terms and
                Conditions at any time. Changes will be communicated via our
                official website or directly to clients.
              </p>
              <h3 style={{fontWeight:'normal'}}>Acceptance of Terms</h3>
              <p>
                {" "}
                By engaging with Driftmark Technology, the Client acknowledges
                and agrees to these Terms and Conditions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TermsAndConditions;
