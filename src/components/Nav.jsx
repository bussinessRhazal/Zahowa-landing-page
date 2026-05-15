import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Navigation principale">
      <div className="container nav__inner">
        <a href="#" className="nav__logo" aria-label="Zahowa - Accueil" onClick={(e) => scrollToSection(e, 'top')}>
          <img src="/images/zahowa-logo.jpg" alt="Logo Zahowa" className="nav__logo-img" />
          <span className="nav__logo-text">ZAHOWA</span>
        </a>

        <div className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
          <a href="#story" onClick={(e) => scrollToSection(e, 'story')}>L'Histoire</a>
          <a href="#recipes" onClick={(e) => scrollToSection(e, 'recipes')}>Les Recettes</a>
          <a href="#pillars" onClick={(e) => scrollToSection(e, 'pillars')}>La Méthode</a>
          <a href="#founders" className="nav__cta" onClick={(e) => scrollToSection(e, 'founders')}>
            Cercle Fondateur
          </a>
        </div>

        <button
          className={`nav__burger ${mobileOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
