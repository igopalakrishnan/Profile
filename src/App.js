import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import About from "./components/About/About";
// import SkillsSection from "./components/Skill/SkillsSection";

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;


// const colors = {
//   background: "#f5f5f5",       // Soft gray
//   primary: "#008080",          // Teal
//   accent: "#ff7f50",           // Coral orange
//   text: "#333333",             // Dark gray
//   button: "#ff7f50",           // Orange pill buttons
//   skillTeal: "#e0f7f7",        // Light teal pill
//   skillOrange: "#ffe5d0",      // Light orange pill
// }; 
