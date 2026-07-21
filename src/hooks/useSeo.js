import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seo = {
  '/': ['TeaNest Royal Gold | Premium Assam Tea', 'Discover TeaNest Royal Gold: selected Assam tea leaves with deep amber colour, smooth malty character, rich aroma, and a bold refreshing cup.'],
  '/products': ['Buy Premium Assam Tea | TeaNest Products', 'Explore TeaNest Royal Gold, Assam CTC tea, premium dust tea, and orthodox tea blends for homes, retailers, and wholesale orders.'],
  '/about': ['About TeaNest | Our Premium Assam Tea Story', 'Meet TeaNest by T.N. Enterprise and discover our Assam tea story, natural leaves, rich aroma, careful blending, and trusted packing in Gujarat.'],
  '/contact': ['Contact TeaNest | Assam Tea Orders & Wholesale', 'Contact TeaNest for premium Assam tea orders, wholesale enquiries, retailer supply, customer support, and Royal Gold product information.'],
  '/faq': ['Assam Tea FAQ | TeaNest Brewing & Storage Guide', 'Find answers about Assam tea sourcing, brewing, storage, shipping, wholesale orders, and choosing the right TeaNest blend.'],
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
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const pageUrl = `https://myteanest.com/${pathname === '/' ? '' : `#${pathname}`}`;
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', pageUrl);
    if (canonical) canonical.setAttribute('href', pageUrl);
  }, [pathname]);
}
