"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: 'The Pitch', href: '#the-pitch' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Events', href: '#events' },
  { name: 'Wall', href: '#wall' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-10% 0px -40% 0px" } 
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
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
          fontSize: '1.2rem', 
          color: 'var(--accent)',
          letterSpacing: '2px'
        }}>
          UHFC TURF
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-syne)', fontWeight: 600 }}>
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

      <motion.button 
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
    </motion.nav>
  );
}
