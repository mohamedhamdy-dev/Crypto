import { motion } from 'motion/react';
import Button from './ui/Button';
import { Modal } from './ui/Modal';
import { IoMdClose } from 'react-icons/io';

const sideImageVariants = {
  hidden: { x: -400 },
  visible: { x: 0 },
  hovered: { x: -200 },
};

export function LearnMore() {
  return (
    <div
      id="learn"
      className="flex flex-col-reverse gap-10 py-10 lg:flex-row lg:gap-20"
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
          className="text-6xl sm:text-7xl 2xl:text-8xl"
        >
          All About <br /> Market Caps
        </motion.h2>
        <motion.p
          initial={{ scale: 0, rotate: 360 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring' }}
          className="mx-auto mb-4 mt-8 max-w-96 text-sm "
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

        <Modal>
          <Modal.Trigger>
            <Button dark={false}>Learn More</Button>
          </Modal.Trigger>
          <Modal.Content>
            <LearnMoreModalContent />
          </Modal.Content>
        </Modal>
      </section>
    </div>
  );
}
function LearnMoreModalContent() {
  return (
    <div className="relative max-w-lg rounded-2xl border-2 border-white bg-primary p-8 pt-12 text-white shadow-2xl">
      <h3 className="mb-4 text-2xl font-bold text-blue-400">
        Understanding Market Caps
      </h3>

      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        Market cap shows the overall value of a crypto project. It’s the coin
        price multiplied by its circulating supply—helping you judge scale,
        risk, and growth potential.
      </p>

      <ul className="mb-6 list-disc space-y-2 pl-6 text-sm text-gray-400">
        <li>💡 Small-cap: High risk, big upside</li>
        <li>⚖️ Mid-cap: Balanced growth</li>
        <li>🏦 Large-cap: Safer, established</li>
      </ul>

      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        Comparing market caps gives clearer insight than price alone.
      </p>

      <div className="flex justify-end">
        <Modal.Close>
          <button className="rounded-full border-2 border-white bg-white px-6 py-2 font-semibold text-primary shadow transition duration-300 hover:bg-primary hover:text-white active:translate-y-2">
            Got it
          </button>
        </Modal.Close>
      </div>

      <Modal.Close>
        <IoMdClose className="absolute right-4 top-4 size-6 cursor-pointer duration-300 hover:rotate-180" />
      </Modal.Close>
    </div>
  );
}
