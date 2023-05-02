import { Form } from "react-bootstrap";
import "./InputField.css";

export default function InputField({ field, textArea, value, onChange }) {
  return (
    <Form.Control
      as={textArea ? "textarea" : "input"}
      className="contact-us-ip"
      placeholder={field}
      value={value}
      onChange={onChange}
    />
  );
}
