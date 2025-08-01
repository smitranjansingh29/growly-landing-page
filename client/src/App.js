import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <HeroSection />
          <HowItWorks />
          <Features />
          <LeadForm />
          <Footer />
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
