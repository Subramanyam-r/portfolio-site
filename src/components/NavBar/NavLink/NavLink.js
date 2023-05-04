import "./NavLink.css";
import $ from "jquery";

export default function NavLink({ title, href }) {
  function closeNavbar() {
    $(".navbar-links-div").removeClass("show");
  }

  return (
    <div className="nav-item">
      <a href={"/" + href} className="navbar-navlink nav-link" onClick={closeNavbar}>
        {title}
      </a>
    </div>
  );
}
