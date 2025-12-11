import React from 'react';

const projectsData = [
    {
        title: "Asphare",
        type: "Multi-Tenant Backend",
        year: "2025",
        tech: ["Django", "PostgreSQL", "Celery", "Redis", "RabbitMQ", "JWT"],
        description: "Engineered a multi-tenant backend isolating tenant data while sharing platform-level services. Implemented async job processing, caching, rate limiting, and RBAC authorization.",
        link: "#" // Placeholder if no link provided
    },
    {
        title: "Aforro E-commerce",
        type: "E-commerce Backend",
        year: "2024",
        tech: ["Django REST", "PostgreSQL", "Celery", "Redis"],
        description: "Built an e-commerce backend modeling Products, Stores, Inventory, and Orders. Implemented async tasks for emails and inventory summaries, plus Redis-backed caching for search.",
        link: "#"
    }
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="card-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-year">{project.year}</span>
                            </div>
                            <p className="project-type">{project.type}</p>
                            <p className="project-desc">{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .projects-section {
          padding: 5rem 2rem;
          background: var(--bg-secondary);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 4rem;
          background: linear-gradient(to right, #fff, #a0a0a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          background: var(--bg-color);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s, border-color 0.3s;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .project-title {
          font-size: 1.5rem;
          color: #fff;
        }
        .project-year {
          font-size: 0.9rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: 10px;
        }
        .project-type {
          color: var(--accent-secondary);
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .project-desc {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-tag {
          font-size: 0.8rem;
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
        }
      `}</style>
        </section>
    );
};

export default Projects;
