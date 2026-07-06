import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ as = 'section', className = '', children, delay = 0 }) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={variants}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
