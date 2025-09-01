import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-8 py-10 text-white lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10 ">
      {/* Left section */}
      <motion.div
        initial={{ x: -80 }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring' }}
        className="flex flex-col justify-center gap-12"
      >
        <pre className="text-center text-xl tracking-wider lg:text-left lg:text-2xl">
          WE MADE It EASY
        </pre>

        <h2 className="mx-auto  text-center text-8xl font-bold leading-tight lg:text-left lg:text-5xl  xl:text-7xl">
          Trade Smarter.
        </h2>

        <div className="flex justify-center lg:justify-start">
          <button className=" rounded-full  border-2 border-white px-3 py-2 ">
            Get Started
          </button>
        </div>
      </motion.div>

      {/* Middle section (main image) */}
      <div className="mx-auto">
        <motion.img
          initial={{ scale: 0, rotate: 360 }}
          whileInView={{ scale: 1, rotate: 0 }}
          whileHover={{ rotate: 12 }}
          transition={{ type: 'spring' }}
          src="/Home/11.png"
          className="w-full object-cover "
          alt="Crypto trading"
        />
      </div>

      {/* Right section */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring' }}
        className="flex flex-col items-center justify-end text-center lg:items-start lg:text-left "
      >
        <div>
          <img
            className="duration-300 hover:scale-110 lg:-ml-7"
            src="/Home/12.png"
            alt="Decentralized network"
          />
        </div>
        <h2 className="mt-6 font-semibold lg:text-lg">Decentralized Power</h2>
        <p className="w-[90%] max-w-96 text-xs leading-relaxed sm:text-sm">
          Say goodbye to banks and middlemen. With blockchain, your money moves
          instantly, securely, and globally—giving you full control over your
          assets. Experience finance without borders.
        </p>
      </motion.div>
    </div>
  );
}
