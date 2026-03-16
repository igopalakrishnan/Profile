import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import profileImage from "./about.png"; // use your transparent circular image
import SkillsSection from "../Skill/SkillsSection";

const About = () => {
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
    <section
      id="about"
      ref={ref}
      className={`about-section ${inView ? "in-view" : ""}`}
    >
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            <strong>
              A skilled <span>Full Stack Developer</span> with 3+ years of experience in designing and
              implementing web applications using a variety of front-end and
              back-end technologies. Proficient in both client-side and
              server-side development, with hands-on expertise in
              <span> React.js, Node.js, Express, and MongoDB.</span>Passionate
              about continuous learning and staying updated with the latest
              industry trends and best practices.
            </strong>
          </p>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <img src={profileImage} alt="Gokul" />
            <div className="caption">Meet Gokul</div>
          </div>
        </div>
      </div>
      {/* Skills section overlaps */}
      <div className="skills-overlap">
        <SkillsSection />
      </div>
    </section>
  );
};

export default About;
