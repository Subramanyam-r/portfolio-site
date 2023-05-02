import "./Footer.css";
import FooterIcon from "./FooterIcon/FooterIcon";

export default function Footer() {
  return (
    <div className="footer-main-div">
      <div className="footer-icon-container">
        <FooterIcon className="fa-solid fa-envelope" href="mailto:subramanyam.r.2001@gmail.com" />
        <FooterIcon className="fa-brands fa-github" href="https://github.com/Subramanyam-r/" />
        <FooterIcon className="fa-brands fa-linkedin" href="https://www.linkedin.com/in/subramanyam-r/" />
      </div>

      <p>Made with 💖 by Subramanyam</p>
    </div>
  );
}
