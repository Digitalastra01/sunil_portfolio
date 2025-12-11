import React from 'react';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>
                <a href="mailto:sunilsoftwareengineer@gmail.com" className="contact-btn">Say Hello</a>
            </div>
            <style>{`
        .contact-section {
          padding: 6rem 2rem;
          text-align: center;
          background: var(--bg-color);
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .contact-text {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        .contact-btn {
          display: inline-block;
          padding: 1rem 3rem;
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
          border-radius: 5px;
          font-size: 1.1rem;
          transition: all 0.3s;
        }
        .contact-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-3px);
        }
      `}</style>
        </section>
    );
};

export default Contact;
