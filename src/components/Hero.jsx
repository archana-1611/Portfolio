import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Globe, Mail } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LeetcodeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.187c-.467-.467-.59-.98-.59-1.539 0-.558.123-1.072.59-1.54l4.332-4.187c.467-.467 1.111-.662 1.824-.662s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.697-2.607c-1.284-1.284-3.085-1.79-4.996-1.79s-3.712.506-4.996 1.79l-4.332 4.187c-1.284 1.284-1.79 3.085-1.79 4.996s.506 3.712 1.79 4.996l4.332 4.187c1.284 1.284 3.085 1.79 4.996 1.79 1.91 0 3.712-.506 4.995-1.79l2.698-2.606c.514-.515.496-1.366-.039-1.901-.535-.536-1.386-.554-1.9.038zm-3.528-2.568h-2.628a1.374 1.374 0 1 0 0 2.748h2.628a1.374 1.374 0 1 0 0-2.748zm6.532-1.452l-4.22-4.172c-.933-.92-2.348-.92-3.28 0-.933.919-.933 2.41 0 3.33l4.22 4.17c.932.92 2.347.92 3.28 0 .933-.92.933-2.41 0-3.328z" />
  </svg>
);
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const socials = [
    { name: 'GitHub', icon: <GithubIcon size={20} />, href: 'https://github.com/archana-1611', color: '#f0f6fc' },
    { name: 'LeetCode', icon: <LeetcodeIcon size={20} />, href: 'https://leetcode.com/u/archana16112005/', color: '#ffa116' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={20} />, href: 'https://www.linkedin.com/in/archana-j-b8963327b/', color: '#0a66c2' },
    { name: 'Mail', icon: <Mail size={20} />, href: 'mailto:archanaj16112005@gmail.com', color: '#ea4335' },
  ];

  const HoverButton = ({ children, className, href, target, rel }) => {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={className}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  };

  return (
    <section id="hero" className="hero" ref={containerRef}>
      {/* Dynamic Background Elements */}
      <div className="hero-bg-elements">
        <motion.div
          className="bg-blob blob-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="bg-blob blob-2"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container hero-container">
        <motion.div
          style={{ y: y1, opacity, scale }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge glass"
          >
            <Globe size={14} className="text-gradient" />
            <span>Available for new opportunities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-greeting"
          >
            Hi, I'm <span className="text-gradient font-bold">Archana J</span>
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-main-title"
          >
            Crafting Digital <br />
            <span className="text-gradient">Experiences</span> that Matter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-desc"
          >
            AI Engineer specializing in building exceptional digital experiences.
            Currently focused on creating accessible, human-centered products.
          </motion.p>

          <div className="hero-actions">
            <HoverButton
              href="#projects"
              className="btn-primary"
            >
              View My Work
              <ArrowRight size={18} />
            </HoverButton>

            <div className="social-links-grid">
              {socials.map((social, index) => (
                <HoverButton
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn glass"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ color: social.color }}
                  >
                    {social.icon}
                  </motion.div>
                </HoverButton>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="visual-card glass">
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="card-body">
              <code className="code-snippet">
                <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}<br />
                &nbsp;&nbsp;name: <span className="code-string">'Archana'</span>,<br />
                &nbsp;&nbsp;role: <span className="code-string">'AI Engineer'</span>,<br />
                &nbsp;&nbsp;passion: <span className="code-string">'Clean Code'</span><br />
                {'}'}
              </code>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </motion.div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 0 60px;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.2rem;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          border: 1px solid var(--glass-border);
        }

        .hero-greeting {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .hero-main-title {
          font-size: clamp(3rem, 7vw, 5rem);
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 540px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.1rem 2.2rem;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          color: white;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 10px 30px -10px var(--accent-glow);
          transition: none; /* Controlled by Framer Motion */
        }

        .social-links-grid {
          display: flex;
          gap: 1rem;
        }

        .social-icon-btn {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--text-secondary);
          transition: background 0.3s ease, border-color 0.3s ease; /* Movement controlled by Framer Motion */
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .visual-card {
          width: 100%;
          max-width: 400px;
          border-radius: 20px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .card-header {
          display: flex;
          gap: 8px;
          margin-bottom: 1.5rem;
        }

        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .code-snippet {
          font-family: 'Fira Code', monospace;
          font-size: 0.95rem;
          line-height: 1.8;
          color: #d1d5db;
        }

        .code-keyword { color: #c084fc; }
        .code-var { color: #f472b6; }
        .code-string { color: #34d399; }

        /* Background Blobs */
        .hero-bg-elements {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .bg-blob {
          position: absolute;
          filter: blur(100px);
          opacity: 0.15;
          border-radius: 50%;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: var(--accent-primary);
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: var(--accent-tertiary);
          bottom: -50px;
          left: -50px;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--text-secondary);
          border-radius: 12px;
          position: relative;
        }

        .wheel {
          width: 3px;
          height: 8px;
          background: var(--accent-primary);
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 100px;
          animation: wheelScroll 2s infinite;
        }

        @keyframes wheelScroll {
          0% { opacity: 0; transform: translate(-50%, 0); }
          50% { opacity: 1; transform: translate(-50%, 8px); }
          100% { opacity: 0; transform: translate(-50%, 16px); }
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
