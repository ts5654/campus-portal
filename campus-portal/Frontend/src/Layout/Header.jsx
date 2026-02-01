import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons install kar lena: npm install react-icons

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

const liVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Attendance', path: '/attendence' },
    { name: 'Events', path: '/event' },
    { name: 'Faculties', path: '/faculties' },
    { name: 'Notes', path: '/notes' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-4 text-white bg-black shadow-md"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:justify-around">
        {/* Logo */}
        <div className="text-xl font-bold md:text-2xl">Smart Campus</div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-6 md:flex">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ scale: 1.1, color: '#60a5fa' }}>
                <Link to={link.path} className="text-lg">{link.name}</Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-blue-600 rounded-2xl"
          >
            <Link to="/login">Sign-in</Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 w-full overflow-hidden border-t border-gray-800 md:hidden bg-black/90 top-full"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name} 
                  variants={liVariants} 
                  initial="hidden" 
                  animate="visible"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={link.path} className="block text-xl hover:text-blue-400">{link.name}</Link>
                </motion.li>
              ))}
              <motion.div
                className="pt-4"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/login" className="block p-3 text-center bg-blue-600 rounded-xl">Sign-in</Link>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};