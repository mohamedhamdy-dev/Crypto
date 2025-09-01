import { motion } from 'motion/react';
import Button from './ui/Button';
import { Modal } from './ui/Modal';
import { IoMdClose } from 'react-icons/io';

export function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-8 py-10  text-white lg:grid lg:grid-cols-3 lg:gap-10 lg:px-10 3xl:py-20  ">
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
          <Modal>
            <Modal.Trigger>
              <Button dark={false}>Learn More</Button>
            </Modal.Trigger>
            <Modal.Content>
              <HomeModalContent />
            </Modal.Content>
          </Modal>
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

function HomeModalContent() {
  return (
    <div className="max-w-lg rounded-2xl border-2 border-white bg-primary p-8 pt-12 text-white shadow-2xl">
      <h3 className="mb-4 text-2xl font-bold text-blue-400">
        Smarter Trading, Simplified
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        Our platform empowers you to trade seamlessly with advanced analytics,
        AI-driven insights, and decentralized security. Whether you’re a
        beginner or a pro, we give you the tools to make confident decisions in
        the ever-changing crypto market.
      </p>

      <ul className="mb-6 list-disc space-y-2 pl-6 text-sm text-gray-400">
        <li>🔒 Secure blockchain transactions</li>
        <li>📊 Real-time analytics & alerts</li>
        <li>⚡ Lightning-fast execution</li>
        <li>🌍 Trade globally without borders</li>
      </ul>

      <div className="flex justify-end">
        <Modal.Close>
          <button className="rounded-full border-2 border-white bg-white px-6 py-2 font-semibold text-primary shadow transition duration-300 hover:bg-primary hover:text-white  active:translate-y-2">
            Got it
          </button>
        </Modal.Close>
      </div>

      <Modal.Close>
        <IoMdClose className=" absolute right-4 top-4 size-6 cursor-pointer duration-300 hover:rotate-180" />
      </Modal.Close>
    </div>
  );
}
