import { useEffect, useState } from 'react';
import useScreenSize from './useScreenSize';
import { TiInfoLarge } from 'react-icons/ti';
import { SlSocialDropbox } from 'react-icons/sl';
import { PiTrademarkRegisteredBold } from 'react-icons/pi';
import { ImProfile } from 'react-icons/im';
import Navlink from './ui/Navlink';
import { motion } from 'motion/react';
import { MdLanguage } from 'react-icons/md';
import { IoIosList } from 'react-icons/io';

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
    <header className="relative mx-auto flex items-center justify-between px-5 md:container sm:px-10">
      <motion.a
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring' }}
        href="/"
        className="order-2 p-2 md:order-1"
      >
        <motion.img className=" mx-auto max-w-14 " src="/logo.png" alt="logo" />
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

        <IoIosList
          className="h-8 w-8 cursor-pointer md:hidden"
          onClick={handleNavButton}
        />
      </motion.nav>

      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring' }}
        className="order-1 md:order-3"
      >
        <MdLanguage className=" order-2 size-8 cursor-pointer duration-300 hover:scale-110" />
      </motion.div>
    </header>
  );
}
