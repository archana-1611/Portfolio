import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="about">
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-150px" }}
        variants={sectionVariants}
      >
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div 
            className="about-bio glass"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm an AI/Data Science undergraduate with a passion for building intelligent, production-ready systems. With a strong foundation in machine learning and a drive for problem-solving, I enjoy the process of turning complex data challenges into intuitive, high-impact AI solutions.
            </motion.p>
            <motion.p 
              style={{ marginTop: '1.5rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              My expertise spans modern technologies like Python, Machine Learning, NLP, LangChain, and Google Gemini. Having delivered production systems at The Hindu, I believe in continuous learning and always strive to stay at the forefront of the ever-evolving AI landscape.
            </motion.p>
          </div>
        </div>
      </motion.div>
      <style>{`
        .about-bio {
          padding: 3rem;
          border-radius: 24px;
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
};

export default About;
