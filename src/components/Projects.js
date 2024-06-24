import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sPori from "../assets/img/sPori.png";
import smart from "../assets/img/smart.png";
import winzone from "../assets/img/winzone.png";
import art from "../assets/img/art.png";
import viva from "../assets/img/viva.png";
import hockey from "../assets/img/hockey.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SAFI PARIBAHAN - Bus Ticket Website",
      description: "Front End Project",
      imgUrl: sPori,
      link:"https://devsafi.github.io/safi-travels/"
    },
    {
      title: "Viva Travel - Travel Agency",
      description: "Front End Project",
      imgUrl: viva,
      link:"https://devsafi.github.io/travel-agency/"
    },
    {
      title: "WinZone - Contest Website",
      description: "Full Stack Project",
      imgUrl: winzone,
      link:"https://photo-contest-cb4ef.web.app/"
    },
    {
      title: "Smart Tech Project - Query Website",
      description: "Full Stack Project",
      imgUrl: smart,
      link:"https://smart-tech-project.web.app/"
    },
    {
      title: "Artistic Avenue - E-Commerce Website",
      description: "Full Stack Project",
      imgUrl: art,
      link:"https://art-and-craft-cdc17.web.app/"
    },
    {
      title: "Hockey Haven - Hockey Club",
      description: "Front End Project",
      imgUrl: hockey,
      link:"https://devsafi.github.io/hockey-haven/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Welcome to the Projects section! Here, you will find a showcase of the diverse and innovative projects I have worked on. Each project highlights my skills, creativity, and dedication to delivering high-quality results. Whether it's a web development endeavor, a design masterpiece, or a collaborative effort, these projects reflect my passion and expertise in various domains.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
