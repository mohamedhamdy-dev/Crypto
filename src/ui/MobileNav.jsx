import { motion } from 'motion/react';
import NavList from './NavList';

export default function MobileNav({ closeNav }) {
  return (
    <motion.ul
      initial={{ x: '100vw' }}
      animate={{ x: '0vw' }}
      exit={{ x: '100vw' }}
      transition={{ type: 'tween' }}
      className="absolute left-0 top-full z-50 flex h-dvh w-full justify-center bg-primary "
    >
      <div className="flex flex-col gap-20 pt-16">
        <NavList isMobile={true} closeNav={closeNav} />
      </div>
    </motion.ul>
  );
}
