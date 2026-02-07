"use client";

import { motion } from "framer-motion";
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    title: "FOOTBALL TURF",
    description: "Professional 7-a-side grass with high-intensity nighttime lighting systems.",
    image: "/583105240_122100348843122282_729855852648187775_n.jpg", // Using local asset
    accent: "#a8ff00"
  },
  {
    title: "CRICKET FIELD",
    description: "Tournament ready grounds with practice nets and pavilion facilities.",
    image: "/602365888_122113071705122282_8506030531029264780_n.jpg", // Using local asset
    accent: "#ffffff"
  },
  {
    title: "BADMINTON COURT",
    description: "Indoor spotlighting with professional flooring and climate controls.",
    image: "/617024182_122118054135122282_5926132841758560289_n.jpg", // Using local asset
    accent: "#00f2ff"
  }
];

export default function Facilities() {
  return (
    <section id="facilities" style={{ padding: '8rem 5% 10rem', background: '#080c14' }}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '4rem' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-michroma)',
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          marginBottom: 'clamp(0.75rem, 2vh, 1rem)',
          color: 'var(--text)'
        }}>
          THE PITCH FLOOR
        </h2>
        <div style={{ height: '2px', width: '100px', background: 'var(--accent)' }} />
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
        gap: 'clamp(2rem, 4vw, 2.5rem)'
      }}>
        {facilities.map((facility, index) => (
          <motion.div
            key={facility.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <FacilityCard {...facility} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
