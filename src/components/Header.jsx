import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll-spy logic
    const sections = ['hero', 'about', 'experience', 'skills', 'certifications', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed-header ${isScrolled ? 'glass is-scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo heading-font">
          <span className="text-gradient">ARCHANA J.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1) || (activeSection === 'hero' && link.href === '#');
              return (
                <li key={link.name} style={{ position: 'relative' }}>
                  <a 
                    href={link.href} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSection(link.href.substring(1))}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="nav-underline"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav overlay */}
        {isMenuOpen && (
          <div className="mobile-nav-overlay glass">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <style>{`
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }
        .is-scrolled {
          padding: 1rem 0;
          background: rgba(3, 0, 20, 0.85) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 2px;
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.85rem;
          margin-left: 2.5rem;
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: var(--transition-smooth);
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-link.active {
          opacity: 1;
          color: var(--accent-primary);
        }
        .nav-link:hover {
          opacity: 1;
          color: var(--accent-primary);
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          box-shadow: 0 0 15px var(--accent-glow);
          z-index: -1;
        }
        .nav-list {
          display: flex;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 968px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: block; }
          .mobile-nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
          .mobile-nav-list {
            text-align: center;
          }
          .mobile-nav-list li {
            margin: 2rem 0;
            font-size: 1.5rem;
            font-family: var(--font-heading);
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
