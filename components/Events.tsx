"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const events = [
  {
    id: 1,
    title: "KICK-OFF CLASH 5.0",
    date: "FEB 25",
    type: "FOOTBALL",
    price: "BDT 2500 / Team",
    slots: "4 Slots Left",
    description: "5-a-side tournament with exciting cash prizes"
  },
  {
    id: 2,
    title: "SMASH MASTERS",
    date: "MAR 02",
    type: "BADMINTON",
    price: "BDT 500 / Player",
    slots: "8 Slots Left",
    description: "Singles & Doubles championship"
  }
];

export default function Events() {
  const [registering, setRegistering] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', team: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = (eventId: number) => {
    setRegistering(eventId);
    setSubmitted(false);
    setFormData({ name: '', phone: '', team: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setRegistering(null);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="events" style={{ padding: '8rem 5%', background: '#0c121d' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, rgba(168, 255, 0, 0.05) 0%, transparent 100%)',
          padding: '4rem',
          borderRadius: '2px',
          border: '1px solid rgba(168, 255, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--font-michroma)',
            fontSize: 'clamp(1.75rem, 5vw, 2rem)',
            marginBottom: 'clamp(2rem, 4vh, 3rem)',
            textAlign: 'center'
          }}>
            UPCOMING EVENTS
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', 
            gap: 'clamp(1.5rem, 3vw, 2rem)' 
          }}>
            {events.map((event) => (
              <motion.div 
                key={event.id} 
                whileHover={{ y: -5 }}
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-michroma)', 
                    color: 'var(--accent)', 
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)' 
                  }}>
                    {event.date}
                  </span>
                  <span style={{ 
                    fontFamily: 'var(--font-outfit)', 
                    fontSize: 'clamp(0.75rem, 2vw, 0.8rem)', 
                    opacity: 0.6,
                    letterSpacing: '2px'
                  }}>
                    {event.type}
                  </span>
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.4rem, 4vw, 1.6rem)' }}>{event.title}</h3>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(0.9rem, 2.2vw, 0.95rem)', opacity: 0.7 }}>{event.description}</p>
                
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 600 }}>{event.price}</p>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(0.75rem, 2vw, 0.8rem)', color: '#ff4d4d' }}>{event.slots}</p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleJoin(event.id)}
                    style={{
                      padding: '0.8rem 1.5rem',
                      background: 'var(--text)',
                      color: '#000',
                      border: 'none',
                      fontFamily: 'var(--font-michroma)',
                      fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    JOIN NOW
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(168, 255, 0, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }} />
      </motion.div>

      {/* Registration Modal */}
      <AnimatePresence>
        {registering !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}
            onClick={() => setRegistering(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--surface)',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                borderRadius: '4px',
                border: '1px solid rgba(168, 255, 0, 0.2)',
                maxWidth: '450px',
                width: '90%'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    background: 'var(--accent)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem'
                  }}>
                    ✓
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-michroma)', marginBottom: '1rem', color: 'var(--accent)' }}>
                    REGISTERED!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-outfit)', opacity: 0.7 }}>
                    We'll contact you with event details soon.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-michroma)', marginBottom: '2rem', color: 'var(--accent)' }}>
                    JOIN {events.find(e => e.id === registering)?.title}
                  </h3>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        fontFamily: 'var(--font-outfit)',
                        borderRadius: '2px'
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        fontFamily: 'var(--font-outfit)',
                        borderRadius: '2px'
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Team Name (if applicable)"
                      value={formData.team}
                      onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                      style={{
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        fontFamily: 'var(--font-outfit)',
                        borderRadius: '2px'
                      }}
                    />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button
                        type="button"
                        onClick={() => setRegistering(null)}
                        style={{
                          flex: 1,
                          padding: '1rem',
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'var(--text)',
                          fontFamily: 'var(--font-michroma)',
                          fontSize: '0.7rem',
                          cursor: 'pointer'
                        }}
                      >
                        CANCEL
                      </button>
                      <button
                        type="submit"
                        style={{
                          flex: 2,
                          padding: '1rem',
                          background: 'var(--accent)',
                          border: 'none',
                          color: '#000',
                          fontFamily: 'var(--font-michroma)',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}
                      >
                        REGISTER NOW
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
