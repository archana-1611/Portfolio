import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Settings, Code, Cpu, Globe,
  Brain, Network, MessageSquare, Sparkles, BarChart, Layers, Users,
  PieChart, Waves, Box
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      delay: 0,
      skills: [
        { name: 'Python', iconClass: 'devicon-python-plain colored' },
        { name: 'Java', iconClass: 'devicon-java-plain colored' },
        { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
        { name: 'HTML', iconClass: 'devicon-html5-plain colored' },
        { name: 'CSS', iconClass: 'devicon-css3-plain colored' },
        { name: 'SQL', iconClass: 'devicon-azuresqldatabase-plain colored' }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe size={24} />,
      delay: 0.1,
      skills: [
        { name: 'React', iconClass: 'devicon-react-original colored' },
        { name: 'Redux', iconClass: 'devicon-redux-original colored' },
        { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
        { name: 'Express.js', iconClass: 'devicon-express-original colored' },
        { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain colored' },
        { name: 'React Native', iconClass: 'devicon-react-original colored' }
      ]
    },
    {
      title: 'Data Science & AI',
      icon: <Cpu size={24} />,
      delay: 0.2,
      skills: [
        { name: 'Pandas', iconClass: 'devicon-pandas-original colored' },
        { name: 'NumPy', iconClass: 'devicon-numpy-original colored' },
        { name: 'Matplotlib', iconClass: 'lucide-piechart' },
        { name: 'Seaborn', iconClass: 'lucide-waves' },
        { name: 'Scikit-learn', iconClass: 'lucide-network' },
        { name: 'TensorFlow', iconClass: 'devicon-tensorflow-original colored' },
        { name: 'PyTorch', iconClass: 'devicon-pytorch-original colored' },
        { name: 'NLP', iconClass: 'lucide-messagesquare' },
        { name: 'Gemini API', iconClass: 'lucide-sparkles' }
      ]
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      delay: 0.3,
      skills: [
        { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
        { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' }
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: <Settings size={24} />,
      delay: 0.4,
      skills: [
        { name: 'Git', iconClass: 'devicon-git-plain colored' },
        { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
        { name: 'Postman', iconClass: 'lucide-box' },
        { name: 'FastAPI', iconClass: 'devicon-fastapi-plain colored' },
        { name: 'Streamlit', iconClass: 'lucide-layers' },
        { name: 'GCP', iconClass: 'devicon-googlecloud-plain colored' },
      ]
    }
  ];

  const renderLucide = (iconClass) => {
    switch (iconClass) {
      case 'lucide-brain': return <Brain size={40} className="lucide-skill-icon" />;
      case 'lucide-network': return <Network size={40} className="lucide-skill-icon" />;
      case 'lucide-messagesquare': return <MessageSquare size={40} className="lucide-skill-icon" />;
      case 'lucide-sparkles': return <Sparkles size={40} className="lucide-skill-icon" />;
      case 'lucide-barchart': return <BarChart size={40} className="lucide-skill-icon" />;
      case 'lucide-layers': return <Layers size={40} className="lucide-skill-icon" />;
      case 'lucide-users': return <Users size={40} className="lucide-skill-icon" />;
      case 'lucide-piechart': return <PieChart size={40} className="lucide-skill-icon" />;
      case 'lucide-waves': return <Waves size={40} className="lucide-skill-icon" />;
      case 'lucide-box': return <Box size={40} className="lucide-skill-icon" />;
      default: return <Code size={40} className="lucide-skill-icon" />;
    }
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
        viewport={{ once: true, margin: "-100px" }}
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
                boxShadow: '0 20px 50px -15px var(--accent-glow)',
                transition: { duration: 0.2 }
              }}
              className="skill-category glass"
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skill-cubes-grid">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-cube"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="skill-icon-wrapper">
                      {skill.iconClass.startsWith('lucide-') 
                        ? renderLucide(skill.iconClass) 
                        : <i className={skill.iconClass}></i>}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <style>{`
        .skills {
          padding: 100px 0;
          position: relative;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
        }
        .skill-category {
          padding: 2.5rem;
          border-radius: 28px;
          border: 1px solid var(--glass-border);
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
          background: rgba(3, 0, 20, 0.4);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }
        .skill-category::after {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          opacity: 0.2;
          border-radius: 50%;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }
        .category-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #fff;
        }
        .category-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(123, 97, 255, 0.2), rgba(0, 198, 255, 0.1));
          color: var(--accent-primary);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(123, 97, 255, 0.3);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        
        .skill-cubes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .skill-cube {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.25rem 0.5rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.01);
        }

        .skill-cube::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center, var(--accent-glow) 0%, transparent 80%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .skill-cube:hover {
          border-color: rgba(123, 97, 255, 0.5);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px var(--accent-glow);
        }

        .skill-cube:hover::before {
          opacity: 0.8;
        }

        .skill-icon-wrapper {
          font-size: 2.8rem;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .lucide-skill-icon {
          color: var(--accent-tertiary);
          filter: drop-shadow(0 0 8px var(--accent-glow));
        }

        .skill-cube:hover .skill-icon-wrapper {
          transform: scale(1.15) translateY(-3px);
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3));
        }

        .skill-name {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          position: relative;
          z-index: 1;
          letter-spacing: 0.5px;
          opacity: 0.8;
          transition: opacity 0.3s ease, color 0.3s ease;
        }

        .skill-cube:hover .skill-name {
          opacity: 1;
          color: #fff;
        }

        @media (max-width: 968px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .skill-category { padding: 1.5rem; }
          .skill-cubes-grid {
            grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
            gap: 0.75rem;
          }
          .skill-icon-wrapper { font-size: 2.4rem; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
