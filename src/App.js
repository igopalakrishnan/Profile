import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only on home route */}
      {location.pathname === "/" && <Navbar />}

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Projects page route */}
        <Route path="/projectsPage" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

// const colors = {
//   background: "#f5f5f5",       // Soft gray
//   primary: "#008080",          // Teal
//   accent: "#ff7f50",           // Coral orange
//   text: "#333333",             // Dark gray
//   button: "#ff7f50",           // Orange pill buttons
//   skillTeal: "#e0f7f7",        // Light teal pill
//   skillOrange: "#ffe5d0",      // Light orange pill
// };
