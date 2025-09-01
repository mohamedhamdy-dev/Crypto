import { motion } from 'motion/react';

export default function Button({ dark = false, children }) {
  return (
    <motion.button
      initial={
        dark
          ? {
              scale: 1,
              backgroundColor: '#0d0821',
              borderColor: '#0d0821',
              color: '#fff',
            }
          : { scale: 1, color: '#fff', borderColor: '#fff' }
      }
      whileHover={
        dark
          ? { scale: 1.1, backgroundColor: '#fff', color: '#0d0821' }
          : {
              scale: 1.1,
              color: '#0d0821',
              backgroundColor: '#fff',
            }
      }
      transition={{ type: 'spring' }}
      className="w-fit rounded-full border-2 px-3 py-2"
    >
      {children}
    </motion.button>
  );
}
