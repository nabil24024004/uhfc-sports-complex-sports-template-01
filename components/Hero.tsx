"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="the-pitch" style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '6rem 5% 4rem',
      textAlign: 'center'
    }}>
      {/* Background Atmosphere */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: 'radial-gradient(circle at 50% 50%, rgba(168, 255, 0, 0.05) 0%, transparent 60%)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '1.2rem',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '8px',
          marginBottom: '1rem'
        }}>
          EST. 2012
        </h2>

        <h1 style={{
          fontFamily: 'var(--font-michroma)',
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          lineHeight: 1.1,
          marginBottom: '2rem',
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #ffffff 30%, #a0a0a0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          THE GREEN <br /> PITCH
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: 1.6
          }}
        >
          Experience precision, passion, and the premier turf standard. 
          Unleash your potential under the floodlights.
        </motion.p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 255, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToBooking}
            style={{
              padding: '1.2rem 2.5rem',
              background: 'var(--accent)',
              border: 'none',
              color: '#000',
              fontFamily: 'var(--font-michroma)',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.9rem',
              borderRadius: '2px'
            }}
          >
            RENT THE TURF
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToEvents}
            style={{
              padding: '1.2rem 2.5rem',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'var(--text)',
              fontFamily: 'var(--font-michroma)',
              cursor: 'pointer',
              fontSize: '0.9rem',
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}
          >
            VIEW SCHEDULE
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Visual Detail */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "circInOut" }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          right: '5%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.3
        }}
      />
    </section>
  );
}
