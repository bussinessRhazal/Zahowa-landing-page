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
              {/* Moitié haute : image de la ville */}
              <div
                className="recipe-card__image"
                style={{ backgroundImage: `url(${recipe.cityImage})` }}
                aria-hidden="true"
              >
                <div className="recipe-card__image-overlay"></div>
                <div className="recipe-card__image-content">
                  <span className="recipe-card__number">{recipe.number}</span>
                  <h3 className="recipe-card__name">{recipe.name}</h3>
                  <span className="recipe-card__city">{recipe.city}</span>
                </div>
              </div>

              {/* Moitié basse : contenu */}
              <div className="recipe-card__body">
                <p className="recipe-card__profile">
                  <strong>{recipe.profile}.</strong> {recipe.description}
                </p>
                <p className="recipe-card__moment">
                  <span className="recipe-card__moment-icon" aria-hidden="true">☕</span>
                  {recipe.moment}
                </p>

                <div className="recipe-card__spices">
                  <span className="recipe-card__spices-label">Composition</span>
                  <ul className="recipe-card__spice-list">
                    {recipe.spices.map((spice, idx) => (
                      <li key={idx}>{spice.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
