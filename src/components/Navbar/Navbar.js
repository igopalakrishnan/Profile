import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">GK</div>
        <div className="desktop-links">
          <a href="/#">Home</a>
          <a href="/#about">About</a>
          <a href="/services">Skills</a>
          <a href="/services">Projects</a>
          <a href="/contact" className="pill-btn">
            Contact Me
          </a>
        </div>
        {!isOpen && (
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </nav>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <a href="/#" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="/#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="/services">Skills</a>
        <a href="/services">Projects</a>
        <a href="/contact" className="pill-btn">
          Contact Me
        </a>
      </div>

      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
