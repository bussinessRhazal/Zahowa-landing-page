import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Apparaît après le hero
      const heroHeight = window.innerHeight;
      // Disparaît au-dessus de la section Cercle Fondateur
      const foundersSection = document.getElementById('founders');
      const foundersTop = foundersSection?.offsetTop || Infinity;

      const scrollY = window.scrollY;
      setVisible(scrollY > heroHeight * 0.8 && scrollY < foundersTop - 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#founders"
      className={`sticky-cta ${visible ? 'sticky-cta--visible' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
      }}
      aria-label="Rejoindre le Cercle Fondateur"
    >
      <span>Cercle Fondateur</span>
      <span className="sticky-cta__arrow" aria-hidden="true">→</span>
    </a>
  );
}
