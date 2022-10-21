import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Bookkeeping from "../assets/img/book-keeping.png";
import ChatApp from "../assets/img/chatApp.png";
import Client from "../assets/img/client.png";
import Deliveroo from "../assets/img/deliveroo.png";
import Ecommerce from "../assets/img/e-commerce.png";
import Education from "../assets/img/education.png";
import Instaclone from "../assets/img/Insta-clone.png";
import Instagram from "../assets/img/Instagram.png";
import News from "../assets/img/news.png";
import Portfolio from "../assets/img/portfolio.png";
import Signal from "../assets/img/signal.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
        {
            title: "Client Portal",
            imgUrl: Client,
        },
        {
            title: "Course Tracker",
            imgUrl: Education,
        },
        {
            title: "Portfolio",
            imgUrl: Portfolio,
        },
        {
            title: "Instagram Clone",
            imgUrl: Instagram,
        },
        {
            title: "Chat App",
            imgUrl: ChatApp,
        },
        {
            title: "Book Keeping App",
            imgUrl: Bookkeeping,
        },
        {
            title: "E-commerce",
            imgUrl: Ecommerce,
        },
        {
            title: "Deliveroo Clone",
            imgUrl: Deliveroo,
        },
        {
            title: "Insta Clone",
            imgUrl: Instaclone,
        },
        {
            title: "Inshort Clone",
            imgUrl: News,
        },
        {
            title: "Signal Clone",
            imgUrl: Signal,
        },
    ];

    const reactjs = [
        {
            title: "Client Portal",
            imgUrl: Client,
        },
        {
            title: "Portfolio",
            imgUrl: Portfolio,
        },
        {
            title: "Instagram Clone",
            imgUrl: Instagram,
        },
        {
            title: "Chat App",
            imgUrl: ChatApp,
        },
        {
            title: "Book Keeping App",
            imgUrl: Bookkeeping,
        },
        {
            title: "E-commerce",
            imgUrl: Ecommerce,
        },
    ];

    const reactnative = [
        {
            title: "Deliveroo Clone",
            imgUrl: Deliveroo,
        },
        {
            title: "Course Tracker",
            imgUrl: Education,
        },
        {
            title: "Insta Clone",
            imgUrl: Instaclone,
        },
        {
            title: "Inshort Clone",
            imgUrl: News,
        },
        {
            title: "Signal Clone",
            imgUrl: Signal,
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
                                                <Nav.Link eventKey="first">All Projects</Nav.Link>
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
                                                    }} href="https://igopalakrishnan.github.io/Profile-Projects" target="_blank">More Info
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