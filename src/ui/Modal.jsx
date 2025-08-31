// // Modal.jsx
// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   useRef,
//   cloneElement,
// } from 'react';
// import { createPortal } from 'react-dom';
// import { AnimatePresence, motion } from 'framer-motion';

// const ModalContext = createContext(null);

// export default function Modal({ children, defaultOpen = false, onOpenChange }) {
//   const [open, setOpen] = useState(defaultOpen);

//   const openModal = () => {
//     setOpen(true);
//     onOpenChange?.(true);
//   };
//   const closeModal = () => {
//     setOpen(false);
//     onOpenChange?.(false);
//   };

//   // Close on ESC key
//   useEffect(() => {
//     if (!open) return;
//     const handleEsc = (e) => e.key === 'Escape' && closeModal();
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [open]);

//   // Lock background scroll
//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, [open]);

//   return (
//     <ModalContext.Provider value={{ open, openModal, closeModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// // -------- Subcomponents --------

// // Trigger: wraps a button or any element
// Modal.Trigger = function Trigger({ children }) {
//   const { openModal } = useContext(ModalContext);
//   return cloneElement(children, {
//     onClick: (e) => {
//       children.props.onClick?.(e);
//       openModal();
//     },
//   });
// };

// // Overlay (uses portal)
// Modal.Overlay = function Overlay({ children }) {
//   const { open, closeModal } = useContext(ModalContext);
//   const [mounted, setMounted] = useState(false);
//   const portalRef = useRef(null);

//   useEffect(() => {
//     portalRef.current = document.createElement('div');
//     document.body.appendChild(portalRef.current);
//     setMounted(true);
//     return () => {
//       document.body.removeChild(portalRef.current);
//     };
//   }, []);

//   if (!mounted || !portalRef.current) return null;

//   return createPortal(
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           key="overlay"
//           className="fixed inset-0 z-[1000] flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={closeModal} // clicking outside closes
//         >
//           <div className="absolute inset-0 bg-black/50" aria-hidden />
//           <div
//             className="relative z-[1001]"
//             onClick={(e) => e.stopPropagation()} // prevent close on modal click
//           >
//             {children}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>,
//     portalRef.current,
//   );
// };

// // Content
// Modal.Content = function Content({ children, className = '' }) {
//   const { open } = useContext(ModalContext);
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           key="content"
//           role="dialog"
//           aria-modal="true"
//           className={
//             'w-[92vw] max-w-md rounded-2xl bg-white p-6 shadow-xl ' + className
//           }
//           initial={{ opacity: 0, y: 20, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 20, scale: 0.95 }}
//           transition={{ duration: 0.25 }}
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Declarative close wrapper
// Modal.Close = function Close({ children }) {
//   const { closeModal } = useContext(ModalContext);
//   return cloneElement(children, {
//     onClick: (e) => {
//       children.props.onClick?.(e);
//       closeModal();
//     },
//   });
// };

// // Header / Body / Footer
// Modal.Header = function Header({ children, withClose = false }) {
//   const { closeModal } = useContext(ModalContext);
//   return (
//     <div className="mb-4 flex items-start justify-between gap-4">
//       <h2 className="text-xl font-semibold">{children}</h2>
//       {withClose && (
//         <button
//           aria-label="Close"
//           className="rounded-lg p-1.5 hover:bg-black/5"
//           onClick={closeModal}
//         >
//           ×
//         </button>
//       )}
//     </div>
//   );
// };
// Modal.Body = ({ children }) => <div className="mb-4">{children}</div>;
// Modal.Footer = ({ children }) => (
//   <div className="mt-2 flex justify-end gap-2">{children}</div>
// );
