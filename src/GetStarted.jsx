import Button from './ui/Button';
import FloatingImage from './ui/FloatingImage';
import { motion } from 'motion/react';
import { Modal } from './ui/Modal';
import { IoMdClose } from 'react-icons/io';

export function GetStarted() {
  return (
    <div id="trading" className="relative bg-[#e7e7e7] text-primary ">
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

          <Modal>
            <Modal.Trigger>
              <Button dark={true}>Learn More</Button>
            </Modal.Trigger>
            <Modal.Content>
              <GetStartedModalContent />
            </Modal.Content>
          </Modal>
        </section>

        <div className=" basis-2/4 ">
          <FloatingImage image="/GetStarted/41.png" />
        </div>
      </div>
    </div>
  );
}

function GetStartedModalContent() {
  return (
    <div className="relative max-w-lg rounded-2xl border-2 border-white bg-primary p-8 pt-12 text-white shadow-2xl">
      <h3 className="mb-4 text-2xl font-bold text-blue-400">
        Trading Made Easy
      </h3>

      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        Our decentralized platform is built for speed, simplicity, and full
        transparency. Trade without middlemen or hidden fees, and take complete
        control of your digital assets.
      </p>

      <ul className="mb-6 list-disc space-y-2 pl-6 text-sm text-gray-400">
        <li>⚡ Fast, secure transactions</li>
        <li>🔒 Full ownership of your assets</li>
        <li>🌍 Trade anytime, anywhere</li>
        <li>💸 No hidden fees or gatekeepers</li>
      </ul>

      <p className="mb-6 text-sm leading-relaxed text-gray-300">
        Whether you’re buying your first coin or diversifying your portfolio, we
        make crypto trading accessible and stress-free.
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
