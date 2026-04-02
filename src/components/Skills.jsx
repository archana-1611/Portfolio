import React from 'react';
import { motion } from 'framer-motion';
import { Database, Settings, Code, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'Java', 'SQL', 'React Native', 'JavaScript'],
      delay: 0,
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu size={24} />,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Gemini API', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      delay: 0.1,
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
      delay: 0.2,
    },
    {
      title: 'Cloud & Tools',
      icon: <Settings size={24} />,
      skills: ['GCP', 'Docker', 'Git/GitHub', 'Streamlit', 'FastAPI', 'Agile/Scrum'],
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
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
    <section id="skills" className="skills">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-divider"></div>
        </div>

        <motion.div
          variants={containerVariants}
          className="skills-grid"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                borderColor: 'var(--accent-primary)',
                boxShadow: '0 20px 40px -20px var(--accent-glow)',
                transition: { duration: 0.1 } // Snappy hover enter/exit
              }}
              className="skill-category glass"
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-primary)', color: 'var(--bg-color)' }}
                    transition={{ duration: 0.1 }} // Snappy tag hover
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .skill-category {
          padding: 3rem;
          border-radius: 28px;
          border: 1px solid var(--glass-border);
          transition: border-color 0.2s ease, background 0.2s ease;
          background: rgba(255, 255, 255, 0.02);
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .category-icon {
          width: 54px;
          height: 54px;
          background: var(--accent-glow);
          color: var(--accent-primary);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 16px -4px var(--accent-glow);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-tag {
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          font-size: 0.95rem;
          color: var(--text-secondary);
          border: 1px solid var(--glass-border);
          cursor: default;
        }
        @media (max-width: 768px) {
          .skill-category { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
