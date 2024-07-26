import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            
              
                <h2>Projects</h2>
                <p> </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Projects</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col>
                        <h3>Chess Game</h3>

                        <p>
                        Developed a chess game using Python and Pygame library, implementing AI algorithms for move calculation and
                        strategy analysis.
                        </p>

                        <p>
                        Designing and implementing algorithms to determine optimal moves in various chess positions, enhancing gameplay
                        experience and challenging players at different skill levels.
                        </p>
                        </Col>

                        <Col>
                        <h3> Tutor App</h3>

                        <p>
                        Developed a comprehensive tutor app utilizing Android Studio, Kotlin, and Java in collaboration with a team over a
                        span of three months, organized into three sprints
                        </p>

                        <p>
                        Implemented RoomDB, a library that provides an abstraction layer over SQLite for efficient database management,
                        facilitating the creation and storage of appointments, requests, and other pertinent data within the application
                        </p>

                        <p>
                        Integrated Firebase for seamless user authentication and profile database management, enhancing the app’s
                        functionality and security.
                        </p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
       
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}