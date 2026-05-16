import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG, FORM_OPTIONS } from '../data/siteConfig';

export default function FoundersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ mode: 'onTouched' });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [step, setStep] = useState(1);

  const onSubmit = async (data) => {
    try {
      const moments = Array.isArray(data.moments)
        ? data.moments.join(', ')
        : (data.moments || '');

      const formData = new FormData();
      Object.entries({ ...data, moments }).forEach(([key, value]) => {
        formData.append(key, value || '');
      });
      formData.append('_subject', `🌟 Nouveau membre Cercle Fondateur — ${data.prenom}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const response = await fetch(SITE_CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Response not ok');
      }
    } catch (error) {
      console.error('Form error:', error);
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="founders-form founders-form--success">
        <div className="founders-form__success">
          <div className="founders-form__success-icon" aria-hidden="true">✦</div>
          <h3 className="founders-form__success-title">Bienvenue dans le Cercle.</h3>
          <p className="founders-form__success-text">
            Tu es désormais l'un·e des 100 fondateurs·rices de Zahowa.<br />
            Tu recevras un email de confirmation dans quelques minutes.
          </p>
          <p className="founders-form__success-signature">— Abdelilah, Fès</p>
        </div>
      </div>
    );
  }

  return (
    <div className="founders-form">
      <header className="founders-form__header">
        <h3 className="founders-form__title">Rejoindre le Cercle</h3>
        <p className="founders-form__subtitle">Quelques questions pour façonner Zahowa avec toi.</p>
        <div className="founders-form__steps" aria-hidden="true">
          <span className={`founders-form__step ${step >= 1 ? 'is-active' : ''}`}>1</span>
          <span className="founders-form__step-line"></span>
          <span className={`founders-form__step ${step >= 2 ? 'is-active' : ''}`}>2</span>
          <span className="founders-form__step-line"></span>
          <span className={`founders-form__step ${step >= 3 ? 'is-active' : ''}`}>3</span>
        </div>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* ÉTAPE 1 */}
        {step === 1 && (
          <div className="founders-form__step-content">
            <p className="founders-form__step-label">Étape 1 sur 3 · Faisons connaissance</p>
            <div className="form-group">
              <label htmlFor="prenom" className="form-label">Prénom *</label>
              <input type="text" id="prenom"
                className={`form-input ${errors.prenom ? 'has-error' : ''}`}
                placeholder="Comment puis-je t'appeler ?"
                autoComplete="given-name"
                {...register('prenom', { required: 'Ton prénom est requis', minLength: { value: 2, message: 'Minimum 2 caractères' } })}
              />
              {errors.prenom && <span className="form-error">{errors.prenom.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input type="email" id="email"
                className={`form-input ${errors.email ? 'has-error' : ''}`}
                placeholder="ton@email.com"
                autoComplete="email"
                {...register('email', { required: 'Ton email est requis', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' } })}
              />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Tranche d'âge *</label>
                <select className={`form-select ${errors.age ? 'has-error' : ''}`}
                  {...register('age', { required: 'Sélectionne ta tranche d\'âge' })} defaultValue="">
                  <option value="" disabled>Choisir...</option>
                  {FORM_OPTIONS.ageRanges.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.age && <span className="form-error">{errors.age.message}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Genre *</label>
                <select className={`form-select ${errors.genre ? 'has-error' : ''}`}
                  {...register('genre', { required: 'Sélectionne ton genre' })} defaultValue="">
                  <option value="" disabled>Choisir...</option>
                  {FORM_OPTIONS.genders.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.genre && <span className="form-error">{errors.genre.message}</span>}
              </div>
            </div>
            <div className="founders-form__actions">
              <button type="button" className="btn-primary btn-primary--full"
                onClick={async () => {
                  const fields = ['prenom', 'email', 'age', 'genre'];
                  const isValid = fields.every(f => {
                    const el = document.querySelector(`[name="${f}"]`);
                    return el && el.value && el.value !== '';
                  });
                  if (isValid) setStep(2);
                  else handleSubmit(() => {})();
                }}>
                Continuer <span className="btn-primary__arrow">→</span>
              </button>
            </div>
          </div>
        )}

        {/* ÉTAPE 2 */}
        {step === 2 && (
          <div className="founders-form__step-content">
            <p className="founders-form__step-label">Étape 2 sur 3 · Tes habitudes café</p>
            <div className="form-group">
              <label className="form-label">Tu bois du café... *</label>
              <div className="form-radios">
                {FORM_OPTIONS.consumption.map((opt) => (
                  <label key={opt.value} className="form-radio">
                    <input type="radio" value={opt.value} {...register('consommation', { required: 'Choisis une fréquence' })} />
                    <span className="form-radio__mark"></span>
                    <span className="form-radio__label">{opt.label}</span>
                  </label>
                ))}
              </div>
              {errors.consommation && <span className="form-error">{errors.consommation.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">À quels moments principalement ? <small>(plusieurs réponses)</small></label>
              <div className="form-checks">
                {FORM_OPTIONS.moments.map((opt) => (
                  <label key={opt.value} className="form-check">
                    <input type="checkbox" value={opt.value} {...register('moments')} />
                    <span className="form-check__mark">✓</span>
                    <span className="form-check__label">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="founders-form__actions founders-form__actions--split">
              <button type="button" className="btn-ghost" onClick={() => setStep(1)}>← Retour</button>
              <button type="button" className="btn-primary"
                onClick={() => {
                  const checked = document.querySelector('[name="consommation"]:checked');
                  if (checked) setStep(3);
                  else handleSubmit(() => {})();
                }}>
                Continuer <span className="btn-primary__arrow">→</span>
              </button>
            </div>
          </div>
        )}

        {/* ÉTAPE 3 */}
        {step === 3 && (
          <div className="founders-form__step-content">
            <p className="founders-form__step-label">Étape 3 sur 3 · Pour finir</p>
            <div className="form-group">
              <label className="form-label">Profil aromatique *</label>
              <select className={`form-select ${errors.profil ? 'has-error' : ''}`}
                {...register('profil', { required: 'Sélectionne un profil' })} defaultValue="">
                <option value="" disabled>Choisir...</option>
                {FORM_OPTIONS.profiles.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.profil && <span className="form-error">{errors.profil.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Tu achèterais Zahowa pour... *</label>
              <div className="form-radios form-radios--horizontal">
                {FORM_OPTIONS.intentions.map((opt) => (
                  <label key={opt.value} className="form-radio">
                    <input type="radio" value={opt.value} {...register('intention', { required: 'Choisis une intention' })} />
                    <span className="form-radio__mark"></span>
                    <span className="form-radio__label">{opt.label}</span>
                  </label>
                ))}
              </div>
              {errors.intention && <span className="form-error">{errors.intention.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="source" className="form-label">Comment as-tu connu Zahowa ?</label>
              <select id="source" className="form-select" {...register('source')} defaultValue="">
                <option value="">Préfère ne pas dire</option>
                {FORM_OPTIONS.channels.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {submitStatus === 'error' && (
              <div className="form-error-banner">
                Une erreur est survenue. Vérifie ta connexion ou écris-nous directement à{' '}
                <a href="mailto:contact@zahowa.com">contact@zahowa.com</a>
              </div>
            )}

            <div className="founders-form__actions founders-form__actions--split">
              <button type="button" className="btn-ghost" onClick={() => setStep(2)}>← Retour</button>
              <button type="submit" className="btn-primary btn-primary--gold" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi...' : 'Réserver ma place'}
                <span className="btn-primary__arrow">→</span>
              </button>
            </div>
            <p className="founders-form__disclaimer">
              Pas de spam. Ton email reste privé. Désinscription en 1 clic.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
