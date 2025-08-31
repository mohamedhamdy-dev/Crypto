import { motion } from 'motion/react';

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
      className=" container mx-auto mt-24 flex h-screen
     flex-col items-center gap-10 text-center md:grid md:grid-cols-2
     lg:mt-0 lg:grid-cols-3  lg:grid-rows-3  lg:gap-0"
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

      <div
        className=" col-span-2 flex  flex-col
      items-center justify-self-center pb-14 sm:w-[65%]
       lg:col-start-2 lg:col-end-3 lg:row-span-3  lg:row-start-2 lg:-mt-20  xl:w-full "
      >
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
      <p className=" mx-auto  max-w-96 text-balance p-4 pt-2 text-sm">{text}</p>
    </motion.section>
  );
}

function FeatureApp() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: 'spring' }}
      className="flex flex-col gap-4 rounded-2xl bg-white  px-14 py-16 pt-8 text-primary"
    >
      <div className="mx-auto w-fit ">
        <img src="/logo.png" alt="" />
        <h4 className="">Coinmyte.</h4>
      </div>
      <div className="">EURO to GC</div>
      <form action="">
        <div className=" flex flex-col gap-4">
          <label className="block">
            From
            <input
              className="mt-1 block w-full rounded-full border-[1px] border-primary px-4 py-[6px] text-base"
              type="text"
            />
          </label>
          <label className="block">
            To
            <input
              className="mt-1 block w-full  rounded-full border-[1px] border-primary px-4 py-[6px] text-base"
              type="text"
            />
          </label>
          <div className="">YOUR TOTAL</div>
          <div className="">1.00 GC = 10.000.000</div>
          <button className=" self-center rounded-full border-2 border-primary bg-primary px-3 py-[6px] text-white duration-300 hover:bg-white hover:text-primary">
            TRADE NOW
          </button>
        </div>
      </form>

      <div className="flex justify-between gap-2 text-sm text-gray-800">
        <a className="  hover:text-primary" href="#pricing">
          PRICING
        </a>
        <a className=" hover:text-primary" href="#faqs">
          FAQS
        </a>
        <a className="  hover:text-primary" href="#trading">
          TRADING BASICS
        </a>
      </div>
    </motion.div>
  );
}
