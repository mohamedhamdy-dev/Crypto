import { motion } from 'motion/react';
import FeatureApp from './ui/FeatureApp';

const sections = [
  {
    title: '01 - Versatile',
    text: 'Crypto adapts to your needs, whether you are a beginner or a seasoned trader. Our platform is designed to support a wide range of currencies and investment strategies.',
  },
  {
    title: '03 - Transparent',
    text: 'We believe in clarity. Every transaction, rate, and fee is fully visible—no hidden charges, no surprises, just trust and transparency.',
  },
  {
    title: '02 - Easy To Use',
    text: 'With a clean and intuitive interface, Crypto makes trading and managing digital assets straightforward and stress-free.',
  },
  {
    title: '04 - Real Time',
    text: 'Stay ahead with live market data, instant updates, and fast transactions—giving you the power to act at the right moment.',
  },
];

export function Features() {
  return (
    <div
      id="features"
      className=" container mx-auto flex flex-col items-center gap-10 py-10 text-center md:grid md:grid-cols-2 lg:h-screen lg:grid-cols-3 lg:grid-rows-3 lg:gap-0"
    >
      <h2
        className=" col-span-2 row-span-1 mb-16 text-6xl md:text-8xl lg:col-span-1 lg:col-start-2
       lg:col-end-3 lg:-mt-32 lg:mb-0 "
      >
        Features
      </h2>

      <div className=" flex flex-col  lg:col-start-1  lg:row-start-2  lg:self-start">
        <FeatureSection sectionData={sections[0]} />
      </div>
      <div className=" flex flex-col lg:col-start-3  lg:row-start-2 lg:self-start ">
        <FeatureSection sectionData={sections[1]} />
      </div>
      <div className=" flex  flex-col  lg:col-start-1 lg:self-start  ">
        <FeatureSection sectionData={sections[2]} />
      </div>
      <div className=" flex  flex-col self-center lg:col-start-3 lg:self-start ">
        <FeatureSection sectionData={sections[3]} />
      </div>

      <div className="col-span-2 flex flex-col items-center justify-self-center sm:w-[65%] lg:col-start-2 lg:col-end-3 lg:row-span-3 lg:row-start-2 lg:-mt-20 xl:w-full ">
        <FeatureApp />
      </div>
    </div>
  );
}

function FeatureSection({ sectionData }) {
  const { title, text } = sectionData;
  return (
    <motion.section
      initial={{ scale: 0, rotate: 360 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring' }}
      className="text-balance text-center"
    >
      <h3 className="text-lg">{title}</h3>
      <p className=" mx-auto max-w-96 text-balance p-4 pt-2 text-sm">{text}</p>
    </motion.section>
  );
}
