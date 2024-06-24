import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import nameLogo from '../assets/img/nameLogo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Github } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={nameLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="_blank" href="https://www.linkedin.com/in/kawser-ferdous-safi/" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank" href="https://github.com/dev-kawser" rel="noreferrer"><Github className="text-white hover:text-black"></Github></a>
              <a target="_blank" href="https://www.facebook.com/kawserferdoussafi.03" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
