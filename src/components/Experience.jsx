import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Machine Learning Intern',
      company: 'The Hindu',
      period: 'Aug 2025 – Nov 2025',
      location: 'Chennai, Tamil Nadu',
      description: [
        'Built Fake News Detection System (Logistic Regression, Random Forest, Naive Bayes); achieved 94.3% accuracy and F1-score 0.93 on 10,000+ articles.',
        'Developed NLP Email Automation Chatbot with intent recognition across 10+ categories; cut response latency by 74% and manual handling by 60%.',
        'Designed English Language Learning Game with gamified quizzes and adaptive content; boosted session engagement by 45%.',
        'Delivered across 8 Agile sprints; maintained Git/GitHub codebase with zero critical bugs in production across all 3 systems.'
      ]
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="experience" className="experience relative">
      <div className="bg-glow absolute top-1/2 left-1/4 w-96 h-96 rounded-full mix-blend-screen opacity-20 animate-pulse pointer-events-none" style={{ filter: "blur(100px)", background: "var(--accent-glow)" }}></div>

      <motion.div
        className="container relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <div className="section-divider"></div>
        </div>

        <div className="experience-showcase mt-16 flex justify-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="premium-exp-card"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="card-glass-layer"></div>

              <div className="exp-card-inner">
                <div className="exp-card-header flex justify-between items-start flex-wrap gap-4">
                  <div className="role-info">
                    <motion.div
                      className="badge-glow mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Sparkles size={16} className="text-accent" />
                      <span>Featured Role</span>
                    </motion.div>
                    <h3 className="role-title">
                      {exp.role}
                    </h3>
                    <div className="company-info flex items-center gap-3 font-semibold text-accent mb-4">
                      <Briefcase size={22} />
                      <span className="relative text-xl">
                        {exp.company}
                        <span className="absolute -right-3 top-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="meta-info flex flex-col items-end gap-2 text-secondary">
                    <div className="meta-tag glass">
                      <Calendar size={16} className="text-accent" />
                      {exp.period}
                    </div>
                    <div className="meta-tag glass">
                      <MapPin size={16} className="text-accent" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="divider-glow my-8"></div>

                <div className="exp-card-body">
                  <ul className="impact-list">
                    {exp.description.map((point, i) => (
                      <motion.li
                        key={i}
                        className="impact-item flex gap-4 items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1), type: "spring", stiffness: 100 }}
                        whileHover={{ x: 10, color: "var(--text-primary)" }}
                      >
                        <div className="bullet-container mt-1">
                          <div className="bullet-icon">
                            <ArrowRight size={16} className="text-accent" />
                          </div>
                        </div>
                        <p className="impact-text">{point}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <style>{`
        .experience {
          padding-top: 8rem;
          padding-bottom: 5rem;
        }
        .mt-16 { margin-top: 4rem; }
        .mb-4 { margin-bottom: 1rem; }
        .my-8 { margin-top: 2.5rem; margin-bottom: 2.5rem; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }

        .premium-exp-card {
          width: 100%;
          max-width: 950px;
          position: relative;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.5),
                      inset 0 1px 0 rgba(255, 255, 255, 0.15);
          transition: border-color 0.4s ease;
          background: rgba(15, 23, 42, 0.4);
        }

        .premium-exp-card:hover { border-color: var(--accent-primary); }

        .card-glass-layer {
          position: absolute;
          inset: 0;
          border-radius: 32px;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
          z-index: -1;
        }

        .exp-card-inner {
          padding: 3.5rem;
        }

        .role-title {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: white;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .text-xl { font-size: 1.25rem; }

        .badge-glow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.2rem;
          border-radius: 100px;
          background: var(--accent-glow);
          border: 1px solid var(--accent-primary);
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          box-shadow: 0 0 20px var(--accent-glow);
        }

        .text-accent { color: var(--accent-primary); }
        .bg-accent-primary { background-color: var(--accent-primary); }

        .meta-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .divider-glow {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
          opacity: 0.4;
          box-shadow: 0 0 10px var(--accent-primary);
        }

        .impact-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .impact-item {
          color: var(--text-secondary);
          cursor: default;
        }

        .impact-text {
          font-size: 1.1rem;
          line-height: 1.7;
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }

        .impact-item:hover .impact-text { opacity: 1; text-shadow: 0 0px 20px rgba(255, 255, 255, 0.1); }

        .bullet-container {
          padding-top: 0.35rem;
        }

        .bullet-icon {
          width: 30px;
          height: 30px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .impact-item:hover .bullet-icon {
          background: var(--accent-glow);
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-glow);
          transform: scale(1.15) rotate(-15deg);
        }

        /* Helpers */
        .flex { display: flex; }
        .flex-col { display: flex; flex-direction: column; }
        .justify-between { justify-content: space-between; }
        .items-start { align-items: flex-start; }
        .items-center { align-items: center; }
        .items-end { align-items: flex-end; }
        .justify-center { justify-content: center; }
        .flex-wrap { flex-wrap: wrap; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .-right-3 { right: -0.75rem; }
        .top-1 { top: 0.25rem; }
        .h-2 { height: 0.5rem; }
        .w-2 { width: 0.5rem; }
        .inline-flex { display: inline-flex; }
        .opacity-75 { opacity: 0.75; }
        .rounded-full { border-radius: 9999px; }
        .pointer-events-none { pointer-events: none; }

        @keyframes ping {
          75%, 100% { transform: scale(3); opacity: 0; }
        }
        .animate-ping { animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.35; } }

        @media (max-width: 768px) {
          .exp-card-inner { padding: 2rem; }
          .role-title { font-size: 1.8rem; }
          .impact-text { font-size: 1rem; }
          .meta-info { flex-direction: row; flex-wrap: wrap; align-items: center; margin-top: 1rem; }
          .premium-exp-card { box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        }
      `}</style>
    </section>
  );
};

export default Experience;
