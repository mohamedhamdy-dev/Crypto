import { motion } from 'motion/react';

export default function Navlink({ link, setIsNavOpen, text, icon }) {
  return (
    <li>
      <motion.a
        href={link}
        className="flex items-center gap-1 text-daisy-950 duration-300  hover:text-daisy-600"
        onClick={() => setIsNavOpen(false)}
      >
        <div>{icon}</div>
        <span>{text}</span>
      </motion.a>
    </li>
  );
}
