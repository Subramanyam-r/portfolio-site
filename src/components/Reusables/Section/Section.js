import "./Section.css";

export default function Section({ title, background, children }) {
  return (
    <div className="section-main-div container">
      <div className="section-text-div" data-aos="fade-up">
        <h2 className="section-title-bg-absolute">{background || title}</h2>
        <h2 className="section-title">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
