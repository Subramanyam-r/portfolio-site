import OutlinePThemeButton from "../../Reusables/OutlinePThemeButton/OutlinePThemeButton";
import "./PortfolioItem.css";

export default function PortfolioItem({ techStack, title, portfolioImage, sourceCodeLink, deploymentLink }) {
  return (
    <div className="position-relative" data-aos="fade-up">
      <img className="portfolio-img" src={portfolioImage} alt="portfolio-img" />
      <h2 className="portfolio-title">{title}</h2>

      <div className="tech-stack-icons-div">
        {techStack.map((ele) => (
          <img className="tech-stack-icon" src={"skill_icons/" + ele + ".png"} alt="tech-stack-icon" />
        ))}
      </div>

      <div className="tech-stack-buttons-div">
        <OutlinePThemeButton href={sourceCodeLink} disabled={sourceCodeLink === undefined}>
          Source Code
        </OutlinePThemeButton>
        <OutlinePThemeButton href={deploymentLink} disabled={deploymentLink === undefined}>
          Deployment
        </OutlinePThemeButton>
      </div>
    </div>
  );
}
