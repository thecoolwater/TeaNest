import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import Loader from './components/Loader.jsx';
import useSeo from './hooks/useSeo.js';

const Home = lazy(() => import('./pages/Home.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const Policy = lazy(() => import('./pages/Policy.jsx'));

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export default function App() {
  useSeo();

  useEffect(() => {
    let active = true;
    let lenis;
    let frameId;

    const startSmoothScroll = async () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
      if (reduceMotion || coarsePointer || !active) return;

      const { default: Lenis } = await import('lenis');
      if (!active) return;
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      const raf = (time) => {
        lenis.raf(time);
        frameId = requestAnimationFrame(raf);
      };
      frameId = requestAnimationFrame(raf);
    };

    const idleId = 'requestIdleCallback' in window
      ? window.requestIdleCallback(startSmoothScroll, { timeout: 1800 })
      : window.setTimeout(startSmoothScroll, 900);

    return () => {
      active = false;
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      if (frameId) cancelAnimationFrame(frameId);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <ScrollManager />
      <Suspense fallback={<Loader visible />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<Policy type="privacy" />} />
            <Route path="/terms" element={<Policy type="terms" />} />
            <Route path="/shipping-policy" element={<Policy type="shipping" />} />
            <Route path="/return-policy" element={<Policy type="returns" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
