import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdContacts } from 'react-icons/md';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative order-1 inline-block md:order-3">
      {/* Trigger Button */}
      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring' }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <MdContacts className="size-8 cursor-pointer duration-300 hover:scale-110" />
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-3 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black/5 md:left-auto md:right-0 md:mt-5 lg:mt-3"
          >
            <ul className="space-y-2 p-2 text-gray-700">
              <li>
                <a
                  href="https://www.linkedin.com/in/mohamed-hamdy-219a35372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100"
                >
                  <FaLinkedin className="text-blue-600" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:mohamed.hamdy.41220@gmail.com"
                  className="flex items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100"
                >
                  <SiGmail className="text-red-500" /> Gmail
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/01022736402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100"
                >
                  <FaWhatsapp className="text-green-500" /> WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
