import { Col, Row } from "react-bootstrap";
import Section from "../Reusables/Section/Section";
import "./About.css";
import AboutMeDetails from "./AboutMeDetails/AboutMeDetails";

export default function About() {
  return (
    <div>
      <Section title="About Me" background="About">
        <Row className="gy-4">
          <Col lg={5}>
            <div className="about-img-col" data-aos="fade-right">
              <img className="about-img" src="about.jpg" alt="about-img" />
            </div>
          </Col>

          <Col lg={7}>
            <AboutMeDetails />
          </Col>
        </Row>
      </Section>
    </div>
  );
}
