"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/597985046_122111771229122282_2442268457843899838_n.jpg",
  "/619989414_122119378983122282_1656387333605392729_n.jpg",
  "/uhfcsportscomplex LOGO.jpg",
  "/602365888_122113071705122282_8506030531029264780_n.jpg",
  "/583105240_122100348843122282_729855852648187775_n.jpg",
  "/617024182_122118054135122282_5926132841758560289_n.jpg"
];

export default function Gallery() {
  return (
    <section id="wall" style={{ padding: '8rem 5%', background: '#080c14' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-michroma)', 
          fontSize: '2rem', 
          marginBottom: '1rem' 
        }}>
          COMMUNITY WALL
        </h2>
        <p style={{ fontFamily: 'var(--font-outfit)', color: 'var(--text-muted)' }}>
          Captured moments from the heart of the game.
        </p>
      </div>

      <div style={{
        columns: '3 300px',
        columnGap: '1.5rem',
      }}>
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{ marginBottom: '1.5rem', breakInside: 'avoid', position: 'relative' }}
          >
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              width={500} 
              height={500} 
              style={{ width: '100%', height: 'auto', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.05)' }} 
            />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(8, 12, 20, 0.4), transparent)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '1rem',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '0')}
            >
              <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.7rem', letterSpacing: '2px' }}>VIEW FULL MATCH</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
