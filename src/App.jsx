import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';
import './App.css';

// Inner app that has access to useLocation
const AppContent = ({ isDark, toggleDark }) => {
  const location = useLocation();

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <PageTransition isDark={isDark} key={location.pathname}>
        <Routes>
          <Route path="/" element={<Hero isDark={isDark} />} />
          <Route path="/about" element={<AboutMe isDark={isDark} />} />
          <Route path="/projects" element={<Projects isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
        </Routes>
      </PageTransition>
    </div>
  );
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <BrowserRouter>
      <AppContent isDark={isDark} toggleDark={toggleDark} />
    </BrowserRouter>
  );
}

export default App;
