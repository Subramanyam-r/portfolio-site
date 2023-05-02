import AboutMeDetail from "./AboutMeDetail/AboutMeDetail";
import "./AboutMeDetails.css";
import config from "../../../config.json";
import { Col, Row } from "react-bootstrap";
import OutlinePThemeButton from "../../Reusables/OutlinePThemeButton/OutlinePThemeButton";

export default function AboutMeDetails() {
  return (
    <div className="aboutme-details-main-div" data-aos="fade-left">
      <h2 className="aboutme-details-h2">{config.about.title}</h2>

      <p className="aboutme-details-summary">{config.about.summary}</p>

      <Row className="mb-4">
        {config.about.details.map((ele, i) => (
          <Col key={i} md={6}>
            <AboutMeDetail prop={ele.prop} value={ele.value} />
          </Col>
        ))}
      </Row>

      <div>
        <OutlinePThemeButton>Learn More</OutlinePThemeButton>
      </div>
    </div>
  );
}
