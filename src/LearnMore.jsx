import { motion } from 'motion/react';

const sideImageVariants = {
  hidden: { x: -400 },
  visible: { x: 0 },
  hovered: { x: -200 },
};

export function LearnMore() {
  return (
    <div
      id="learn"
      className="my-10 flex flex-col-reverse gap-10 lg:my-0 lg:flex-row"
    >
      <div className="lg:basis-2/5">
        <motion.img
          variants={sideImageVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hovered"
          transition={{ duration: 1 }}
          src="/LearnMore/51.png"
          alt="Crypto Image"
          className=""
        />
      </div>

      <section className="basis-2/5 flex-col items-center gap-2 self-center text-center  lg:flex">
        <motion.h2
          initial={{ scale: 0, rotate: 360 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring' }}
          className="text-6xl sm:text-7xl 2xl:text-8xl "
        >
          All About <br /> Market Caps
        </motion.h2>
        <motion.p
          initial={{ scale: 0, rotate: 360 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring' }}
          className="mx-auto mt-8 max-w-96 text-sm"
        >
          Market capitalization, or <strong>market cap</strong>, is one of the
          key indicators used to measure the value and size of a cryptocurrency.
          It is calculated by multiplying the current price of a coin by its
          circulating supply.
          <br />
          <br />
          Understanding market caps helps you compare projects, identify risks,
          and spot growth opportunities—whether you’re exploring small-cap coins
          with high potential or established large-cap assets that bring
          stability.
        </motion.p>
        <button
          className="hover mt-6 rounded-full border-2 
          bg-transparent px-2 py-1 text-sm
          uppercase
          text-white duration-300
        hover:bg-white hover:text-primary sm:py-2 
        2xl:px-3

        "
        >
          Learn More
        </button>
      </section>
    </div>
  );
}
