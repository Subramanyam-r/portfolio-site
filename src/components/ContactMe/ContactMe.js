import { Col, Row } from "react-bootstrap";
import Section from "../Reusables/Section/Section";
import "./ContactMe.css";
import InputField from "./InputField/InputField";
import OutlinePThemeButton from "../Reusables/OutlinePThemeButton/OutlinePThemeButton";
import { useState } from "react";

let defaultContactDetails = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactMe() {
  const [contactDetails, setContactDetails] = useState(defaultContactDetails);

  function setField(field, value) {
    setContactDetails((old) => {
      return { ...old, [field]: value };
    });
  }

  function setName(e) {
    setField("name", e.target.value);
  }

  function setEmail(e) {
    setField("email", e.target.value);
  }

  function setSubject(e) {
    setField("subject", e.target.value);
  }

  function setMessage(e) {
    setField("message", e.target.value);
  }

  function handleSubmit() {
    console.log("Submitted");
  }

  return (
    <Section id="contact" title="Get In Touch" background="Contact">
      <div className="contact-me-main-div">
        <Row className="gy-4 mb-4">
          <Col lg={6}>
            <InputField field="name" value={contactDetails.name} onChange={setName} />
          </Col>

          <Col lg={6}>
            <InputField field="email" value={contactDetails.email} onChange={setEmail} />
          </Col>

          <Col lg={12}>
            <InputField field="subject" value={contactDetails.subject} onChange={setSubject} />
          </Col>

          <Col lg={12}>
            <InputField field="message" textArea value={contactDetails.message} onChange={setMessage} />
          </Col>
        </Row>

        <OutlinePThemeButton size="lg" onClick={handleSubmit}>
          Send Message
        </OutlinePThemeButton>
      </div>
    </Section>
  );
}
