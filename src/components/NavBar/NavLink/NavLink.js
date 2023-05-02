import "./NavLink.css";

export default function NavLink({ title, href }) {
  return (
    <a href={"/" + href} className="navbar-navlink">
      {title}
    </a>
  );
}
