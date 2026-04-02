import React from 'react';
import { motion } from 'framer-motion';
import { Send, Globe, Code, Share2, Terminal } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-150px" }}
        variants={containerVariants}
      >
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid glass">
          <div className="contact-info">
            <h2 className="heading-font">Let's Build <br /> <span className="text-gradient">Something Great</span></h2>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="social-links">
               <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://github.com/Archana-2005" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><Code /></motion.a>
               <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://leetcode.com/u/Archana-2005/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode"><Terminal /></motion.a>
               <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><Globe /></motion.a>
               <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" target="_blank" rel="noopener noreferrer" className="social-icon" title="Share"><Share2 /></motion.a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Archana J" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="archana@example.com" className="glass-input" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your vision..." className="glass-input" rows="4"></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn-primary submit-btn"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px var(--accent-glow)' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <Send size={18} style={{ marginLeft: '8px' }} />
            </motion.button>
          </form>
        </div>
      </motion.div>
      <style>{`
        .contact { padding-bottom: 150px; }
        .contact-grid {
          padding: 5rem;
          border-radius: 40px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.01);
        }
        .contact-info h2 { font-size: 3.5rem; margin-bottom: 2rem; line-height: 1.1; font-weight: 800; }
        .contact-info p { color: var(--text-secondary); font-size: 1.25rem; line-height: 1.6; }
        .social-links { display: flex; gap: 1.5rem; margin-top: 4rem; }
        .social-icon { 
          width: 56px; height: 56px; 
          border-radius: 14px; border: 1px solid var(--glass-border);
          display: flex; align-items: center; justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          transition: var(--transition-smooth);
        }
        .social-icon:hover { 
          background: var(--accent-primary); 
          color: var(--bg-color); 
          border-color: var(--accent-primary);
        }
        .contact-form { display: flex; flex-direction: column; gap: 2rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.75rem; }
        .form-group label { font-size: 0.9rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; }
        .glass-input {
          padding: 1.2rem;
          border-radius: 16px;
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.03);
          color: white;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
          font-size: 1rem;
        }
        .glass-input:focus {
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 15px var(--accent-glow);
        }
        .submit-btn { 
          width: 100%; 
          justify-content: center; 
          margin-top: 1.5rem; 
          padding: 1.2rem;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: var(--bg-color);
          font-weight: 800;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr; padding: 3rem; gap: 3rem; }
          .contact-info h2 { font-size: 2.8rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
