import { useEffect } from 'react';

const CONTENT = {
  mentions: {
    title: 'Mentions légales',
    sections: [
      {
        heading: '1. Éditeur du site',
        text: `Le site Zahowa.com est édité par le fondateur de la marque Zahowa, en vue du lancement d'une gamme de café épicé artisanal en sachet infusion.\n\nEmail : contact@zahowa.com\n\n(Informations SIRET et adresse postale à compléter dès l'immatriculation de la société.)`
      },
      {
        heading: '2. Hébergement',
        text: `Le site est hébergé par GitHub, Inc.\n88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.\nhttps://pages.github.com`
      },
      {
        heading: '3. Propriété intellectuelle',
        text: `L'ensemble du contenu du site Zahowa.com (textes, images, vidéos, graphismes, logo, icônes, etc.) est la propriété exclusive de Zahowa ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.\n\nLa marque Zahowa ainsi que le logo associé sont des signes distinctifs déposés ou en cours de dépôt.`
      },
      {
        heading: '4. Responsabilité',
        text: `Zahowa s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur son site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.\n\nLe site propose un accès anticipé à un produit en phase de finalisation. Les descriptions, recettes et caractéristiques mentionnées sont indicatives et sujettes à évolution avant le lancement commercial.`
      },
      {
        heading: '5. Liens hypertextes',
        text: `Le site peut contenir des liens vers d'autres sites. Zahowa n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.`
      },
      {
        heading: '6. Contact',
        text: `Pour toute question relative aux mentions légales, vous pouvez nous contacter à : contact@zahowa.com`
      }
    ]
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    sections: [
      {
        heading: 'Dernière mise à jour : mai 2026',
        text: ''
      },
      {
        heading: '1. Qui est responsable de vos données ?',
        text: `Le responsable du traitement des données personnelles collectées sur le site Zahowa.com est le fondateur de la marque Zahowa.\n\nEmail de contact : contact@zahowa.com\n\n(Coordonnées complètes à compléter dès l'immatriculation.)`
      },
      {
        heading: '2. Quelles données collectons-nous ?',
        text: `Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire d'inscription :\n\n• Adresse email — pour vous informer du lancement\n• Réponses au questionnaire — recette préférée, moment de consommation, âge, genre, intérêt pour le Cercle Fondateur\n\nNous ne collectons pas de données de navigation, d'adresse IP, ou de cookies de traçage à des fins publicitaires.`
      },
      {
        heading: '3. Pourquoi collectons-nous ces données ?',
        text: `Les données sont utilisées pour :\n\n• Vous tenir informé·e de l'avancement et du lancement de Zahowa\n• Vous donner un accès prioritaire en tant que membre du Cercle Fondateur\n• Mieux comprendre les attentes de notre communauté pour affiner nos recettes\n\nBase légale : consentement explicite (article 6.1.a du RGPD).`
      },
      {
        heading: '4. Qui a accès à vos données ?',
        text: `Vos données sont stockées chez notre prestataire d'emailing Brevo (Sendinblue), qui agit en tant que sous-traitant dans le respect du RGPD.\n\nNous ne vendons, n'échangeons et ne transférons pas vos données personnelles à des tiers à des fins commerciales.`
      },
      {
        heading: '5. Durée de conservation',
        text: `Vos données sont conservées aussi longtemps que vous restez inscrit·e à notre liste. En cas de désinscription, vos données sont supprimées sous 30 jours.`
      },
      {
        heading: '6. Vos droits (RGPD)',
        text: `Conformément au RGPD, vous disposez des droits suivants :\n\n• Droit d'accès — obtenir une copie de vos données\n• Droit de rectification — corriger des données inexactes\n• Droit à l'effacement — demander la suppression\n• Droit à la portabilité — récupérer vos données\n• Droit d'opposition — vous désinscrire à tout moment\n\nPour exercer ces droits : contact@zahowa.com\n\nVous pouvez également introduire une réclamation auprès de la CNIL.`
      },
      {
        heading: '7. Cookies',
        text: `Le site Zahowa.com n'utilise aucun cookie de traçage publicitaire. Seuls des cookies techniques peuvent être déposés par notre hébergeur (GitHub Pages) pour le bon fonctionnement du service.`
      },
      {
        heading: '8. Sécurité',
        text: `Nous mettons en œuvre des mesures de sécurité techniques appropriées pour protéger vos données. Les transmissions sont sécurisées via HTTPS.`
      },
      {
        heading: '9. Contact',
        text: `Pour toute question : contact@zahowa.com`
      }
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
    <div className="modal-overlay"
      role="dialog" aria-modal="true" aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box modal-box--legal">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="modal-header">
          <div className="eyebrow" style={{ color: 'var(--or-imperial)' }}>
            <span className="eyebrow__line"></span>
            Informations légales
          </div>
          <h2 className="modal-title">{content.title}</h2>
        </div>

        <div className="legal-content">
          {content.sections.map((section, idx) => (
            <div key={idx} className="legal-section">
              {section.heading && (
                <h3 className="legal-section__title">{section.heading}</h3>
              )}
              {section.text && (
                <p className="legal-section__text">
                  {section.text.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < section.text.split('\n').length - 1 && <br />}
                    </span>
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
