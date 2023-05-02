import { Button } from "react-bootstrap";
import "./OutlineThemeButton.css";

export default function OutlineThemeButton({ children, onClick }) {
  return (
    <Button className="outline-theme-button" variant="outline-light" size="md" onClick={onClick}>
      {children}
    </Button>
  );
}
