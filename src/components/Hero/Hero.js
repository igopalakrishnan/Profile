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
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={ref} className={`hero ${inView ? "in-view" : ""}`}>
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
          <a
            href="https://myprofilepo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon website"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a
            href="https://github.com/igopalakrishnan"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/igopalakrishnan/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.facebook.com/igopalakrishnan"
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/i__gopalakrishnan/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="hero-buttons">
          {/* Resume button */}
          <a
            href="/Resume.pdf" // place resume.pdf inside your public folder
            target="_blank"
            download="Gokul_Resume.pdf" // filename for download
            rel="noopener noreferrer"
            className="btn primary"
          >
            Resume
          </a>

          {/* Hire Me button */}
          <a
            href={`mailto:kingkrishna809@gmail.com
      ?subject=Hiring%20Opportunity%20-%20Shortlist
      &body=Greetings%20Gokul,%0D%0A%0D%0A
      We%20are%20pleased%20to%20inform%20you%20that%20you%20have%20been%20shortlisted%20for%20a%20role%20at%20${encodeURIComponent("[CompanyName]")}.%0D%0A%0D%0A
      Kindly%20share%20your%20availability%20for%20an%20interview.%0D%0A%0D%0A
      Best%20wishes,%0D%0A
      ${encodeURIComponent("[CompanyName]")}`}
            className="btn secondary"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
