import { RECIPES } from '../data/recipes';

export default function Recipes() {
  return (
    <section className="recipes" id="recipes">
      <div className="container">
        <header className="recipes__intro reveal">
          <div className="eyebrow recipes__eyebrow">
            <span className="eyebrow__line"></span>
            Numéro 02 · Le produit
          </div>
          <h2 className="recipes__title">
            Quatre recettes.<br />
            <em>Laquelle est la tienne ?</em>
          </h2>
          <p className="recipes__subtitle">
            Chacune inspirée du caractère d'une ville marocaine. Chacune un rituel.
          </p>
        </header>

        <div className="recipes__grid" role="list">
          {RECIPES.map((recipe) => (
            <article
              key={recipe.id}
              className="recipe-card reveal"
              role="listitem"
              style={{ '--recipe-accent': recipe.color }}
            >
              <span className="recipe-card__number">{recipe.number}</span>
              <h3 className="recipe-card__name">{recipe.name}</h3>
              <span className="recipe-card__city">{recipe.city}</span>
              <p className="recipe-card__profile">
                <strong>{recipe.profile}.</strong> {recipe.description}
              </p>

              <div className="recipe-card__spices">
                <span className="recipe-card__spices-label">Composition</span>
                <ul className="recipe-card__spice-list">
                  {recipe.spices.map((spice, idx) => (
                    <li key={idx} className={spice.isEuropean ? 'is-european' : ''}>
                      {spice.name}
                      {spice.isEuropean && <span className="recipe-card__european-dot" aria-label="Élément européen"></span>}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="recipes__legend">
          <span className="recipes__legend-dot"></span>
          Élément européen ajouté pour adapter au palais français
        </p>
      </div>
    </section>
  );
}
