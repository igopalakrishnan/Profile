import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  { title: "Portfolio Website", desc: "Responsive portfolio...", img: "project1.png", link: "#" },
  { title: "UI Animation Demo", desc: "Interactive hero section...", img: "project2.png", link: "#" },
  { title: "Responsive Navbar", desc: "Canvas-style navbar...", img: "project3.png", link: "#" },
];

export default function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.8 } }, // global fade-out
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 80,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -40,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => {
          const glowClass = index % 2 === 0 ? "coral-glow" : "teal-glow";
          return (
            <motion.div
              key={index}
              className={`project-card ${glowClass}`}
              custom={index}
              variants={cardVariants}
              style={{ animationDelay: `${1 + index * 0.3}s` }} // stagger glow start
            >
              <img src={proj.img} alt={proj.title} className="project-img" />
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Code
              </a>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
