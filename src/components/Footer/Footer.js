import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="portfolio-footer">
        {/* Left: Logo */}
        <div className="footer-left">
          <h3 className="footer-logo">GK</h3>
        </div>

        {/* Center: Phrase */}
        <div className="footer-center">
          <p className="footer-phrase">Eat • Code • Sleep</p>
        </div>

        {/* Right: Social icons */}
        <div className="footer-right">
        </div>
      </footer>

      {/* Floating Back to Top button */}
      <button className="back-to-top-floating" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </>
  );
}
