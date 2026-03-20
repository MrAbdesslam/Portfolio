import './AboutMe.css';

const AboutMe = ({ isDark }) => {
  const skills = [
    { name: 'HTML / CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'UI / UX', level: 75 },
  ];

  return (
    <section id="about" className={`about-page ${isDark ? 'dark' : 'light'}`}>
      {/* Background */}
      <div className="about-bg">
        <div className="about-grid"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>

      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <p className="about-tag">// who am i</p>
          <h1 className="about-title">About Me</h1>
          <div className="title-underline"></div>
        </div>

        {/* Content Grid */}
        <div className="about-grid-content">
          {/* Left — Avatar + Info */}
          <div className="about-left">
            <div className="avatar-wrapper">
              <div className="avatar-frame">
                <img src="/img.jpg" alt="Profile" className="avatar-photo" />
              </div>
              <div className="avatar-glow"></div>
            </div>

            <div className="about-info-cards">
              <div className="info-card">
                <span className="info-label">Name</span>
                <span className="info-value">Abdesslam Karaoui</span>
              </div>
              <div className="info-card">
                <span className="info-label">Role</span>
                <span className="info-value">Web Developer</span>
              </div>
              <div className="info-card">
                <span className="info-label">Location</span>
                <span className="info-value">Morocco 🇲🇦</span>
              </div>
              <div className="info-card">
                <span className="info-label">Status</span>
                <span className="info-value available">✦ Available</span>
              </div>
            </div>
          </div>

          {/* Right — Bio + Skills */}
          <div className="about-right">
            <div className="bio-block">
              <h2 className="bio-heading">Hello! 👋</h2>
              <p className="bio-text">
                I'm a passionate web developer who loves crafting clean,
                modern, and interactive digital experiences. I combine
                creative design with solid code to build things people enjoy.
              </p>
              <p className="bio-text">
                I'm always learning, always building, and always pushing
                the limits of what's possible on the web.
              </p>
            </div>

            {/* Skills */}
            <div className="skills-block">
              <h2 className="skills-heading">// skills</h2>
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ '--target-width': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
