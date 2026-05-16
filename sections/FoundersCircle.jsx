import { SITE_CONFIG } from '../data/siteConfig';
import FoundersForm from '../components/FoundersForm';

export default function FoundersCircle() {
  const { totalSeats, seatsTaken, benefits } = SITE_CONFIG.founderCircle;
  const seatsRemaining = totalSeats - seatsTaken;

  return (
    <section className="founders" id="founders">
      <div className="founders__decor" aria-hidden="true"></div>
      <div className="container">
        <div className="founders__inner">
          <div className="founders__content reveal">
            <div className="eyebrow founders__eyebrow">
              <span className="eyebrow__line"></span>
              Numéro 04 · L'invitation
            </div>
            <h2 className="founders__title">
              Cercle<br />
              <em>Fondateur</em>
            </h2>
            <div className="founders__counter" role="status" aria-live="polite">
              <span className="founders__counter-number">{seatsRemaining}</span>
              <span className="founders__counter-text">places restantes · sur {totalSeats}</span>
            </div>
            <p className="founders__text">
              Les 100 premières personnes à rejoindre Zahowa co-construisent le produit et bénéficient d'avantages fondateurs permanents.
            </p>
            <ul className="founders__benefits">
              {benefits.map((benefit, idx) => (
                <li key={idx}>
                  <span className="founders__benefits-mark" aria-hidden="true">✦</span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <span> — {benefit.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="founders__form-wrapper reveal">
            <FoundersForm />
          </div>
        </div>
      </div>
    </section>
  );
}
