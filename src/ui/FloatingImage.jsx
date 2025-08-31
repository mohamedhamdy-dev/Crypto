import { motion } from 'framer-motion';

export default function FloatingImage({ image }) {
  return (
    <motion.img
      initial={{ y: 0 }}
      animate={{
        y: -20,
        scale: 1.05,
        boxShadow: '0px 15px 30px rgba(0,0,0,0.3)',
      }} // animate up
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'mirror', // smooth continuous loop
        ease: 'easeInOut',
      }}
      src={image}
      alt="Crypto illustration"
      className="mx-auto rounded-2xl shadow-lg"
    />
  );
}
