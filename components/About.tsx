"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const features = [
    { icon: "⚽", title: "World-Class Turf", desc: "FIFA-approved synthetic grass for premium play" },
    { icon: "🏏", title: "Full-Size Pitch", desc: "Tournament-ready cricket grounds" },
    { icon: "🏸", title: "Indoor Courts", desc: "Climate-controlled badminton facilities" },
    { icon: "💡", title: "Night Games", desc: "Professional LED floodlight systems" }
  ];

  return (
    <section id="about" style={{
      padding: 'clamp(4rem, 10vh, 8rem) 5%',
      background: '#0a0f18'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vh, 4rem)' }}
        >
          <span style={{
            fontFamily: 'var(--font-michroma)',
            fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
            color: 'var(--accent)',
            letterSpacing: '0.3em',
            marginBottom: '1rem',
            display: 'block'
          }}>
            ABOUT US
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '1.5rem'
          }}>
            Who We Are
          </h2>
          <p style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8,
            padding: '0 1rem'
          }}>
            UHFC Turf Ground is Dhaka&apos;s premier multi-sport facility, offering 
            world-class football, cricket, and badminton experiences. Since 2012, 
            we&apos;ve hosted thousands of matches and trained countless athletes.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '2rem',
          marginBottom: 'clamp(2.5rem, 5vh, 4rem)'
        }}>
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              height: 'clamp(250px, 40vw, 350px)',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(168, 255, 0, 0.1)'
            }}
          >
            <Image 
              src="/turf4.png" 
              alt="Stadium Overview" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
            }}>
              <span style={{
                fontFamily: 'var(--font-michroma)',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.7rem)',
                color: 'var(--accent)'
              }}>
                ESTABLISHED 2012
              </span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: 'relative',
              height: 'clamp(250px, 40vw, 350px)',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(168, 255, 0, 0.1)'
            }}
          >
            <Image 
              src="/turf1.png" 
              alt="Night Game" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
            }}>
              <span style={{
                fontFamily: 'var(--font-michroma)',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.7rem)',
                color: 'var(--accent)'
              }}>
                24/7 AVAILABILITY
              </span>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: '1.5rem'
        }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(168, 255, 0, 0.3)' }}
              style={{
                padding: 'clamp(1.2rem, 2vw, 1.5rem)',
                background: 'var(--surface)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                cursor: 'default',
                transition: 'border-color 0.3s ease'
              }}
            >
              <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{feature.icon}</span>
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-michroma)',
                  fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                  color: 'var(--text)',
                  marginBottom: '0.5rem'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5
                }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

