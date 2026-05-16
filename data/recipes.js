// ⚠️ Images des villes : remplacer par tes propres photos dans public/images/
// Noms recommandés : city-casablanca.jpg, city-rabat.jpg, city-fes.jpg, city-marrakech.jpg

const BASE = import.meta.env.BASE_URL;

export const RECIPES = [
  {
    id: 'aube-casablanca',
    number: '01',
    name: 'Aube de Casablanca',
    city: 'Atlantique · Douceur',
    profile: 'Sucré & Équilibré',
    description: 'L\'éveil sucré de l\'Atlantique.',
    moment: 'Le matin, pour un réveil tout en douceur',
    // Remplace par : `${BASE}images/city-casablanca.jpg`
    cityImage: 'https://images.unsplash.com/photo-1539020140153-e479b8a4a79c?w=600&q=75&fm=jpg',
    spices: [
      { name: 'Anis vert', origin: 'Maroc' },
      { name: 'Fenouil', origin: 'Maroc' },
      { name: 'Cannelle Ceylan', origin: 'Sri Lanka' },
      { name: 'Vanille Bourbon', origin: 'Madagascar', isEuropean: true }
    ],
    color: '#C9A547'
  },
  {
    id: 'grace-rabat',
    number: '02',
    name: 'Grâce de Rabat',
    city: 'Royale · Feutrée',
    profile: 'Chaud & Réconfortant',
    description: 'Le cocon royal.',
    moment: 'Après le déjeuner ou en fin d\'après-midi',
    // Remplace par : `${BASE}images/city-rabat.jpg`
    cityImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=75&fm=jpg',
    spices: [
      { name: 'Cannelle Ceylan', origin: 'Sri Lanka' },
      { name: 'Gingembre séché', origin: 'Maroc' },
      { name: 'Cardamome verte', origin: 'Guatemala' },
      { name: 'Miel d\'acacia', origin: 'France', isEuropean: true }
    ],
    color: '#B8922A'
  },
  {
    id: 'ame-fes',
    number: '03',
    name: 'Âme de Fès',
    city: 'Spirituelle · Millénaire',
    profile: 'Floral & Subtil',
    description: 'La contemplation florale.',
    moment: 'Le soir, pour un moment de contemplation',
    // Remplace par : `${BASE}images/city-fes.jpg`
    cityImage: 'https://images.unsplash.com/photo-1581878015229-7c3daaaf01e3?w=600&q=75&fm=jpg',
    spices: [
      { name: 'Rose damascena', origin: 'Maroc' },
      { name: 'Safran de Taliouine', origin: 'Maroc' },
      { name: 'Cardamome verte', origin: 'Guatemala' },
      { name: 'Lavande de Provence', origin: 'France', isEuropean: true }
    ],
    color: '#A5824D'
  },
  {
    id: 'fievre-marrakech',
    number: '04',
    name: 'Fièvre de Marrakech',
    city: 'Intense · Charnelle',
    profile: 'Intense & Complexe',
    description: 'Le caractère du Sud.',
    moment: 'L\'après-midi ou après un repas généreux',
    // Remplace par : `${BASE}images/city-marrakech.jpg`
    cityImage: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=600&q=75&fm=jpg',
    spices: [
      { name: 'Poivre noir Tellichery', origin: 'Inde' },
      { name: 'Clou de girofle', origin: 'Madagascar' },
      { name: 'Anis étoilé', origin: 'Vietnam' },
      { name: 'Cacao cru', origin: 'France/Europe', isEuropean: true }
    ],
    color: '#7B3A1A'
  }
];

export const PILLARS = [
  {
    id: 'tradition',
    title: 'Tradition validée',
    text: 'La Qahwa épicée existe depuis le XVe siècle dans les médinas du Maghreb. Six cents ans de raffinement. Pas une mode — un héritage.',
    iconType: 'monument'
  },
  {
    id: 'naturel',
    title: 'Épices 100% naturelles',
    text: 'Chaque épice est soigneusement sélectionnée à la source — des marchés de Fès aux plantations de cardamome. Aucun arôme artificiel, aucun additif. Seulement la nature.',
    iconType: 'leaf'
  },
  {
    id: 'precision',
    title: 'Précision technique',
    text: '92°C exactement, 5 minutes, granulométrie spécifique. Chaque recette a sa fenêtre d\'extraction calibrée pour préserver les arômes des épices.',
    iconType: 'precision'
  },
  {
    id: 'rituel',
    title: 'Format infusion',
    text: 'Sachet mousseline biodégradable. Extraction douce qui respecte les huiles essentielles des épices. Un sachet. Une tasse. Un rituel.',
    iconType: 'tea'
  }
];
