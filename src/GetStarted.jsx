import FloatingImage from './ui/FloatingImage';
import { motion } from 'motion/react';

export function GetStarted() {
  return (
    <div id="trading" className="relative z-10 bg-[#e7e7e7] text-primary ">
      <div className="container mx-auto flex flex-col items-center gap-10 py-10 lg:flex-row lg:px-10">
        <section className=" flex basis-2/4 flex-col items-center gap-4 text-center lg:items-start lg:text-start">
          <motion.h2
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring' }}
            className="text-lg  lg:text-2xl"
          >
            Decentralized - 01
          </motion.h2>
          <motion.h3
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring' }}
            className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Trading <br /> Made Easy.
          </motion.h3>
          <motion.p
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring' }}
            className="lg:text-1xl mt-6 w-4/5 max-w-prose text-sm sm:text-base"
          >
            With <strong>Crypto</strong>, you get access to a decentralized
            trading platform built for speed, security, and simplicity. Buy,
            sell, and exchange digital assets in real time—without middlemen,
            hidden fees, or unnecessary complexity. Empower your finances and
            take full control of your crypto journey.
          </motion.p>
          <button className=" hover:border-primaryhover:bg-white mt-7  rounded-full border-2 border-transparent bg-primary px-3  py-2 text-white duration-300 hover:text-primary">
            GET STARTED
          </button>
        </section>

        <div className=" basis-2/4 ">
          <FloatingImage image="/GetStarted/41.png" />
        </div>
      </div>
    </div>
  );
}
