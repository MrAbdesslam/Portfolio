import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'LUXESTORE',
    description: 'A premium luxury e-commerce platform with an elegant UI, curated collections, and a seamless shopping experience.',
    thumb: '/img1.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://luxesto.netlify.app/',
  },
  {
    id: 2,
    name: 'NOIR-GOLD',
    description: 'A sophisticated dark-themed fashion brand website with bold typography, smooth animations, and premium aesthetics.',
    thumb: '/img2.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://noir-gold.netlify.app/',
  },
  {
    id: 3,
    name: 'KFC Website',
    description: 'A high-energy fast food website for KFC with campaign banners, cart system, and mobile-responsive design.',
    thumb: '/img3.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://site-kfc.netlify.app/',
  },
  {
    id: 4,
    name: 'Dashboard',
    description: 'A real-time analytics dashboard with revenue tracking, invoice management, and customer satisfaction metrics.',
    thumb: '/img4.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://dashbord-site.netlify.app/',
  },
  {
    id: 5,
    name: 'Stuffsus',
    description: 'A modern shop platform featuring a full-screen hero, recommendation engine, and seamless product discovery.',
    thumb: '/img5.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://stuffsus.netlify.app/',
  },
  {
    id: 6,
    name: 'FurnishHub',
    description: 'A premium furniture e-commerce platform with curated Scandinavian collections, product search, and smooth checkout.',
    thumb: '/img6.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://furnishhub.netlify.app/',
  },
  {
    id: 7,
    name: 'The-Leading-Hotels',
    description: 'An ultra-premium luxury hotel loyalty program dashboard with an editorial design and immersive user experience.',
    thumb: '/img7.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://the-leading-hotels.netlify.app/',
  },
  {
    id: 8,
    name: 'BitForge',
    description: 'A scalable tech platform with a powerful backend, clean frontend architecture, and exceptional developer experience.',
    thumb: '/img8.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://bitforge-2.netlify.app/',
  },
  {
    id: 9,
    name: 'Beauty Shop',
    description: 'A botanical-inspired beauty e-commerce store with a clean aesthetic, product categories, and a seamless shopping experience.',
    thumb: '/img9.png',
    techs: [
      { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    link: 'https://shopbeauty-botanicl.netlify.app/',
  },
];

const Projects = ({ isDark }) => {
  return (
    <section id="projects" className={`projects-page ${isDark ? 'dark' : 'light'}`}>
      {/* Background */}
      <div className="projects-bg">
        <div className="projects-grid-overlay"></div>
        <div className="proj-blob pb1"></div>
        <div className="proj-blob pb2"></div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <p className="projects-tag">// my work</p>
          <h1 className="projects-title">Projects</h1>
          <div className="projects-underline"></div>
          <p className="projects-subtitle">Things I've built with passion & code</p>
        </div>

        {/* Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Thumbnail */}
              <div
                className="card-thumb"
                style={{ backgroundImage: `url(${project.thumb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="thumb-overlay">
                  <span className="thumb-label">{project.name}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="card-name">{project.name}</h3>
                <p className="card-desc">{project.description}</p>

                {/* Tech Icons */}
                <div className="card-techs">
                  {project.techs.map((tech) => (
                    <div key={tech.name} className="tech-badge">
                      <img src={tech.icon} alt={tech.name} className="tech-icon" />
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-btn"
                >
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
