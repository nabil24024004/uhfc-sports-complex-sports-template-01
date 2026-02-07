"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const news = [
  {
    id: 1,
    title: "Inter-School Football Tournament Success",
    excerpt: "Over 200 students participated in our annual football championship. The finals witnessed an electrifying match.",
    date: "Feb 5, 2026",
    image: "/turf2.png",
    category: "TOURNAMENT"
  },
  {
    id: 2,
    title: "New LED Lighting System Installed",
    excerpt: "Professional-grade stadium lights now illuminate our main turf, enabling crystal-clear night matches.",
    date: "Jan 28, 2026",
    image: "/turf3.png",
    category: "UPGRADE"
  },
  {
    id: 3,
    title: "Summer Cricket Camp Registration Open",
    excerpt: "Join our intensive 4-week cricket training program with former national team players.",
    date: "Jan 15, 2026",
    image: "/turf4.png",
    category: "TRAINING"
  }
];

export default function News() {
  return (
    <section id="news" style={{
      padding: '8rem 5%',
      background: '#0a0f18'
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
            STAY UPDATED
          </span>
          <h2 style={{
            fontFamily: 'var(--font-syne)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text)'
          }}>
            Latest News & Updates
          </h2>
        </motion.div>

        {/* News Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {news.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--surface)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer'
              }}
            >
              {/* News Image */}
              <div style={{
                position: 'relative',
                height: '200px'
              }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.8 }}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  padding: '0.3rem 0.8rem',
                  background: 'var(--accent)',
                  color: '#000',
                  fontFamily: 'var(--font-michroma)',
                  fontSize: '0.6rem',
                  fontWeight: 700
                }}>
                  {item.category}
                </span>
              </div>

              {/* News Content */}
              <div style={{ padding: '1.5rem' }}>
                <span style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                  display: 'block'
                }}>
                  {item.date}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.4
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}>
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
