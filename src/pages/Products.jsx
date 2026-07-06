import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from '../components/ProductModal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { categories, products } from '../data/products.js';

const PAGE_SIZE = 8;

export default function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const [page, setPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const filtered = useMemo(() => {
    const result = products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase()));

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [category, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageProducts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const updateCategory = (value) => {
    setCategory(value);
    setPage(1);
  };

  const toggleWishlist = (id) => {
    setWishlist((items) => (items.includes(id) ? items.filter((item) => item !== id) : [...items, id]));
  };

  return (
    <>
      <section className="bg-forest-radial pb-16 pt-36">
        <div className="container-premium">
          <SectionHeader eyebrow="Products" title="Premium Assam teas for every ritual." text="Search, filter, compare price points, and open quick details without leaving the collection." />
        </div>
      </section>

      <section className="container-premium py-16">
        <AnimatedSection className="mb-10 rounded-[8px] border border-gold/15 bg-forest/60 p-4 shadow-luxury">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
              <input
                className="focus-ring h-14 w-full rounded-full border border-gold/20 bg-night/70 py-3 pl-12 pr-4 text-sm text-white placeholder:text-white/38"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Search Royal Gold, CTC, Orthodox..."
              />
            </label>
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`focus-ring whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === item ? 'bg-gold text-night' : 'border border-gold/20 text-white/72 hover:text-gold'
                  }`}
                  type="button"
                  onClick={() => updateCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 rounded-full border border-gold/20 bg-night/70 px-4 py-3 text-sm text-white/70">
              <SlidersHorizontal className="h-4 w-4 text-gold" />
              <span className="sr-only">Sort products</span>
              <select className="bg-transparent text-white outline-none" value={sort} onChange={(event) => setSort(event.target.value)}>
                <option className="bg-night" value="featured">Featured</option>
                <option className="bg-night" value="price-low">Price: Low to High</option>
                <option className="bg-night" value="price-high">Price: High to Low</option>
                <option className="bg-night" value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </AnimatedSection>

        <div className="mb-7 flex items-center justify-between gap-4 text-sm text-white/58">
          <p>{filtered.length} products found</p>
          <p>Wishlist: {wishlist.length}</p>
        </div>

        {pageProducts.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pageProducts.map((product) => (
              <ProductCard key={product.id} product={product} wishlist={wishlist} onWishlist={toggleWishlist} onQuickView={setModalProduct} />
            ))}
          </div>
        ) : (
          <div className="rounded-[8px] border border-gold/15 bg-forest/55 p-12 text-center">
            <h2 className="font-heading text-3xl">No tea found</h2>
            <p className="mt-3 text-white/60">Try another search or category.</p>
          </div>
        )}

        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`focus-ring h-11 w-11 rounded-full font-semibold ${
                page === index + 1 ? 'bg-gold text-night' : 'border border-gold/25 text-white/70 hover:text-gold'
              }`}
              type="button"
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
    </>
  );
}
