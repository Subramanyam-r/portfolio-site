import { Button } from "react-bootstrap";
import "./OutlinePThemeButton.css";

export default function OutlinePThemeButton({ children, href, disabled, size, onClick, className }) {
  return (
    <Button
      size={size || "md"}
      href={href}
      className={"outline-p-theme-button " + className}
      disabled={disabled}
      onClick={onClick || undefined}
      data-aos="fade-up"
    >
      {children}
    </Button>
  );
}
