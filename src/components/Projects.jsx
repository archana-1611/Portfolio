import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Word Parkour Game',
      desc: 'A gamified English vocabulary application where users progress through interactive word challenges with adaptive difficulty to enhance learning.',
      features: [
        'Level-based progression (Easy → Medium → Advanced)',
        'Interactive word challenges (meanings, usage, completion)',
        'Score and performance tracking system',
      ],
      tags: ['HTML', 'Python', 'Pandas', 'NumPy', 'NLP Techniques'],
      //github: '#',
      //demo: '#'
    },
    {
      title: 'Real vs Fake News Detection',
      desc: 'End-to-end NLP pipeline classifying news articles with 94.3% accuracy, featuring automated tokenization and lemmatization.',
      features: [
        'Automated tokenization and lemmatization processes',
        'Achieved 94.3% classification accuracy',
        'Interactive Streamlit web interface'
      ],
      tags: ['Python', 'Scikit-learn', 'NLP', 'Streamlit'],
      //github: '#',
      //demo: '#'
    },
    {
      title: 'Email Automation Chatbot',
      desc: 'Context-aware conversational agent interpreting multi-class intents across 10+ email categories to streamline responses.',
      features: [
        'Multi-class intent classification across 10+ categories',
        'Context-aware conversational interpretation',
        'Streamlines response times through automation'
      ],
      tags: ['FastAPI', 'Vertex AI', 'Python', 'GCP'],
      //github: '#',
      //demo: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const projectVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const sectionVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="section-header">
          <h2 className="section-title">Featured Creations</h2>
          <div className="section-divider"></div>
        </div>

        <motion.div
          variants={containerVariants}
          className="project-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="project-card glass"
            >
              <div className="project-details">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link-sm" aria-label="Github code">
                        <Code size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-link-sm" aria-label="Live demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-desc">{project.desc}</p>

                {project.features && (
                  <ul className="project-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <ArrowRight size={14} className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project-footer-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 3rem;
        }
        .project-card {
          border-radius: 32px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 25px 50px -12px rgba(56, 189, 248, 0.15);
        }
        .project-details { 
          padding: 3rem; 
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .project-header h3 { 
          font-size: 1.85rem; 
          font-weight: 800; 
          margin: 0;
          line-height: 1.3;
        }
        .project-links {
          display: flex;
          gap: 0.75rem;
        }
        .icon-link-sm {
          color: var(--text-secondary);
          transition: color 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }
        .icon-link-sm:hover {
          color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        .project-desc { 
          color: var(--text-secondary); 
          font-size: 1.05rem; 
          line-height: 1.7; 
          margin-bottom: 2rem; 
        }
        .project-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .project-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .feature-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .project-footer-tags { 
          display: flex; 
          gap: 0.75rem; 
          flex-wrap: wrap; 
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid var(--glass-border);
        }
        .tag {
          font-size: 0.75rem;
          color: var(--accent-primary);
          background: var(--accent-glow);
          padding: 8px 14px;
          border-radius: 8px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }
        @media (max-width: 768px) {
          .project-details { padding: 2rem; }
          .project-header h3 { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

const ArrowRight = ({ size, style, className }) => (
  <svg className={className} style={style} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default Projects;
