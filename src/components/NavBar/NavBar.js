import "./NavBar.css";
import NavLink from "./NavLink/NavLink";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import { useState } from "react";

export default function NavBar({ isDarkTheme, setIsDarkTheme }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-xl navbar-main-div">
      <div className="container-fluid position-relative">
        <a className="navbar-brand" href="#home">
          <i className="fa-solid fa-code navbar-icon"></i>
          <span className="navbar-title">Subramanyam</span>
        </a>

        <HamburgerIcon className="navbar-hamburger" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <DarkModeSwitch className="darkmode-switch ml-auto" checked={isDarkTheme} onChange={setIsDarkTheme} size={120} />

        <div className="collapse navbar-collapse navbar-links-div" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <NavLink title="Home" href="#home" />
            <NavLink title="About" href="#about" />
            <NavLink title="Experience" href="#experience" />
            <NavLink title="Skills" href="#skills" />
            <NavLink title="Portfolio" href="#portfolio" />
            <NavLink title="Contact" href="#contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
