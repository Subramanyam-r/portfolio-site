import { Col, Row } from "react-bootstrap";
import "./NavBar.css";
import NavLink from "./NavLink/NavLink";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function NavBar({ isDarkTheme, setIsDarkTheme }) {
  return (
    <div className="navbar-main-div">
      <Row>
        <Col xl={3}>
          <i className="fa-solid fa-code navbar-icon"></i>
          <span className="navbar-title">Subramanyam</span>
        </Col>

        <Col xl={6}>
          <div className="navlink-container">
            <NavLink title="Home" href="#home" />
            <NavLink title="About" href="#about" />
            <NavLink title="Experience" href="#experience" />
            <NavLink title="Skills" href="#skills" />
            <NavLink title="Portfolio" href="#portfolio" />
            <NavLink title="Contact" href="#contact" />
          </div>
        </Col>

        <Col xl={3}>
          <div className="navbar-right-div">
            <DarkModeSwitch className="darkmode-switch" checked={isDarkTheme} onChange={setIsDarkTheme} size={120} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
