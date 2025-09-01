import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useWindowSize } from './hooks/useWindowSize';

export function About() {
  const refConstraints = useRef();
  const { width } = useWindowSize();

  const isDesktop = width > 1024;

  return (
    <section
      id="about-us"
      ref={refConstraints}
      className="container mx-auto flex flex-col items-center gap-8 py-10 text-white sm:py-0  lg:grid lg:h-screen lg:grid-cols-4"
    >
      <div className="flex h-full  flex-col justify-end  lg:py-28">
        <motion.img
          initial={isDesktop ? { y: -200, cursor: 'grab' } : { x: -200 }}
          whileInView={isDesktop ? { y: 0 } : { x: 0 }}
          transition={{ type: 'spring' }}
          drag
          dragConstraints={refConstraints}
          whileDrag={{ cursor: 'grabbing' }}
          src="/About/21.png"
          alt="Crypto Image"
        />
      </div>

      <motion.article
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring' }}
        className="col-span-2 flex flex-col items-center justify-between gap-10 text-center "
      >
        <h5 className="text-lg lg:text-xl">WHAT WE STAND FOR</h5>
        <h6 className="text-5xl  xl:text-7xl 2xl:text-8xl">
          Trusted and Transparent.
        </h6>
        <p className=" max-w-prose text-sm">
          At <strong>Crypto</strong>, we believe that financial freedom should
          be accessible to everyone. Our mission is to make cryptocurrency
          simple, secure, and transparent—empowering individuals to invest,
          trade, and manage digital assets with confidence. By combining
          cutting-edge technology with clear communication, we ensure that trust
          remains at the heart of everything we do.
        </p>
      </motion.article>

      <div className="flex h-full flex-col justify-start lg:py-28">
        <motion.img
          initial={
            isDesktop ? { y: 200, cursor: 'grab' } : { scale: 0, rotate: 360 }
          }
          whileInView={isDesktop ? { y: 0 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring' }}
          drag
          dragConstraints={refConstraints}
          whileDrag={{ cursor: 'grabbing' }}
          src="/About/22.png"
          alt="Crypto Image"
        />
      </div>
    </section>
  );
}
