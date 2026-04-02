import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Practical SQL with SQLite',
      issuer: 'Udemy',
      date: '2025',
      link: 'https://www.udemy.com/certificate/UC-ea17e013-9b99-4cab-bc61-bc9b0dcdda23/',
      icon: <Award className="cert-icon-inner" />,
    },
    {
      title: 'Master in Data Science to become a Data Scientist',
      issuer: 'Udemy',
      date: '2024',
      link: 'https://ude.my/UC-139bfd91-aa7c-4a70-94c1-8ad97529d500',
      icon: <Award className="cert-icon-inner" />,
    },
    {
      title: 'Introduction To Internet Of Things',
      issuer: 'NPTEL',
      date: '2025',
      link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs44/Course/NPTEL25CS44S24330862604350577.pdf',
      icon: <ShieldCheck className="cert-icon-inner" />,
    },

    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL',
      date: '2025',
      link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S67520019010380824.pdf',
      icon: <Award className="cert-icon-inner" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { x: 80, opacity: 0 },
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
    <section id="certifications" className="certifications">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={sectionVariants}
      >
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
        </div>

        <motion.div
          variants={containerVariants}
          className="certs-grid"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{
                x: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'var(--accent-primary)',
                transition: { duration: 0.1 }
              }}
              className="cert-card glass"
            >
              <div className="cert-top">
                <div className="cert-icon-wrapper">{cert.icon}</div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                </div>
              </div>
              <div className="cert-action">
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Verify Certificate <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .cert-card {
          padding: 2.5rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--glass-border);
          transition: all 0.4s ease;
        }
        .cert-top {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .cert-icon-wrapper {
          width: 64px;
          height: 64px;
          background: var(--accent-glow);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .cert-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          line-height: 1.25;
          font-weight: 700;
        }
        .issuer {
          color: var(--text-primary);
          font-size: 1rem;
          opacity: 0.85;
          font-weight: 500;
        }
        .date {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 0.4rem;
        }
        .verify-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--accent-primary);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.6rem 1.2rem;
          background: var(--accent-glow);
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .verify-link:hover {
          background: var(--accent-primary);
          color: var(--bg-color);
          box-shadow: 0 8px 24px -8px var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Certifications;
