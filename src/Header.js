import { useEffect, useState } from 'react';
import useScreenSize from './useScreenSize';

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

  const navButtonStyle = `1  inline-block bg-transparent px-3  py-2 hover:bg-white hover:text-black duration-300 uppercase text-sm
                ${isNavOpen ? 'w-[90%] rounded-lg py-3' : 'rounded-full'} `;

  return (
    <header className="relative  mx-auto flex items-center justify-between md:container lg:px-10">
      <div className="p-2">
        <img className=" mx-auto max-w-14 " src="/Images/Logo.png" alt="logo" />
        <h1 className="-mt-2">Coinmyte.</h1>
      </div>

      <nav className="flex">
        <ul
          className={`gap-5 md:flex ${isNavOpen ? 'flex h-[90vh] justify-center gap-12 text-center' : 'hidden items-center  '} 
          absolute right-0 top-[117%] w-full flex-col  bg-primary md:static md:mr-8 md:flex-row`}
        >
          <li>
            <a
              className={`1  inline-block bg-transparent px-4  py-1 uppercase hover:bg-white hover:text-black
                ${isNavOpen ? 'w-[90%] rounded-lg py-3' : 'rounded-full'} `}
              href="#Home"
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={navButtonStyle}
              href="#About Us"
              onClick={() => setIsNavOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className={navButtonStyle}
              href="#Swap"
              onClick={() => setIsNavOpen(false)}
            >
              Swap
            </a>
          </li>
          <li>
            <a
              className={navButtonStyle}
              href="#Donate"
              onClick={() => setIsNavOpen(false)}
            >
              Donate
            </a>
          </li>
          <li>
            <a
              className={navButtonStyle}
              href="#Get Started"
              onClick={() => setIsNavOpen(false)}
            >
              Get Started
            </a>
          </li>
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
        <img src="Images/Search.png" alt="Search Icon" />
      </div>
    </header>
  );
}
