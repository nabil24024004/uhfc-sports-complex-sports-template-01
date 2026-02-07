"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timeSlots = [
  // Morning (1800 BDT)
  { label: "6:00-7:30 AM", type: "morning", price: 1800 },
  { label: "7:30-9:00 AM", type: "morning", price: 1800 },
  { label: "9:00-10:30 AM", type: "morning", price: 1800 },
  { label: "10:30-12:00 PM", type: "morning", price: 1800 },
  // Day (1800 BDT)
  { label: "12:00-1:30 PM", type: "day", price: 1800 },
  { label: "1:30-3:00 PM", type: "day", price: 1800 },
  { label: "3:00-4:30 PM", type: "day", price: 1800 },
  { label: "4:30-6:00 PM", type: "day", price: 1800 },
  // Night (2850 BDT)
  { label: "6:00-7:30 PM", type: "night", price: 2850 },
  { label: "7:30-9:00 PM", type: "night", price: 2850 },
  { label: "9:00-10:30 PM", type: "night", price: 2850 },
  { label: "10:30-12:00 AM", type: "night", price: 2850 },
  { label: "12:00-1:30 AM", type: "night", price: 2850 },
  { label: "1:30-3:00 AM", type: "night", price: 2850 },
  { label: "3:00-4:30 AM", type: "night", price: 2850 },
];

const venues = ["Football Turf", "Cricket Field", "Badminton Court"];

export default function Booking() {
  const [selectedVenue, setSelectedVenue] = useState("Football Turf");
  const [selectedSlot, setSelectedSlot] = useState<typeof timeSlots[0] | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    // Simulate payment redirect
    setTimeout(() => {
      alert(`Redirecting to Secure Payment Gateway...\n\nTotal Amount: BDT ${selectedSlot?.price}`);
      setIsSubmitted(false);
      setStep(1);
      setSelectedSlot(null);
      setFormData({ name: '', email: '', phone: '' });
    }, 1500);
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedSlot(null);
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitted(false);
  };

  const renderSlotGroup = (title: string, type: string) => (
    <div style={{ marginBottom: '1.5rem' }}>
      <h4 style={{ 
        fontFamily: 'var(--font-michroma)', 
        fontSize: '0.7rem', 
        marginBottom: '0.8rem', 
        opacity: 0.6,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '0.5rem'
      }}>
        {title}
      </h4>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
        gap: '0.8rem'
      }}>
        {timeSlots.filter(s => s.type === type).map((slot) => (
          <motion.button
            key={slot.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSlot(slot)}
            style={{
              padding: '0.6rem 0.2rem',
              background: selectedSlot?.label === slot.label ? 'var(--accent)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${selectedSlot?.label === slot.label ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`,
              color: selectedSlot?.label === slot.label ? '#000' : 'var(--text)',
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.7rem',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            <span>{slot.label.split(' ')[0]}</span>
            <span style={{ fontSize: '0.6rem', opacity: selectedSlot?.label === slot.label ? 0.8 : 0.5 }}>
              {slot.label.split(' ')[1]}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );

  return (
    <section id="booking" style={{ padding: '8rem 5%', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ 
              fontFamily: 'var(--font-michroma)', 
              fontSize: '2.5rem', 
              marginBottom: '1.5rem',
              color: 'var(--accent)'
            }}>
              SECURE YOUR <br /> SESSION
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-outfit)', 
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Book your preferred turf slot for football, cricket or badminton. 
              Real-time availability under the floodlights.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Professional Grade Turf', 'Floodlight Integration', 'Changing Rooms', 'Safe Parking'].map((feature) => (
                <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: '15px', height: '2px', background: 'var(--accent)' }} />
                  <span style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Venue Selector */}
            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ fontFamily: 'var(--font-michroma)', fontSize: '0.8rem', marginBottom: '1rem', opacity: 0.6 }}>SELECT VENUE</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {venues.map((venue) => (
                  <motion.button
                    key={venue}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedVenue(venue)}
                    style={{
                      padding: '0.8rem 1.2rem',
                      background: selectedVenue === venue ? 'var(--accent)' : 'transparent',
                      border: `1px solid ${selectedVenue === venue ? 'var(--accent)' : 'rgba(255,255,255,0.1)'}`,
                      color: selectedVenue === venue ? '#000' : 'var(--text)',
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {venue}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Booking Form */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             style={{
               background: 'var(--surface)',
               backdropFilter: 'blur(20px)',
               padding: '2.5rem',
               borderRadius: '4px',
               border: '1px solid rgba(255,255,255,0.05)',
               boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
             }}
          >
            {/* Date Display */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.75rem', opacity: 0.5, marginBottom: '0.3rem' }}>BOOKING FOR</p>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem' }}>{formattedDate}</p>
              </div>
              <div style={{ 
                padding: '0.5rem 1rem', 
                background: 'rgba(168, 255, 0, 0.1)', 
                border: '1px solid var(--accent)',
                borderRadius: '2px'
              }}>
                <span style={{ fontFamily: 'var(--font-michroma)', fontSize: '0.7rem', color: 'var(--accent)' }}>{selectedVenue}</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 style={{ fontFamily: 'var(--font-michroma)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>SELECT TIME SLOT</h3>
                  
                  <div style={{ marginBottom: '2rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                    {renderSlotGroup("MORNING", "morning")}
                    {renderSlotGroup("DAY", "day")}
                    {renderSlotGroup("NIGHT", "night")}
                  </div>

                  <motion.button 
                    whileHover={{ scale: selectedSlot ? 1.02 : 1 }}
                    whileTap={{ scale: selectedSlot ? 0.98 : 1 }}
                    disabled={!selectedSlot}
                    onClick={() => setStep(2)}
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      background: selectedSlot ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                      border: 'none',
                      color: selectedSlot ? '#000' : 'rgba(255,255,255,0.2)',
                      fontFamily: 'var(--font-michroma)',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      cursor: selectedSlot ? 'pointer' : 'not-allowed',
                      borderRadius: '2px'
                    }}
                  >
                    CONTINUE - BDT {selectedSlot ? selectedSlot.price : '0'}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 style={{ fontFamily: 'var(--font-michroma)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>CONFIRM BOOKING</h3>
                  
                  <div style={{ 
                    marginBottom: '1.5rem', 
                    padding: '1.2rem', 
                    background: 'rgba(255,255,255,0.02)', 
                    borderLeft: '3px solid var(--accent)',
                    borderRadius: '0 2px 2px 0'
                  }}>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.75rem', opacity: 0.6, marginBottom: '0.3rem' }}>Selected Session</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem' }}>{selectedSlot?.label}</p>
                      <p style={{ fontFamily: 'var(--font-michroma)', fontSize: '1.1rem', color: 'var(--accent)' }}>BDT {selectedSlot?.price}</p>
                    </div>
                    <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.8rem', opacity: 0.7, marginTop: '0.3rem' }}>{selectedVenue}</p>
                  </div>

                  <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
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
                      placeholder="Phone Number *" 
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
                      type="email" 
                      placeholder="Email (optional)" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        fontFamily: 'var(--font-outfit)',
                        borderRadius: '2px'
                      }} 
                    />

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                      <motion.button 
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetBooking}
                        style={{
                          flex: 1,
                          padding: '1rem',
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'var(--text)',
                          fontFamily: 'var(--font-michroma)',
                          fontSize: '0.7rem',
                          cursor: 'pointer',
                          borderRadius: '2px'
                        }}
                      >
                        GO BACK
                      </motion.button>
                      <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(168, 255, 0, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitted}
                        style={{
                          flex: 2,
                          padding: '1rem',
                          background: isSubmitted ? 'rgba(168, 255, 0, 0.5)' : 'var(--accent)',
                          border: 'none',
                          color: '#000',
                          fontFamily: 'var(--font-michroma)',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          cursor: isSubmitted ? 'wait' : 'pointer',
                          borderRadius: '2px'
                        }}
                      >
                        {isSubmitted ? 'PROCESSING...' : `PAY BDT ${selectedSlot?.price} NOW`}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
