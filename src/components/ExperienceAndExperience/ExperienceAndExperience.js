import "./ExperienceAndExperience.css";
import Section from "../Reusables/Section/Section";
import { Col, Row } from "react-bootstrap";
import ExperienceDetail from "./ExperienceDetail/ExperienceDetail";
import config from "../../config.json";

export default function ExperienceAndExperience() {
  return (
    <Section title={"Education and Experience"} background={"Education"}>
      <Row className="gy-4">
        <Col lg={6}>
          <h2 className="custom-dark-col-header">My Education</h2>
          {config.education.map((ele) => (
            <ExperienceDetail
              title={ele.title}
              description={ele.description}
              timeline={ele.timeline}
              university={ele.university}
            />
          ))}
        </Col>

        <Col lg={6}>
          <h2 className="custom-dark-col-header">My Experience</h2>
          {config.experience.map((ele) => (
            <ExperienceDetail
              title={ele.title}
              description={ele.description}
              timeline={ele.timeline}
              university={ele.university}
            />
          ))}
        </Col>
      </Row>
    </Section>
  );
}
