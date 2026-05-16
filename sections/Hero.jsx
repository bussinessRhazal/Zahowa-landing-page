import SteamAnimation from '../components/SteamAnimation';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient"></div>
        <picture className="hero__bg-image">
          <source
            media="(min-width: 1024px)"
            srcSet={`${import.meta.env.BASE_URL}images/hero-coffee.webp`}
          />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-coffee.webp`}
            alt="Tasse de café épicé fumante avec épices traditionnelles"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
        <div className="hero__bg-overlay"></div>
      </div>

      {/* Vapeur animée SVG — positionnée au-dessus de la tasse */}
      <div className="hero__steam" aria-hidden="true">
        <SteamAnimation />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="eyebrow hero__eyebrow">
            <span className="eyebrow__line"></span>
            Lancement bientôt
          </div>

          <h1 className="hero__title">
            Le café<br />
            <em>épicé,</em><br />
            comme tu ne l'as<br />
            jamais bu.
          </h1>

          <p className="hero__subtitle">
            Pour qui refuse le café sans âme.
          </p>

          <div className="hero__ctas">
            <a href="#founders" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('founders')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Rejoindre le Cercle Fondateur
              <span className="btn-primary__arrow" aria-hidden="true">→</span>
            </a>
            <a href="#story" className="btn-ghost" onClick={(e) => {
              e.preventDefault();
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Découvrir l'histoire
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Défiler</span>
        <span className="hero__scroll-line"></span>
      </div>
    </section>
  );
}
