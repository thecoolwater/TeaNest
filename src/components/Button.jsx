import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const base =
  'focus-ring btn-ripple inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300';

const styles = {
  primary: 'gold-gradient text-night shadow-glow hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(212,175,55,.28)]',
  secondary: 'border border-gold/45 bg-white/5 text-white hover:border-gold hover:bg-gold/10 hover:text-cream',
  ghost: 'text-cream hover:text-gold',
};

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const classes = `${base} ${styles[variant]} ${className}`;
  const content = (
    <motion.span className="inline-flex items-center gap-2" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
