import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ isDark }) => {
  return (
    <section id="home" className={`hero ${isDark ? 'dark' : 'light'}`}>
      {/* Animated Background Particles */}
      <div className="hero-bg">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
        <div className="particle p5"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-greeting">Hello, World! 👋</p>
        <h1 className="hero-title">
          <span className="title-line">web.</span>
          <span className="title-line accent">dev</span>
          <span className="title-line">elopment</span>
        </h1>
        <p className="hero-subtitle">
          Crafting digital experiences with passion &amp; code
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-secondary">Contact Me</Link>
        </div>

        {/* Page Navigation Hint */}
        <div className="nav-hint">
          <div className="nav-hint-ring"></div>

          <p className="nav-hint-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"/>
            </svg>
            explore pages
          </p>

          <div className="nav-hint-pages">
            {[
              { label: 'About Me',   to: '/about',    num: '01' },
              { label: 'Projects',   to: '/projects', num: '02' },
              { label: 'Contact Me', to: '/contact',  num: '03' },
            ].map((page) => (
              <Link key={page.to} to={page.to} className="nav-hint-chip">
                <span className="chip-num">{page.num}</span>
                <span className="chip-label">{page.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
