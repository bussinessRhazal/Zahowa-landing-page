export default function Story() {
  return (
    <section className="story" id="story">
      <div className="container">
        <div className="story__grid">
          <aside className="story__number" aria-hidden="true">
            <div className="eyebrow">
              <span className="eyebrow__line"></span>
              Numéro 01
            </div>
            <div className="section-number">01</div>
          </aside>

          <div className="story__content reveal">
            <h2 className="story__title">
              Une odeur,<br />
              <em>une mémoire,</em><br />
              un projet.
            </h2>

            <p className="story__text story__text--lead">
              J'avais huit ans. Je rentrais de l'école et, avant même d'ouvrir la porte, l'odeur me parvenait — le café tout chaud mêlé aux épices marocaines. Je savais alors : on a des invités. À Fès, le café n'est pas une boisson. C'est un geste d'accueil, un acte de soin, une manière de dire <em>tu comptes.</em>
            </p>

            <p className="story__text">
              Les années ont passé. J'ai quitté le Maroc. Mais à chaque retour à Fès, je passais par la médina pour rapporter ce café épicé. Pour le ramener chez moi, en France. Pour l'offrir.
            </p>

            <blockquote className="story__quote">
              <p>« Un jour, je me suis dit : et si je le créais ? »</p>
              <cite className="story__signature">Abdelilah — Fondateur</cite>
            </blockquote>

            <p className="story__text">
              Zahowa est né de cette idée — partager un rituel qui transforme le quotidien en quelque chose de mémorable. Pas un café aromatisé. Un café <em>épicé,</em> formulé avec précision, infusé avec patience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
