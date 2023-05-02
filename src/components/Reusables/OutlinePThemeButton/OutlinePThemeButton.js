import { Button } from "react-bootstrap";
import "./OutlinePThemeButton.css";

export default function OutlinePThemeButton({ children, href, disabled, size, onClick }) {
  return (
    <Button
      size={size || "md"}
      href={href}
      className="outline-p-theme-button"
      disabled={disabled}
      onClick={onClick || undefined}
    >
      {children}
    </Button>
  );
}
