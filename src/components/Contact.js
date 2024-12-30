import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uydbuaq',
            'template_t82d9xm',
            form.current,
            'Lf4ceBSKVqqBNmIaw')
            .then((result) => {
                console.log(result.text);
                console.log('message send')
            }, (error) => {
                console.log(error.text);
            });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                    src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="First Name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Email Address"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Col>
                                            <Col
                                                size={12}
                                                className="px-1">
                                                <textarea
                                                required
                                                    rows="6"
                                                    placeholder="Message"
                                                    name="message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                ></textarea>
                                                <button type="submit" value="Send"><span>Send</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact