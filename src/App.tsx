import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Hero" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="*" element={<Hero />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
