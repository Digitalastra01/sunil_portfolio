import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <nav className="nav">
                    <div className="logo">Sunil Kumar</div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Sunil Kumar. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://linkedin.com/in/er-sunil-kumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/sunilsoftwareengineer" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:sunilsoftwareengineer@gmail.com">Email</a>
                </div>
            </footer>
            <style>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .header {
          padding: 1.5rem 2rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text-primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-links a:hover {
          color: var(--accent-primary);
        }
        .main-content {
          flex: 1;
          padding-top: 80px; /* Space for fixed header */
        }
        .footer {
          padding: 2rem;
          text-align: center;
          background: var(--bg-secondary);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .social-links {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        .social-links a {
          color: var(--text-secondary);
        }
        .social-links a:hover {
          color: var(--accent-primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Simple mobile hide for now, can add burger later */
          }
        }
      `}</style>
        </div>
    );
};

export default Layout;
