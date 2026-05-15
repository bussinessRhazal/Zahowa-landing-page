// ============================================
// Les 4 recettes Zahowa
// ============================================
// Composition validée selon le brand book + recherches scientifiques
// Chaque recette = 3 épices traditionnelles + 1 élément européen
// ============================================

export const RECIPES = [
  {
    id: 'aube-casablanca',
    number: '01',
    name: 'Aube de Casablanca',
    city: 'Atlantique · Douceur',
    profile: 'Sucré & Équilibré',
    description: 'L\'éveil sucré de l\'Atlantique.',
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
