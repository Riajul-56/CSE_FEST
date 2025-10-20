import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`font-sans transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Events darkMode={darkMode} />
      <Schedule darkMode={darkMode} />
      <Team darkMode={darkMode} />
      <Sponsors darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
