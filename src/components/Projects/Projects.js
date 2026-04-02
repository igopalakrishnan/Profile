import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import learning from "../../assets/projects/learning.png";
import chatApp from "../../assets/projects/chatApp.png";
import contact from "../../assets/projects/contact.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Learning Assistant",
   desc: [
    
  ],
    img: learning,
    link: "https://ai-learning-assistant.netlify.app/login",
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
  {
    title: "Contact Management System",
    desc: [
      "📇 Manage all contacts in one place with clean, intuitive UI",
      "🔍 Track lead status: Interested, Follow‑ups, Closed, and more",
      "❌ Delete contact instantly",
      "🍃 MongoDB database for storing contact details and activity history",
      "⚛️ React + ⚡ Vite frontend with responsive layouts for desktop",
      "⚡ Express.js APIs for CRUD operations and status updates",
      "📊 Dashboard view to monitor progress across different statuses",
      "🚀 Deployed on Netlify (frontend) and Render (backend) with environment variable management",
    ],
    img: contact,
    link: "https://mern-contact-management.netlify.app",
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
