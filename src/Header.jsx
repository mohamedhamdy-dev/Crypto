import { useEffect, useState } from 'react';
import useScreenSize from './useScreenSize';
import { TiInfoLarge } from 'react-icons/ti';
import { SlSocialDropbox } from 'react-icons/sl';
import { PiTrademarkRegisteredBold } from 'react-icons/pi';
import { ImProfile } from 'react-icons/im';
import { IoIosSearch } from 'react-icons/io';
import Navlink from './ui/Navlink';
import { motion } from 'motion/react';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      if (screenSize.width > 768) setIsNavOpen(false);
    },
    [screenSize.width],
  );

  function handleNavButton() {
    setIsNavOpen((state) => !state);
  }

  return (
    <header className="relative  mx-auto flex items-center justify-between md:container lg:px-10">
      <motion.a
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring' }}
        href="/"
        className="p-2"
      >
        <motion.img className=" mx-auto max-w-14 " src="/logo.png" alt="logo" />
        <h1 className="-mt-2 antialiased">Crypto</h1>
      </motion.a>

      <motion.nav
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring' }}
        className="flex"
      >
        <ul className="hidden items-center gap-5 rounded-xl bg-white px-10 py-5 text-black shadow-md md:flex">
          <Navlink
            link="#about-us"
            text="About Us"
            icon={<ImProfile className="size-6" />}
          />
          <Navlink
            link="#features"
            text="Features"
            icon={<SlSocialDropbox className="size-6" />}
          />
          <Navlink
            link="#trading"
            text="Trading"
            icon={<PiTrademarkRegisteredBold className="size-6" />}
          />
          <Navlink
            link="#learn"
            text="Learn"
            icon={<TiInfoLarge className="size-6" />}
          />
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 256 256"
          className="mr-2 h-8 w-8 cursor-pointer md:hidden"
          onClick={handleNavButton}
        >
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
      </motion.nav>

      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring' }}
        className="hidden p-4 lg:block"
      >
        <IoIosSearch className="size-10 cursor-pointer duration-300 hover:scale-110" />
      </motion.div>
    </header>
  );
}
