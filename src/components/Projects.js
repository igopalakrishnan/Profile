import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project1-img1.png";
import projImg2 from "../assets/img/project1-img2.png";
import reactjsImg1 from "../assets/img/project2-img1.png";
import reactjsImg2 from "../assets/img/project2-img2.png";
import reactjsImg3 from "../assets/img/project2-img3.png";
import reactjsImg4 from "../assets/img/project2-img4.png";
import reactjsImg5 from "../assets/img/project2-img5.png";
import reactnativeImg1 from "../assets/img/project3-img1.png";
import reactnativeImg2 from "../assets/img/project3-img2.png";
import reactnativeImg3 from "../assets/img/project3-img3.png";
import reactnativeImg4 from "../assets/img/project3-img4.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

const Projects = () => {

    const projects = [
        {
            title: "Client Portal",
            imgUrl: projImg1,
        },
        {
            title: "Course Tracker",
            imgUrl: projImg2,
        },
    ];

    const reactjs = [
        {
            title: "Portfolio",
            imgUrl: reactjsImg1,
        },
        {
            title: "Instagram Clone",
            imgUrl: reactjsImg2,
        },
        {
            title: "Chat App",
            imgUrl: reactjsImg3,
        },
        {
            title: "Book Keeping App",
            imgUrl: reactjsImg4,
        },
        {
            title: "E-commerce",
            imgUrl: reactjsImg5,
        },
    ];

    const reactnative = [
        {
            title: "Deliveroo Clone",
            imgUrl: reactnativeImg1,
        },
        {
            title: "Inshort Clone",
            imgUrl: reactnativeImg2,
        },
        {
            title: "Signal Clone",
            imgUrl: reactnativeImg3,
        },
        {
            title: "Insta Clone",
            imgUrl: reactnativeImg4,
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
                                    <p></p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Project</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">React JS</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">React Native</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row >
                                                    {
                                                        projects.map((project, index) =>
                                                            <Col size={12} sm={6} md={4} key={index}>
                                                                <div className="proj-imgbx">
                                                                    <img src={project.imgUrl} />
                                                                    <div className="proj-txtx">
                                                                        <h4>{project.title}</h4>
                                                                    </div>
                                                                </div>
                                                            </Col>)

                                                    }
                                                </Row>
                                               
                                            </Tab.Pane>
                                           
                                            <Tab.Pane eventKey="second">
                                                <Row >
                                                    {
                                                        reactjs.map((project, index) =>
                                                            <Col size={12} sm={6} md={4} key={index}>
                                                                <div className="proj-imgbx">
                                                                    <img src={project.imgUrl} />
                                                                    <div className="proj-txtx">
                                                                        <h4>{project.title}</h4>
                                                                    </div>
                                                                </div>
                                                            </Col>)

                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row >
                                                    {
                                                        reactnative.map((project, index) =>
                                                            <Col size={12} sm={6} md={4} key={index}>
                                                                <div className="proj-imgbx">
                                                                    <img src={project.imgUrl} />
                                                                    <div className="proj-txtx">
                                                                        <h4>{project.title}</h4>
                                                                    </div>
                                                                </div>
                                                            </Col>)

                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <button>
                                                    <a style={{
                                                        textDecoration: "none",
                                                        color: "#fff"
                                                    }} href="https://igopalakrishnan.github.io/html/Project.html" target="_blank">More Info
                                                        <ArrowRightCircle size={27} />
                                                    </a>
                                                </button>
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

export default Projects