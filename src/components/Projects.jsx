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
      image: '/projects/word_parkour.png',
      github: '#',
      demo: '#'
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
      image: '/projects/fake_news.png',
      github: '#',
      demo: '#'
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
      image: '/projects/email_chatbot.png',
      github: '#',
      demo: '#'
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
        viewport={{ once: true, margin: "-100px" }}
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="project-card glass"
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
                <div className="project-links-overlay">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary" aria-label="Live demo">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" aria-label="Github code">
                      <Code size={18} /> Source
                    </a>
                  )}
                </div>
              </div>

              <div className="project-details">
                <div className="project-header">
                  <h3>{project.title}</h3>
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
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          border-radius: 24px;
          overflow: hidden;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid var(--glass-border);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 25px 50px -12px rgba(56, 189, 248, 0.2);
        }
        
        .project-image-container {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }
        
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(3, 0, 20, 0.9), transparent);
          z-index: 1;
        }
        
        .project-links-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          z-index: 2;
          background: rgba(3, 0, 20, 0.6);
          backdrop-filter: blur(4px);
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .project-links-overlay {
          opacity: 1;
        }
        
        .btn-primary, .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .btn-primary {
          background: var(--accent-primary);
          color: #000;
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
        }
        
        .btn-primary:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .project-details { 
          padding: 2rem 2.5rem; 
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-top: -10px;
          position: relative;
          z-index: 3;
        }
        
        .project-header {
          margin-bottom: 1rem;
        }
        
        .project-header h3 { 
          font-size: 1.6rem; 
          font-weight: 700; 
          margin: 0;
          line-height: 1.3;
          color: var(--text-primary);
        }
        
        .project-desc { 
          color: var(--text-secondary); 
          font-size: 1rem; 
          line-height: 1.6; 
          margin-bottom: 1.5rem; 
        }
        
        .project-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        
        .project-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .feature-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .project-footer-tags { 
          display: flex; 
          gap: 0.6rem; 
          flex-wrap: wrap; 
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        
        .tag {
          font-size: 0.75rem;
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.1);
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 600;
          border: 1px solid rgba(56, 189, 248, 0.2);
          transition: all 0.2s ease;
        }
        
        .project-card:hover .tag {
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.3);
        }
        
        @media (max-width: 768px) {
          .project-details { padding: 1.5rem; }
          .project-header h3 { font-size: 1.4rem; }
          .project-links-overlay {
            opacity: 1;
            background: linear-gradient(to top, rgba(3,0,20,0.9) 0%, transparent 100%);
            align-items: flex-end;
            padding-bottom: 1rem;
          }
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

