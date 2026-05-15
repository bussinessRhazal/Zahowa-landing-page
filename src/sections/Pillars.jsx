import { PILLARS } from '../data/recipes';

const ICONS = {
  monument: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 15 L18 4 L30 15" />
      <path d="M9 13 L9 30 L27 30 L27 13" />
      <path d="M14 30 L14 20 L22 20 L22 30" />
      <circle cx="18" cy="9" r="0.8" fill="currentColor" />
    </svg>
  ),
  precision: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="13" />
      <path d="M18 10 L18 18 L23 21" />
      <path d="M18 5 L18 7 M18 29 L18 31 M5 18 L7 18 M29 18 L31 18" />
      <circle cx="18" cy="18" r="1.5" fill="currentColor" />
    </svg>
  ),
  tea: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 14 L27 14 L25 26 L11 26 Z" />
      <path d="M13 9 C13 6, 15 6, 15 9" />
      <path d="M18 9 C18 6, 20 6, 20 9" />
      <path d="M23 9 C23 6, 25 6, 25 9" />
      <path d="M11 26 L9 32 L27 32 L25 26" />
    </svg>
  )
};

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="container">
        <header className="pillars__intro reveal">
          <div className="eyebrow pillars__eyebrow">
            <span className="eyebrow__line"></span>
            Numéro 03 · La méthode
          </div>
          <h2 className="pillars__title">
            Ce qui rend Zahowa <em>différente.</em>
          </h2>
        </header>

        <div className="pillars__grid">
          {PILLARS.map((pillar) => (
            <article key={pillar.id} className="pillar reveal">
              <div className="pillar__icon" aria-hidden="true">
                {ICONS[pillar.iconType]}
              </div>
              <h3 className="pillar__title">{pillar.title}</h3>
              <p className="pillar__text">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
