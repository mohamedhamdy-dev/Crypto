import { useEffect, useState } from 'react';
import useScreenSize from './useScreenSize';
import logo from './Images/Logo.png';
import search from './Images/Search.png';
// import NavLink from './ui/Navlink';
import { BsInfoCircleFill } from 'react-icons/bs';
import { TiInfoLarge } from 'react-icons/ti';
import { SlSocialDropbox } from 'react-icons/sl';
import { PiTrademarkRegisteredBold } from 'react-icons/pi';
import { ImProfile } from 'react-icons/im';
import { IoIosSearch } from 'react-icons/io';
import Navlink from './ui/Navlink';

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
      <div className="p-2">
        <img className=" mx-auto max-w-14 " src={logo} alt="logo" />
        <h1 className="-mt-2">Coinmyte.</h1>
      </div>

      <nav className="flex">
        <ul className="flex items-center gap-5 rounded-xl bg-white px-10 py-5 text-black shadow-md ">
          <Navlink link="#about-us">
            <ImProfile className="size-6" />
            About Us
          </Navlink>

          <Navlink link="#features">
            <SlSocialDropbox className="size-6" />
            Features
          </Navlink>

          <Navlink link="#trading">
            <PiTrademarkRegisteredBold className="size-6" />
            Trading
          </Navlink>

          <Navlink link="#learn">
            <TiInfoLarge className="size-6" />
            Learn
          </Navlink>
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
      </nav>

      <div className="hidden p-4 lg:block">
        <IoIosSearch className="size-10 cursor-pointer duration-300 hover:scale-110" />
      </div>
    </header>
  );
}
