import React from "react";
import "./SkillsSection.css";
import profile from "./skill.png"; // circular image

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "TypeScript", "SASS", "Bootstrap", "Git", "MongoDB"
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-image">
        <div className="image-wrapper">
          <img src={profile} alt="Profile" />
        </div>
      </div>
      <div className="skills-content">
        <h2>My Skills</h2>
        <div className="skill-tags">
          {skills.map((skill, index) => (
            <span key={index} className="pill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
