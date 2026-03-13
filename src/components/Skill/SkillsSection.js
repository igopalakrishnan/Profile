import React, { useEffect, useRef } from "react";
import "./SkillsSection.css";

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Git",
  "TypeScript",
];

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("in-view");
          } else {
            section.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    section.classList.add("in-view");

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      {skills.map((skill, index) => (
        <span key={index} className={`pill pill-${index + 1}`}>
          {skill}
        </span>
      ))}
    </section>
  );
};

export default SkillsSection;
