"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
  accent: string;
}

export default function FacilityCard({ title, description, image, accent }: FacilityCardProps) {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      style={{
        position: 'relative',
        height: '480px',
        width: '100%',
        background: 'var(--surface)',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ height: '50%', position: 'relative', flexShrink: 0 }}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover', opacity: 0.7 }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(to top, var(--background), transparent)'
        }} />
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ 
          display: 'inline-block',
          padding: '0.3rem 0.8rem',
          background: `rgba(${accent === '#a8ff00' ? '168, 255, 0' : accent === '#ffffff' ? '255, 255, 255' : '0, 242, 255'}, 0.1)`,
          color: accent,
          fontSize: '0.7rem',
          fontFamily: 'var(--font-michroma)',
          marginBottom: '0.8rem',
          border: `1px solid ${accent}`,
          width: 'fit-content'
        }}>
          PREMIER
        </span>
        <h3 style={{ 
          fontFamily: 'var(--font-michroma)', 
          fontSize: '1.1rem', 
          marginBottom: '0.5rem' 
        }}>
          {title}
        </h3>
        <p style={{ 
          fontFamily: 'var(--font-outfit)', 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          flex: 1
        }}>
          {description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02, background: accent, color: '#000' }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToBooking}
          style={{
            width: '100%',
            padding: '0.8rem',
            background: 'transparent',
            border: `1px solid ${accent}`,
            color: accent,
            fontFamily: 'var(--font-michroma)',
            fontSize: '0.7rem',
            cursor: 'pointer',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        >
          BOOK THIS VENUE
        </motion.button>
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '2px',
        background: `linear-gradient(to bottom, transparent, ${accent}, transparent)`,
        opacity: 0.5
      }} />
    </motion.div>
  );
}
