"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Karim Hossain",
    role: "Football Team Captain",
    quote: "The best turf in Dhaka! The pitch quality is exceptional and the night lighting makes evening games feel like playing in a real stadium.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sen",
    role: "Corporate Event Organizer",
    quote: "We hosted our company sports day here. The facilities were top-notch and the staff was incredibly helpful. Highly recommend!",
    rating: 5
  },
  {
    id: 3,
    name: "Mahfuz Rahman",
    role: "Cricket Enthusiast",
    quote: "Finally a proper cricket ground with quality nets and professional coaching. My game has improved significantly since joining.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: '8rem 5%',
      background: 'linear-gradient(180deg, #080c14 0%, #0a0f18 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            fontFamily: 'var(--font-michroma)',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            letterSpacing: '0.3em',
            marginBottom: '1rem',
            display: 'block'
          }}>
            WHAT THEY SAY
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text)'
          }}>
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5, borderColor: 'rgba(168, 255, 0, 0.3)' }}
              style={{
                background: 'var(--surface)',
                borderRadius: '8px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                transition: 'border-color 0.3s ease'
              }}
            >
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '2rem',
                fontSize: '3rem',
                color: 'var(--accent)',
                opacity: 0.3,
                fontFamily: 'Georgia, serif'
              }}>
                &ldquo;
              </div>

              {/* Stars */}
              <div style={{ marginBottom: '1rem' }}>
                {[...Array(item.rating)].map((_, idx) => (
                  <span key={idx} style={{ color: 'var(--accent)', fontSize: '1rem' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '1rem',
                color: 'var(--text)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.05)',
                paddingTop: '1rem'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.25rem'
                }}>
                  {item.name}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-michroma)',
                  fontSize: '0.7rem',
                  color: 'var(--accent)'
                }}>
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
