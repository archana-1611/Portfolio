import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Real vs Fake News Detection',
      desc: 'End-to-end NLP pipeline classifying news articles with 94.3% accuracy, featuring automated tokenization and lemmatization.',
      tags: ['Python', 'Scikit-learn', 'NLP', 'Streamlit'],
      image: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?auto=format&fit=crop&q=80&w=2340',
    },
    {
      title: 'Email Automation Chatbot',
      desc: 'Context-aware conversational agent interpreting multi-class intents across 10+ email categories to streamline responses.',
      tags: ['FastAPI', 'Vertex AI', 'Python', 'GCP'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2340',
    },
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
              whileHover={{ y: -15, transition: { duration: 0.1 } }}
              className="project-card glass"
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="overlay-links"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer" className="icon-link"><Code size={22} /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="icon-link"><ExternalLink size={22} /></a>
                  </motion.div>
                </div>
              </div>
              <div className="project-details">
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-more"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.1 }}
                  >
                    Learn more <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3rem;
        }
        .project-card {
          border-radius: 32px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .project-card:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 25px 50px -12px rgba(56, 189, 248, 0.2);
        }
        .project-image-container {
          height: 240px;
          position: relative;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .project-card:hover .project-image { transform: scale(1.1); }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(3, 0, 20, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .project-card:hover .project-overlay { opacity: 1; }
        .overlay-links { display: flex; gap: 1.5rem; }
        .icon-link {
          width: 48px;
          height: 48px;
          background: white;
          color: black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .icon-link:hover { transform: scale(1.1) rotate(5deg); }
        .project-details { padding: 2.5rem; }
        .project-tags { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .tag {
          font-size: 0.7rem;
          color: var(--accent-primary);
          background: var(--accent-glow);
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .project-details h3 { font-size: 1.75rem; margin-bottom: 1rem; font-weight: 800; }
        .project-details p { color: var(--text-secondary); font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem; }
        .project-footer { border-top: 1px solid var(--glass-border); padding-top: 1.5rem; }
        .learn-more { 
          color: var(--text-primary); 
          font-weight: 600; 
          font-size: 0.9rem; 
          display: flex; 
          align-items: center; 
          opacity: 0.8;
        }
        .learn-more:hover { opacity: 1; color: var(--accent-primary); }
      `}</style>
    </section>
  );
};

const ArrowRight = ({ size, style }) => (
  <svg style={style} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default Projects;
