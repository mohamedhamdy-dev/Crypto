import { motion } from 'motion/react';

const BenefitData = [
  {
    title: 'BENEFIT 01',
    text: 'Cryptocurrencies allow you to send and receive money instantly, anywhere in the world. No banks, no middlemen, and no delays—just fast, borderless transactions that work 24/7.',
  },
  {
    title: 'BENEFIT 02',
    text: 'Blockchain technology ensures security and transparency. Every transaction is recorded on a public ledger that cannot be altered, building trust without needing third parties.',
  },
  {
    title: 'BENEFIT 03',
    text: 'Crypto gives you full control over your assets. Unlike traditional finance, you own your private keys, which means your funds are truly yours—free from restrictions or freezes.',
  },
];

export function WhyCrypto() {
  return (
    <div className="overflow-x-clip bg-[#e7e7e7] text-primary">
      <div className="container relative mx-auto flex flex-col items-center gap-6 py-20 text-center lg:grid lg:grid-cols-3 lg:gap-x-28">
        <motion.h2
          initial={{ x: 400 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="text-center text-lg lg:col-span-3 lg:text-xl"
        >
          WE MADE IT EASIER
        </motion.h2>
        <motion.h3
          initial={{ x: -400 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="mb-20 text-center text-6xl lg:col-span-3 lg:text-7xl"
        >
          Why Crypto?
        </motion.h3>

        <div className=" lg:col-start-1">
          <Benefit benefit={BenefitData[0]} />
        </div>

        <div className=" lg:col-start-2">
          <Benefit benefit={BenefitData[1]} />
        </div>

        <div className=" lg:col-start-3">
          <Benefit benefit={BenefitData[2]} />
        </div>
      </div>
    </div>
  );
}

function Benefit({ benefit }) {
  const { title, text } = benefit;

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ type: 'spring' }}
    >
      <h4 className="mt-4 border-t-2 border-primary pt-3 text-base ">
        {title}
      </h4>
      <p className="text-sm">{text}</p>
    </motion.div>
  );
}
