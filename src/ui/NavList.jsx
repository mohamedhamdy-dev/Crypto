import { TiInfoLarge } from 'react-icons/ti';
import { SlSocialDropbox } from 'react-icons/sl';
import { PiTrademarkRegisteredBold } from 'react-icons/pi';
import { ImProfile } from 'react-icons/im';
import { motion } from 'motion/react';

export default function NavList({ isMobile = false, closeNav }) {
  return (
    <>
      <li>
        <motion.a
          href="#about-us"
          className={`flex items-center gap-1  ${isMobile ? 'text-lg text-white' : ' text-base text-daisy-950  duration-300 hover:text-daisy-600'}`}
          onClick={closeNav}
        >
          <ImProfile className={`${isMobile ? 'size-8' : 'size-6'}`} />
          <span>About Us</span>
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#features"
          className={`flex items-center gap-1  ${isMobile ? 'text-lg text-white' : ' text-base text-daisy-950  duration-300 hover:text-daisy-600'}`}
          onClick={closeNav}
        >
          <SlSocialDropbox className={`${isMobile ? 'size-8' : 'size-6'}`} />
          <span>Features</span>
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#trading"
          className={`flex items-center gap-1  ${isMobile ? 'text-lg text-white' : ' text-base text-daisy-950  duration-300 hover:text-daisy-600'}`}
          onClick={closeNav}
        >
          <PiTrademarkRegisteredBold
            className={`${isMobile ? 'size-8' : 'size-6'}`}
          />
          <span>Trading</span>
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#learn"
          className={`flex items-center gap-1  ${isMobile ? 'text-lg text-white' : ' text-base text-daisy-950  duration-300 hover:text-daisy-600'}`}
          onClick={closeNav}
        >
          <TiInfoLarge className={`${isMobile ? 'size-8' : 'size-6'}`} />
          <span>Learn</span>
        </motion.a>
      </li>
    </>
  );
}
