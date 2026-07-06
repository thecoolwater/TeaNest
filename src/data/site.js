import {
  Award,
  CheckCircle2,
  Coffee,
  Factory,
  HeartHandshake,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react';
import { brandAssets, business } from './brand.js';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

export const whyChoose = [
  { title: '100% Natural', text: 'Assam tea crafted without artificial color or synthetic fragrance.', icon: Leaf },
  { title: 'Rich Aroma', text: 'Selected leaves deliver the refreshing aroma promised on every TeaNest pack.', icon: Sparkles },
  { title: 'Great Taste', text: 'Balanced Assam strength made for everyday homes, retailers, and hospitality counters.', icon: Coffee },
  { title: 'Packed With Care', text: 'T.N. Enterprise packs every batch with freshness, storage, and shelf-life discipline.', icon: Truck },
];

export const processSteps = [
  { title: 'Assam Leaves', text: 'Carefully selected Assam tea leaves form the base of every TeaNest blend.', icon: Leaf },
  { title: 'Blending', text: 'Signature tea blending balances strength, aroma, and a refreshing finish.', icon: HeartHandshake },
  { title: 'Processing', text: 'The cup profile is shaped for reliable color, body, and everyday satisfaction.', icon: Factory },
  { title: 'Quality Check', text: 'Batches are reviewed for aroma, taste, freshness, and customer consistency.', icon: ShieldCheck },
  { title: 'Packing', text: 'Royal Gold packs are sealed with storage guidance and best-before discipline.', icon: PackageCheck },
  { title: 'Trade Supply', text: 'Wholesale, retailer, trader, and packer supply is managed from Bardoli, Gujarat.', icon: CheckCircle2 },
];

export const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Boutique Hotel Owner',
    text: 'TeaNest Royal Gold has become our welcome drink ritual. Guests notice the aroma before the first sip.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Tea Collector',
    text: 'The orthodox reserve is polished, layered, and genuinely premium. It tastes like a carefully sourced estate tea.',
    rating: 5,
  },
  {
    name: 'Nasreen Ali',
    role: 'Home Chef',
    text: 'The CTC blend makes a strong, elegant chai without bitterness. It has become a daily essential.',
    rating: 5,
  },
];

export const gallery = [
  {
    title: 'Royal Gold Front Pack',
    image: brandAssets.royalGoldFront,
  },
  {
    title: 'Royal Gold Back Details',
    image: brandAssets.royalGoldBack,
  },
  {
    title: 'TeaNest Brand Card',
    image: brandAssets.cardLogo,
  },
  {
    title: 'T.N. Enterprise Details',
    image: brandAssets.cardInfo,
  },
  {
    title: 'Assam Tea Brew',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Tea Estate Mood',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1000&q=80',
  },
];

export const faqs = [
  {
    question: 'Where does TeaNest source its tea?',
    answer: 'TeaNest is crafted from carefully selected Assam leaves and packed by T.N. Enterprise in Bardoli, Gujarat.',
  },
  {
    question: 'Which tea is best for strong milk tea?',
    answer: 'Estate CTC Tea and Chai Master Blend are ideal for strong milk tea because they produce rich color, brisk flavor, and a full body.',
  },
  {
    question: 'How should I store premium tea?',
    answer: 'Store tea in an airtight container away from sunlight, moisture, spices, and heat. This protects aroma and cup quality.',
  },
  {
    question: 'Do you sell wholesale packs?',
    answer: 'Yes. TeaNest works as a wholesale, retailer, trader, and packer supply brand. Contact T.N. Enterprise for trade orders.',
  },
  {
    question: 'How fast are orders shipped?',
    answer: 'Most orders and trade enquiries are handled by customer care from Bardoli. Dispatch timelines depend on stock, destination, and order size.',
  },
];

export const policies = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'TeaNest collects only the information required by T.N. Enterprise to process orders, answer enquiries, and improve the customer experience.',
      'Customer data is handled with care and is never sold. Payment details are processed through secure payment providers.',
      'You may contact TeaNest to update, correct, or request deletion of your personal information.',
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    body: [
      'By using TeaNest, you agree to provide accurate order and contact details.',
      'Product availability, prices, and offers may change without notice, while confirmed orders remain protected by the details shown at checkout.',
      'All website content, imagery, copy, and brand elements belong to TeaNest unless otherwise noted.',
    ],
  },
  shipping: {
    title: 'Shipping Policy',
    body: [
      'Orders are packed with care by T.N. Enterprise and dispatched based on destination, stock availability, and order size.',
      'Delivery timelines depend on the destination and courier service availability.',
      'Customers receive order tracking details once a shipment is dispatched.',
    ],
  },
  returns: {
    title: 'Return Policy',
    body: [
      'Unopened products may be eligible for return within 7 days of delivery if there is a packing error or transit damage.',
      'Opened tea packs cannot be returned because tea is a consumable product.',
      'For damaged deliveries, contact TeaNest with photos of the package and order details within 48 hours.',
    ],
  },
};

export const contactCards = [
  { label: 'Customer Care', value: business.phone },
  { label: 'Alternate Phone', value: business.phoneAlt },
  { label: 'Email', value: business.email },
  { label: 'Address', value: business.addressLines.join(', ') },
  { label: 'FSSAI Licence', value: business.fssai },
  { label: 'Business Type', value: business.businessType },
];
