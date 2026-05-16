import { useEffect } from 'react';

const CONTENT = {
  mentions: {
    title: 'Mentions légales',
    sections: [
      { heading: '1. Éditeur du site', text: 'Le site Zahowa.com est édité par le fondateur de la marque Zahowa.\n\nEmail : contact@zahowa.com\n\n(Informations SIRET et adresse postale à compléter dès l\'immatriculation.)' },
      { heading: '2. Hébergement', text: 'GitHub, Inc.\n88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.\nhttps://pages.github.com' },
      { heading: '3. Propriété intellectuelle', text: 'L\'ensemble du contenu du site Zahowa.com est la propriété exclusive de Zahowa. Toute reproduction sans autorisation écrite préalable est interdite. La marque Zahowa et son logo sont des signes distinctifs déposés ou en cours de dépôt.' },
      { heading: '4. Responsabilité', text: 'Zahowa s\'efforce d\'assurer l\'exactitude des informations diffusées. Le site propose un accès anticipé à un produit en phase de finalisation. Les descriptions et caractéristiques sont indicatives et sujettes à évolution.' },
      { heading: '5. Liens hypertextes', text: 'Le site peut contenir des liens vers d\'autres sites. Zahowa décline toute responsabilité quant à leur contenu.' },
      { heading: '6. Contact', text: 'contact@zahowa.com' }
    ]
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    sections: [
      { heading: 'Dernière mise à jour : mai 2026', text: '' },
      { heading: '1. Responsable du traitement', text: 'Le fondateur de la marque Zahowa.\nEmail : contact@zahowa.com' },
      { heading: '2. Données collectées', text: 'Uniquement les données transmises via le formulaire d\'inscription :\n• Adresse email\n• Réponses au questionnaire (âge, genre, habitudes café, profil aromatique)\n\nAucun cookie publicitaire, aucune donnée de navigation.' },
      { heading: '3. Finalités', text: '• Vous informer du lancement de Zahowa\n• Vous donner accès au Cercle Fondateur\n• Affiner les recettes selon vos préférences\n\nBase légale : consentement (art. 6.1.a RGPD).' },
      { heading: '4. Destinataires', text: 'Données stockées chez Brevo (sous-traitant RGPD). Aucune vente ou transfert à des tiers.' },
      { heading: '5. Durée de conservation', text: 'Conservées jusqu\'à désinscription. Suppression sous 30 jours après désinscription.' },
      { heading: '6. Vos droits', text: 'Accès, rectification, effacement, portabilité, opposition.\nExercer vos droits : contact@zahowa.com\nRéclamation possible auprès de la CNIL.' },
      { heading: '7. Cookies', text: 'Aucun cookie publicitaire. Seuls des cookies techniques peuvent être déposés par GitHub Pages.' },
      { heading: '8. Contact', text: 'contact@zahowa.com' }
    ]
  }
};

export default function LegalModal({ title, type, onClose }) {
  const content = CONTENT[type];

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box modal-box--legal">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        <div className="modal-header">
          <div className="eyebrow" style={{ color: 'var(--or-imperial)' }}>
            <span className="eyebrow__line"></span>Informations légales
          </div>
          <h2 className="modal-title">{content.title}</h2>
        </div>
        <div className="legal-content">
          {content.sections.map((section, idx) => (
            <div key={idx} className="legal-section">
              {section.heading && <h3 className="legal-section__title">{section.heading}</h3>}
              {section.text && (
                <p className="legal-section__text">
                  {section.text.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < section.text.split('\n').length - 1 && <br />}</span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
