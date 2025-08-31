import { useRef } from 'react';
import { motion } from 'framer-motion';

export function About() {
  const refConstraints = useRef();

  return (
    <section
      id="about-us"
      ref={refConstraints}
      className="container mx-auto my-14 flex h-screen flex-col items-center gap-8 text-white lg:my-0 lg:grid  lg:grid-cols-4 "
    >
      <div className="flex flex-col-reverse justify-center">
        <motion.img
          initial={{ y: -200, cursor: 'grab' }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring' }}
          drag
          dragConstraints={refConstraints}
          whileDrag={{ cursor: 'grabbing' }}
          className=" lg:-ml-10 lg:mt-96"
          src="/About/21.png"
          alt="Crypto Image"
        />
      </div>

      <motion.article
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring' }}
        className="col-span-2 flex flex-col items-center justify-between gap-10   text-center "
      >
        <h5 className="text-lg lg:text-xl ">WHAT WE STAND FOR</h5>
        <h6 className="text-5xl  lg:text-8xl">Trusted and Transparent.</h6>
        <p className=" max-w-prose ">
          At <strong>Crypto</strong>, we believe that financial freedom should
          be accessible to everyone. Our mission is to make cryptocurrency
          simple, secure, and transparent—empowering individuals to invest,
          trade, and manage digital assets with confidence. By combining
          cutting-edge technology with clear communication, we ensure that trust
          remains at the heart of everything we do.
        </p>
      </motion.article>

      <div className="flex flex-col-reverse justify-center">
        <motion.img
          initial={{ y: 200, cursor: 'grab' }}
          whileInView={{ y: 0 }}
          transition={{ type: 'spring' }}
          drag
          dragConstraints={refConstraints}
          whileDrag={{ cursor: 'grabbing' }}
          className="lg:-mr-8 lg:mb-96"
          src="/About/22.png"
          alt="Crypto Image"
        />
      </div>
    </section>
  );
}
