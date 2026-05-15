import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../data/siteConfig';

/**
 * Composant SEO centralisé — complète le SEO statique de index.html
 * Permet de générer des metas dynamiques si besoin (multi-pages futur)
 */
export default function SEO({ title, description, ogImage }) {
  const pageTitle = title || SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const pageOgImage = ogImage || `${SITE_CONFIG.url}/images/og-image.jpg`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
    </Helmet>
  );
}
