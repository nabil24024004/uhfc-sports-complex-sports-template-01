"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const coaches = [
  {
    name: "Rafiqul Islam",
    role: "Head Football Coach",
    image: "/coach1.png",
    experience: "15+ years experience"
  },
  {
    name: "Tanvir Ahmed",
    role: "Cricket Coordinator",
    image: "/coach1.png",
    experience: "National team player"
  },
  {
    name: "Nadia Rahman",
    role: "Badminton Trainer",
    image: "/coach1.png",
    experience: "10+ years experience"
  }
];

export default function Coaches() {
  return (
    <section id="coaches" style={{
      padding: '8rem 5%',
      background: '#080c14'
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
            EXPERT GUIDANCE
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text)'
          }}>
            Our Coaches
          </h2>
        </motion.div>

        {/* Coaches Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {coaches.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              style={{
                background: 'var(--surface)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer'
              }}
            >
              {/* Coach Image */}
              <div style={{
                position: 'relative',
                height: '320px',
                background: 'linear-gradient(135deg, rgba(168,255,0,0.1) 0%, transparent 50%)'
              }}>
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.9 }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100px',
                  background: 'linear-gradient(transparent, var(--surface))'
                }} />
              </div>

              {/* Coach Info */}
              <div style={{ padding: '1.5rem', marginTop: '-2rem', position: 'relative' }}>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.5rem'
                }}>
                  {coach.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-michroma)',
                  fontSize: '0.7rem',
                  color: 'var(--accent)',
                  marginBottom: '0.5rem'
                }}>
                  {coach.role}
                </p>
                <p style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  {coach.experience}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
