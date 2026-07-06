const brandFile = (name) => `${import.meta.env.BASE_URL}brand/${name}`;

export const brandAssets = {
  introVideo: brandFile('teanest-intro-video.webp'),
  brandedCup: brandFile('teanest-branded-cup.webp'),
  royalGoldFront: brandFile('teanest-royal-gold-front.webp'),
  royalGoldBack: brandFile('teanest-royal-gold-back.webp'),
  cardLogo: brandFile('teanest-card-logo.webp'),
  cardInfo: brandFile('teanest-card-info.webp'),
  printedLandscape: brandFile('teanest-printed-landscape.svg'),
};

export const business = {
  brandName: 'TeaNest',
  legalName: 'T.N. Enterprise',
  tagline: 'Test the Real Tea',
  productLine: 'Royal Gold',
  descriptor: 'Signature Tea Blending',
  businessType: 'Wholesale | Retailer | Trader | Packer',
  phone: '+91 96646 50240',
  phoneAlt: '+91 84602 50240',
  whatsapp: '919664650240',
  email: 'teanest123@gmail.com',
  addressLines: ['Amon Shopping, 1st Floor', 'M.G. Road, Bardoli - 394601', 'Gujarat, India'],
  fssai: '20726022002052',
  bestBefore: 'Best before 12 months from packed date',
  ingredients: 'Assam Tea',
  storage: [
    'Store in a cool and dry place.',
    'Keep away from moisture and direct sunlight.',
    'Seal tightly after each use for best freshness.',
  ],
};
