import React from 'react';

const experienceData = [
    {
        role: "Python Developer",
        company: "Toadster Technologies, Noida",
        period: "05/2025 – Present",
        description: [
            "Develop RESTful APIs using Django REST Framework and FastAPI.",
            "Design and optimize MySQL and PostgreSQL schemas.",
            "Deployed secure APIs with robust authentication systems."
        ]
    },
    {
        role: "Software Developer",
        company: "Dazzlesoft Solution, Delhi",
        period: "06/2024 – 12/2024",
        description: [
            "Developed RESTful APIs using Django REST Framework.",
            "Implemented authentication, authorization, and security measures.",
            "Integrated third-party APIs and services."
        ]
    },
    {
        role: "Graduate Engineer Trainee",
        company: "Sterlite Technologies, Pune",
        period: "01/2022 – 03/2023",
        description: [
            "Completed training in Python backend development and DRF.",
            "Hands-on experience in SQL database design and MySQL optimization.",
            "Mastered REST API testing using Postman."
        ]
    }
];

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="role">{exp.role}</h3>
                                <h4 className="company">{exp.company}</h4>
                                <span className="period">{exp.period}</span>
                                <ul className="description">
                                    {exp.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .experience-section {
          padding: 5rem 2rem;
          background: var(--bg-color);
        }
        .container {
          max-width: 1000px;
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
        .timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid rgba(255, 255, 255, 0.1);
        }
        .timeline-item {
          margin-bottom: 3rem;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -2.6rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .timeline-content {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .role {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .company {
          font-size: 1.1rem;
          color: var(--accent-secondary);
          margin-bottom: 0.5rem;
        }
        .period {
          display: block;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-style: italic;
        }
        .description {
          list-style-type: disc;
          padding-left: 1.5rem;
          color: var(--text-primary);
        }
        .description li {
          margin-bottom: 0.5rem;
        }
      `}</style>
        </section>
    );
};

export default Experience;
