import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seo = {
  '/': ['TeaNest | Premium Assam Tea', 'Experience the royal taste of Assam with premium tea leaves sourced directly from selected gardens.'],
  '/products': ['TeaNest Products | Premium Assam Tea', 'Shop Royal Gold, CTC tea, premium dust tea, and orthodox Assam blends from TeaNest.'],
  '/about': ['About TeaNest | Assam Tea Story', 'Discover TeaNest, a premium Assam tea brand built on natural leaves, rich aroma, and careful sourcing.'],
  '/contact': ['Contact TeaNest | Premium Tea Support', 'Contact TeaNest for orders, wholesale enquiries, support, and premium Assam tea information.'],
  '/faq': ['TeaNest FAQ | Premium Tea Questions', 'Answers about TeaNest sourcing, storage, shipping, wholesale orders, and tea selection.'],
};

export default function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description] = seo[pathname] || ['TeaNest | Premium Assam Tea', 'Premium Assam tea by TeaNest.'];
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
  }, [pathname]);
}
