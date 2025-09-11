import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IoIosList } from 'react-icons/io';
import { useWindowSize } from './hooks/useWindowSize';
import NavList from './ui/NavList';
import MobileNav from './ui/MobileNav';
import ContactDropdown from './ui/ContactDropdown';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { width } = useWindowSize();

  const closeNav = () => setIsMobileNavOpen(false);

  useEffect(() => {
    if (width > 768) closeNav();
  }, [width]);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => (document.body.style.overflow = '');
  }, [isMobileNavOpen]);

  function handleNavButton() {
    setIsMobileNavOpen((state) => !state);
  }

  return (
    <header className="relative mx-auto flex items-center justify-between px-5 md:container sm:px-10">
      <motion.a
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring' }}
        href="/"
        className="order-2 p-2 md:order-1"
      >
        <motion.img className="mx-auto max-w-14 " src="/logo.png" alt="logo" />
        <h1 className="-mt-2 antialiased">Crypto</h1>
      </motion.a>

      <motion.nav
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring' }}
        className="order-3 md:order-2"
      >
        <ul className="hidden items-center gap-5 rounded-xl bg-white px-10 py-5 text-black shadow-md md:flex">
          <NavList />
        </ul>

        <IoIosList
          className="h-8 w-8 cursor-pointer md:hidden"
          onClick={handleNavButton}
        />
      </motion.nav>

      <ContactDropdown />

      <AnimatePresence>
        {isMobileNavOpen ? <MobileNav closeNav={closeNav} /> : null}
      </AnimatePresence>
    </header>
  );
}
