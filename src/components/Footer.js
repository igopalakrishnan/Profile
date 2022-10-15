import { Container, Row, Col } from "react-bootstrap";
import Technologies from './Technologies';
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Technologies />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/igopalakrishnan" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/igopalakrishnan" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/i__gopalakrishnan/" target="_blank"><img src={navIcon3} alt="" /></a>
                            <a href="https://github.com/igopalakrishnan" target="_blank"><img src={navIcon4} alt="" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer