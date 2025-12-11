import React from 'react';

const skillsData = [
    { category: "Backend", items: ["Python", "Django", "FastAPI", "DRF", "Node.js"] },
    { category: "Database", items: ["PostgreSQL", "MySQL", "Redis"] },
    { category: "DevOps & Cloud", items: ["Docker", "AWS (EC2, S3, RDS)", "CI/CD", "Nginx", "Linux"] },
    { category: "Architecture", items: ["Microservices", "REST API", "WebSockets", "AsyncIO"] }
];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-category">{skillGroup.category}</h3>
                            <div className="skill-tags">
                                {skillGroup.items.map((item, idx) => (
                                    <span key={idx} className="skill-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .skills-section {
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
          margin-bottom: 3rem;
          background: linear-gradient(to right, #fff, #a0a0a0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-color: var(--accent-primary);
        }
        .skill-category {
          font-size: 1.2rem;
          color: var(--accent-secondary);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 0.5rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .skill-tag {
          background: rgba(59, 130, 246, 0.1);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
      `}</style>
        </section>
    );
};

export default Skills;
