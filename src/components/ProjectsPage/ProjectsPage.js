import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsPage.css";
import learning from "../../assets/projects/learning.png";
import portfolio from "../../assets/projects/portfolio.png";
import todoList from "../../assets/projects/todoList.png";
import chatApp from "../../assets/projects/chatApp.png";
import contact from "../../assets/projects/contact.png";
import { Link } from "react-router-dom";
import interview from "../../assets/projects/interview.png";

const projectsPage = [
  {
    title: "Portfolio",
    desc: [
      "⚛️ Built with React for modular, reusable components",
      "🎨 Coral and teal branding with clean, modern UI design",
      "📱 Responsive layouts that adapt seamlessly across devices",
      "✨ Smooth animations — ripple entrances, overlay fades, glow swaps",
      "🔗 Dynamic routing for fast navigation between sections",
      "🛠️ Modular CSS & Font Awesome icons for maintainability and polish",
      "🚀 Deployed on Netlify",
    ],
    img: portfolio,
    link: "https://myprofilepo.netlify.app/",
  },
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
  {
    title: "ToDo List",
    desc: [
      "📝 Create tasks with titles, descriptions",
      "📖 Read and view all tasks in a clean dashboard",
      "✏️ Edit tasks seamlessly with inline updates",
      "❌ Delete tasks instantly with confirmation prompts",
      "🍃 MongoDB database for storing tasks and user data",
      "⚛️ React frontend with responsive, modern UI",
      "⚡ Express.js APIs for CRUD operations",
      "🚀 Deployed on Render",
    ],
    img: todoList,
    link: "https://todo-mern-app-vb1d.onrender.com/",
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`projectsPage-navbar ${scrolled ? "scrolled" : ""}`}>
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
                  onClick={(e) => e.stopPropagation()}
                >
                  View Site
                </a>
              </motion.div>
            );
          })}
        </div>
        {/* <div className="projectsPage-footer">
          <Link to="/projectsPage" className="projectsPage-button">
            See All Projects
          </Link>
        </div> */}
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
            <span className="page-close" onClick={() => setActiveProject(null)}>
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
