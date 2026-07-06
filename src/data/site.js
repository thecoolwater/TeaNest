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

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

export const whyChoose = [
  { title: '100% Natural', text: 'Pure Assam leaves without artificial color or synthetic fragrance.', icon: Leaf },
  { title: 'Rich Aroma', text: 'Carefully fired leaves preserve the signature malty Assam perfume.', icon: Sparkles },
  { title: 'Premium Assam Tea', text: 'Selected garden lots, graded for liquor, leaf quality, and cup character.', icon: Award },
  { title: 'Direct From Tea Gardens', text: 'Fresh batches move from gardens to packaging with tight quality checks.', icon: Truck },
];

export const processSteps = [
  { title: 'Tea Garden', text: 'Leaves begin in selected Assam gardens known for deep, fertile soil.', icon: Leaf },
  { title: 'Harvesting', text: 'Tender shoots are handpicked at their aromatic peak.', icon: HeartHandshake },
  { title: 'Processing', text: 'Controlled withering, rolling, oxidation, and firing shape the cup.', icon: Factory },
  { title: 'Quality Check', text: 'Every batch is tasted for aroma, strength, color, and clarity.', icon: ShieldCheck },
  { title: 'Packaging', text: 'Freshness is sealed in elegant, protective packs.', icon: PackageCheck },
  { title: 'Delivery', text: 'Orders are prepared quickly so the leaves reach you at their best.', icon: CheckCircle2 },
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
    title: 'Assam Tea Plantation',
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Golden Cup of Tea',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Whole Tea Leaves',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Premium Tea Packaging',
    image: 'https://images.unsplash.com/photo-1622480916113-9000ac49b79d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Handcrafted Brewing',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Estate Harvest',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1000&q=80',
  },
];

export const faqs = [
  {
    question: 'Where does TeaNest source its tea?',
    answer: 'TeaNest sources Assam tea from carefully selected gardens and partner estates that meet our standards for leaf quality, aroma, and consistency.',
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
    answer: 'Yes. Hotels, cafes, offices, and retailers can contact TeaNest for wholesale pricing and custom packaging discussions.',
  },
  {
    question: 'How fast are orders shipped?',
    answer: 'Most orders are processed within 24 to 48 business hours and shipped through trusted courier partners.',
  },
];

export const policies = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'TeaNest collects only the information required to process orders, answer enquiries, and improve the customer experience.',
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
      'Orders are packed with care and usually dispatched within 24 to 48 business hours.',
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
  { label: 'Phone', value: '+91 98765 43210' },
  { label: 'Email', value: 'care@teanest.in' },
  { label: 'Address', value: 'TeaNest House, Pan Bazaar, Guwahati, Assam 781001' },
  { label: 'Business Hours', value: 'Monday to Saturday, 9:30 AM - 6:30 PM' },
];
