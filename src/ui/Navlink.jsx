import { motion } from 'framer-motion';

export default function Navlink({ link, setIsNavOpen, children }) {
  return (
    <li>
      <a
        href={link}
        className="flex items-center gap-1 text-daisy-950 duration-300 hover:text-daisy-600"
        onClick={() => setIsNavOpen(false)}
      >
        {children}
      </a>
    </li>
  );
}
