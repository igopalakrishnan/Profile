import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import learning from "../../assets/projects/learning.png";
import chatApp from "../../assets/projects/chatApp.png";
import interview from "../../assets/projects/interview.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Learning Assistant",
    desc: [
      "📂 Upload documents to generate study material automatically",
      "🃏 Smart flashcard creation for key concepts and definitions",
      "📝 AI‑generated quizzes to test comprehension",
      "❓ Ask questions directly to the AI for instant explanations",
      "📊 Review results with detailed performance analytics",
      "🔒 Secure authentication with JWT and bcrypt",
      "🍃 MongoDB database for storing documents, cards, and quiz history",
      "⚡ Express.js APIs for content parsing, quiz generation, and user management",
      "⚛️ React + ⚡ Vite frontend with responsive, interactive UI",
      "🔄 Continuous learning loop with flashcard review and spaced repetition",
      "🚀 Deployed on Render and Netlify for seamless access",
    ],
    img: learning,
    link: "https://ai-learning-assistant.netlify.app/login",
  },
  {
    title: "AI Interview Preparation",
    desc: [
      "🃏 Dynamic role cards for Role, Experience, and Language",
      "🤖 AI‑generated interview questions tailored to each card",
      "📂 MongoDB database for storing roles, sessions, and progress",
      "⚡ Express.js APIs for question generation, scoring, and user management",
      "⚛️ React + ⚡ Vite frontend with responsive, modern UI",
      "🧠 Expandable drawer to reveal detailed concepts when clicking questions",
      "🔒 Secure authentication with JWT and bcrypt",
      "🔄 Continuous learning loop with question practice and concept review",
      "🚀 Deployed on Render and Netlify for seamless global access",
    ],
    img: interview,
    link: "https://ai-interviews-preparation.netlify.app",
  },
  {
    title: "Chat App",
    desc: [
      "💬 Real‑time messaging powered by Socket.IO for instant communication",
      "🔒 Secure authentication with JWT and bcrypt",
      "🍃 MongoDB database for storing messages, profiles, and chat history",
      "⚡ Express.js APIs for routing, user management, and group creation",
      "⚛️ React + ⚡ Vite frontend with responsive, modern UI",
      "👥 Private chats with dynamic room management",
      "🖼️ Profile customization with avatars and online/offline indicators",
      "🚀 Deployed on Render",
      "📂 Scalable architecture ready for file sharing",
    ],
    img: chatApp,
    link: "https://chatapp-1-10fd.onrender.com",
  },
];

export default function Projects() {
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
      <motion.section
        id="projects"
        className="projects-section"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        // viewport={{ once: false, amount: 0.1 }}
        variants={sectionVariants}
      >
        <h2 className="section-title">Live Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => {
            const glowClass = index % 2 === 0 ? "coral-glow" : "teal-glow";
            return (
              <motion.div
                key={index}
                className={`project-card ${glowClass}`}
                custom={index}
                variants={cardVariants}
                style={{ animationDelay: `${1 + index * 0.3}s` }}
                onClick={() => setActiveProject({ ...proj, index })}
              >
                <img src={proj.img} alt={proj.title} className="project-img" />
                <h3 className="project-title">{proj.title}</h3>
                {/* <p className="project-desc">{proj.desc}</p> */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Site
                </a>
              </motion.div>
            );
          })}
        </div>
        <div className="projects-footer">
          <Link to="/projectsPage" className="projects-button">
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
                <ul className="modal-desc">
                  {Array.isArray(activeProject.desc) ? (
                    activeProject.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))
                  ) : (
                    <p>{activeProject.desc}</p>
                  )}
                </ul>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`modal-link ${activeProject.index % 2 === 0 ? "coral-btn" : "teal-btn"}`}
                >
                  View Site
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
