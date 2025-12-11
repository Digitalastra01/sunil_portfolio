import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="about">
            <div className="hero-content">
                <h1 className="name">Sunil Kumar</h1>
                <h2 className="role">Python Developer</h2>
                <p className="summary">
                    Experienced Python Backend Developer with 2.5+ years of expertise in developing RESTful APIs using Django REST Framework.
                    Proficient in MySQL and PostgreSQL, secure authentication, and scalable backend architectures.
                </p>
                <div className="cta-group">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
            <style>{`
        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        }
        .hero-content {
          max-width: 800px;
          animation: fadeIn 1s ease-out;
        }
        .name {
          font-size: 4rem;
          background: linear-gradient(to right, #fff, #a0a0a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .role {
          font-size: 2rem;
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
        }
        .summary {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }
        .cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        .btn {
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn-primary {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 15px var(--accent-glow);
        }
        .btn-primary:hover {
          box-shadow: 0 6px 20px var(--accent-glow);
        }
        .btn-secondary {
          background: transparent;
          border: 2px solid var(--text-secondary);
          color: var(--text-primary);
        }
        .btn-secondary:hover {
          border-color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .name { font-size: 2.5rem; }
          .role { font-size: 1.5rem; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
