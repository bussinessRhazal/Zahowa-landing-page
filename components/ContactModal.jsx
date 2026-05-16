import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SITE_CONFIG } from '../data/siteConfig';

export default function ContactModal({ onClose }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [status, setStatus] = useState(null);

  // Fermer avec Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v));
      formData.append('_subject', `📩 Message de ${data.prenom} — Zahowa`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      const res = await fetch(SITE_CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (res.ok) { setStatus('success'); reset(); }
      else throw new Error();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Nous contacter"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="modal-header">
          <div className="eyebrow" style={{ color: 'var(--or-imperial)' }}>
            <span className="eyebrow__line"></span>
            Contact
          </div>
          <h2 className="modal-title">Nous écrire</h2>
          <p className="modal-subtitle">Une question ? Une idée ? On te lit.</p>
        </div>

        {status === 'success' ? (
          <div className="modal-success">
            <div style={{ fontSize: '2.5rem', color: 'var(--or-imperial)', marginBottom: '16px' }}>✦</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300 }}>
              Message envoyé avec succès.
            </p>
            <p style={{ opacity: 0.7, marginTop: '8px', fontSize: '14px' }}>
              On te répond sous 48h à {SITE_CONFIG.contact.email}
            </p>
            <button className="btn-primary" style={{ marginTop: '32px' }} onClick={onClose}>
              Fermer <span className="btn-primary__arrow">→</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-prenom">Prénom *</label>
                <input id="contact-prenom" type="text"
                  className={`form-input form-input--light ${errors.prenom ? 'has-error' : ''}`}
                  placeholder="Ton prénom"
                  {...register('prenom', { required: 'Requis' })} />
                {errors.prenom && <span className="form-error">{errors.prenom.message}</span>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email *</label>
                <input id="contact-email" type="email"
                  className={`form-input form-input--light ${errors.email ? 'has-error' : ''}`}
                  placeholder="ton@email.com"
                  {...register('email', { required: 'Requis', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalide' } })} />
                {errors.email && <span className="form-error">{errors.email.message}</span>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-sujet">Sujet *</label>
              <input id="contact-sujet" type="text"
                className={`form-input form-input--light ${errors.sujet ? 'has-error' : ''}`}
                placeholder="De quoi s'agit-il ?"
                {...register('sujet', { required: 'Requis' })} />
              {errors.sujet && <span className="form-error">{errors.sujet.message}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message *</label>
              <textarea id="contact-message"
                className={`form-input form-input--light form-textarea ${errors.message ? 'has-error' : ''}`}
                placeholder="Ton message..."
                rows="5"
                {...register('message', { required: 'Requis', minLength: { value: 10, message: 'Minimum 10 caractères' } })} />
              {errors.message && <span className="form-error">{errors.message.message}</span>}
            </div>

            {status === 'error' && (
              <div className="form-error-banner">
                Erreur d'envoi. Écris-nous directement à{' '}
                <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
              </div>
            )}

            <button type="submit" className="btn-primary btn-primary--full" style={{ marginTop: '8px' }} disabled={isSubmitting}>
              {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              <span className="btn-primary__arrow">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
