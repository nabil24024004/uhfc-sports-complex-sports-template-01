"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

function StatCounter({ value, suffix, label }: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth easing
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <div style={{
        fontFamily: 'var(--font-syne)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 700,
        color: 'var(--accent)',
        lineHeight: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'
      }}>
        <span ref={ref}>0</span>
        <span>{suffix}</span>
      </div>
      <div style={{
        fontFamily: 'var(--font-michroma)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: '0.75rem',
        letterSpacing: '0.1em'
      }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: 12, suffix: "+", label: "YEARS OF EXCELLENCE" },
    { value: 5000, suffix: "+", label: "HAPPY MEMBERS" },
    { value: 3, suffix: "", label: "PREMIUM TURFS" },
    { value: 500, suffix: "+", label: "EVENTS HOSTED" }
  ];

  return (
    <section style={{
      padding: '4rem 5%',
      background: 'linear-gradient(180deg, #0a0f18 0%, #080c14 100%)',
      borderTop: '1px solid rgba(168, 255, 0, 0.1)',
      borderBottom: '1px solid rgba(168, 255, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
