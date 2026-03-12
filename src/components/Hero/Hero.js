import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import profile from "./profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`hero ${inView ? "in-view" : ""}`}>
      <div className="hero-image">
        <div className="photo-frame">
          <img src={profile} alt="Hero" />
          <span className="frame-caption">
            Gokul
            <br />
            {`{Full Stack Developer}`}
          </span>
        </div>
      </div>
      <div className="hero-content">
        <h1>
          Hello, I'm Gokul
          <br />|
          <TypingEffect text="Full Stack Developer" speed={120} pause={1000} />
        </h1>
        {/* Social icons */}
        <div className="social-icons">
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="icon website">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="icon linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="hero-buttons">
          <button className="btn primary">Resume</button>
          <button className="btn secondary">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
