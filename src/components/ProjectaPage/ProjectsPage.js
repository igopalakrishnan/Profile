import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsPage.css";
import gallery from "../../assets/projects/gallery.png";
import portfolio from "../../assets/projects/portfolio.png";
import todoList from "../../assets/projects/todoList.png";
import { Link } from "react-router-dom";

const projectsPage = [
  {
    title: "Portfolio Website",
    desc: "Responsive portfolio...Responsive portfolio...Responsive portfolio...Responsive portfolio...Responsive portfolio...Responsive portfolio...",
    img: portfolio,
    link: "#",
  },
  {
    title: "UI Animation Demo",
    desc: "Interactive hero section...",
    img: gallery,
    link: "#",
  },
  {
    title: "Responsive Navbar",
    desc: "Canvas-style navbar...",
    img: todoList,
    link: "#",
  },
  {
    title: "Responsive ",
    desc: "Canvas-style navbar...",
    img: todoList,
    link: "#",
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, type: "spring", stiffness: 80 },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -40,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -30,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      <nav className="projectsPage-navbar">
        <div className="logo">GK</div>
        <Link to="/" className="home-link">
          Home
        </Link>
        <div className="spacer"></div> {/* empty div to balance flex */}
      </nav>
      <motion.section
        id="projectsPage"
        className="projectsPage-section"
        initial="hidden"
        whileInView="visible"
        animate="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.1 }}
        variants={sectionVariants}
      >
        <h2 className="section-title">All Projects</h2>
        <div className="projectsPage-grid">
          {projectsPage.map((proj, index) => {
            const glowClass = index % 2 === 0 ? "coral-glow" : "teal-glow";
            return (
              <motion.div
                key={proj.title} // use unique key instead of index
                className={`projectsPage-card ${glowClass}`}
                custom={index}
                variants={cardVariants}
                onClick={() => setActiveProject({ ...proj, index })}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="projectsPage-img"
                />
                <h3 className="projectsPage-title">{proj.title}</h3>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectsPage-link"
                >
                  View Code
                </a>
              </motion.div>
            );
          })}
        </div>
        <div className="projectsPage-footer">
          <Link to="/projectsPage" className="projectsPage-button">
            See All Projects
          </Link>
        </div>
      </motion.section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal"
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setActiveProject(null)}
          >
            {/* Close button ABOVE modal */}
            <span className="close" onClick={() => setActiveProject(null)}>
              &times;
            </span>

            <motion.div
              className="modal-content"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-left">
                <img src={activeProject.img} alt={activeProject.title} />
              </div>
              <div className="modal-right">
                <h2
                  className={`modal-title ${activeProject.index % 2 === 0 ? "coral-text" : "teal-text"}`}
                >
                  {activeProject.title}
                </h2>
                <p className="modal-desc">{activeProject.desc}</p>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`modal-link ${activeProject.index % 2 === 0 ? "coral-btn" : "teal-btn"}`}
                >
                  View Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
