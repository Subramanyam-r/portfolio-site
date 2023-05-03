import "./NavLink.css";

export default function NavLink({ title, href }) {
  return (
    <div className="nav-item">
      <a href={"/" + href} className="navbar-navlink nav-link">
        {title}
      </a>
    </div>
  );
}
