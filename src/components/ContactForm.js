




import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./ContactForm.css"; // Import custom styles for animated border

function ContactForm() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message: "",
    isRobot: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "LastName is required.";
    if (!formData.isRobot) newErrors.isRobot = "You must confirm you are not a robot.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      setFormData(initialFormState); // Clear the input fields after submission
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Container>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          {/* Input Fields */}
          {[
            { label: "First Name", name: "firstName", required: true },
            { label: "Last Name", name: "lastName", required: true },
            { label: "Email", name: "email", required: true },
          ].map(({ label, name, required }, index) => (
            <Form.Group controlId={name} key={index} className="mb-3">
              <Form.Label style={{ color: "orange" }}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
              </Form.Label>
              <Form.Control
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={`Enter ${label.toLowerCase()}`}
                style={{
                  borderColor: errors[name] ? "red" : "teal",
                  borderWidth: "2px",
                }}
              />
              {errors[name] && (
                <Form.Text className="text-danger">{errors[name]}</Form.Text>
              )}
            </Form.Group>
          ))}

          {/* Password Field with Eye Icon */}
          <Form.Group controlId="password" className="mb-3">
            <Form.Label style={{ color: "orange" }}>
              Password <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div style={{ position: "relative" }}>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                style={{
                  borderColor: errors.password ? "red" : "teal",
                  borderWidth: "2px",
                  paddingRight: "40px", // Extra space for the icon
                }}
              />
              <i
                className={`bi ${showPassword ? "bi-eye-fill" : "bi-eye-slash-fill"}`}
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  color: "gray",
                }}
                title={showPassword ? "Hide Password" : "Show Password"}
              />
            </div>
            {errors.password && (
              <Form.Text className="text-danger">{errors.password}</Form.Text>
            )}
          </Form.Group>

          {/* Message Field */}
          <Form.Group controlId="message" className="mb-3">
            <Form.Label style={{ color: "orange" }}>
              Message (Optional)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              style={{
                borderColor: errors.message ? "red" : "teal",
                borderWidth: "2px",
              }}
            />
            {errors.message && (
              <Form.Text className="text-danger">{errors.message}</Form.Text>
            )}
          </Form.Group>

          {/* "I am not a robot" Section */}
          <Form.Group controlId="robotCheck" className="mb-4">
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Check
                  type="checkbox"
                  name="isRobot"
                  checked={formData.isRobot}
                  onChange={handleChange}
                  className="me-2"
                />
              </Col>
              <Col>
                <Form.Label className="mb-0">I am not a robot</Form.Label>
              </Col>
            </Row>
            {errors.isRobot && (
              <Form.Text className="text-danger">{errors.isRobot}</Form.Text>
            )}
          </Form.Group>

          {/* Submit Button */}
          <Button className="btn btn-primary btn-lg"  type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default ContactForm;



