"use client";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'Pitch Floor', href: '#facilities' },
    { name: 'Book Rental', href: '#booking' },
    { name: 'Tournaments', href: '#events' },
    { name: 'Gallery', href: '#wall' }
  ];

  return (
    <footer style={{
      padding: '6rem 5% 3rem',
      background: '#04080e',
      borderTop: '1px solid rgba(168, 255, 0, 0.1)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '4rem',
        marginBottom: '4rem'
      }}>
        <div>
          <h4 style={{ fontFamily: 'var(--font-michroma)', color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1rem' }}>UHFC TURF</h4>
          <p style={{ fontFamily: 'var(--font-outfit)', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
            Elevating the local sports experience since 2012. 
            Precision turf. Premium lighting. Passionate community.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-syne)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>NAVIGATION</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontFamily: 'var(--font-outfit)', fontSize: '0.85rem' }}>
            {footerLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ 
                  color: 'var(--text-muted)', 
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-syne)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>CONTACT</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontFamily: 'var(--font-outfit)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <a 
              href="tel:+8801707285999" 
              style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.2rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              01707-285999
            </a>
            <a 
              href="mailto:uhfcsportscomplex@gmail.com" 
              style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              uhfcsportscomplex@gmail.com
            </a>
            <span>Dharmik para, wbada road, konapara, Dhaka</span>
          </div>
        </div>
      </div>

      <div style={{
        paddingTop: '3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--font-outfit)',
        fontSize: '0.75rem',
        color: 'rgba(255,255,255,0.3)',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <span>© 2026 UHFC TURF GROUND. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED FOR THE PASSIONATE.</span>
      </div>
    </footer>
  );
}
