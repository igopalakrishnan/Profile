import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // for smooth section scroll
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">GK</div>
        <div className="desktop-links">
          {/* Smooth scroll links */}
          <ScrollLink to="home" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={600} onClick={() => setIsOpen(false)}>About</ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Skills</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Projects</ScrollLink>
          <ScrollLink to="getInTouch" smooth={true} duration={600} onClick={() => setIsOpen(false)} className="pill-btn">
             Get In Touch
          </ScrollLink>
        </div>

        {!isOpen && (
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span><span className="bar"></span><span className="bar"></span>
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span><span className="bar"></span><span className="bar"></span>
        </div>
        <ScrollLink to="home" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={600} onClick={() => setIsOpen(false)}>About</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Skills</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Projects</ScrollLink>
        <ScrollLink to="getInTouch" smooth={true} duration={600} onClick={() => setIsOpen(false)} className="pill-btn">
          Get In Touch
        </ScrollLink>
      </div>

      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
