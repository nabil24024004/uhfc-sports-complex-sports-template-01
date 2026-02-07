"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: 'The Pitch', href: '#the-pitch' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Events', href: '#events' },
  { name: 'Wall', href: '#wall' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -30% 0px" } 
    );

    navItems.forEach((item) => {
      const id = item.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 5%',
          background: 'linear-gradient(to bottom, rgba(8, 12, 20, 0.9), transparent)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Image src="/LOGO.png" alt="UHFC Logo" width={50} height={50} />
          <span style={{ 
            fontFamily: 'var(--font-michroma)', 
            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', 
            color: 'var(--accent)',
            letterSpacing: '2px'
          }}>
            UHFC TURF
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-only" style={{ gap: '2rem', fontFamily: 'var(--font-syne)', fontWeight: 600 }}>
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              style={{ 
                color: activeSection === item.href ? 'var(--accent)' : 'var(--text)', 
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => {
                if (activeSection !== item.href) {
                  e.currentTarget.style.color = 'var(--text)';
                }
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Book Button */}
        <motion.button 
          className="desktop-only"
          whileHover={{ scale: 1.05, background: 'var(--accent)', color: '#000' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToBooking}
          style={{
            padding: '0.8rem 1.5rem',
            background: 'transparent',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-michroma)',
            fontSize: '0.8rem',
            cursor: 'pointer',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        >
          BOOK A SLOT
        </motion.button>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="mobile-only"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 101
          }}
          aria-label="Toggle menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '28px' }}>
            <motion.div
              animate={mobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              style={{ width: '100%', height: '2px', background: 'var(--accent)', borderRadius: '2px' }}
            />
            <motion.div
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: '100%', height: '2px', background: 'var(--accent)', borderRadius: '2px' }}
            />
            <motion.div
              animate={mobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              style={{ width: '100%', height: '2px', background: 'var(--accent)', borderRadius: '2px' }}
            />
          </div>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '75%',
              maxWidth: '300px',
              background: 'rgba(8, 12, 20, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 100,
              padding: '6rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              borderLeft: '1px solid rgba(168, 255, 0, 0.2)',
              boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'transparent',
                border: '1px solid rgba(168, 255, 0, 0.3)',
                color: 'var(--accent)',
                width: '40px',
                height: '40px',
                borderRadius: '2px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-syne)'
              }}
            >
              ✕
            </motion.button>
            
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  color: activeSection === item.href ? 'var(--accent)' : 'var(--text)',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBooking}
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: 'var(--accent)',
                border: 'none',
                color: '#000',
                fontFamily: 'var(--font-michroma)',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderRadius: '2px'
              }}
            >
              BOOK A SLOT
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              zIndex: 99
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

