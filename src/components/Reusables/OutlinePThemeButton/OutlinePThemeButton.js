import { Button } from "react-bootstrap";
import "./OutlinePThemeButton.css";

export default function OutlinePThemeButton({ children, href, disabled }) {
  return (
    <Button href={href} className="outline-p-theme-button" disabled={disabled}>
      {children}
    </Button>
  );
}
