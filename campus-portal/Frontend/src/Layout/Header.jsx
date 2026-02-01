// src/components/Header.js

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Variants for the main header (slide-down animation)
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.2 } },
};

// Variants for the navigation container (stagger effect for children)
const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, // Start staggering after the header animation is done
      staggerChildren: 0.1, // Stagger each list item by 0.1 seconds
    },
  },
};

// Variants for each individual list item (fade-in and slide-up)
const liVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const Navbar = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-4 text-white bg-black shadow-md"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex items-center justify-around mx-auto">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">Smart Campus Portal</div>

        {/* New container for all navigation items */}
        <div className="flex items-center space-x-6">
          <nav>
            <motion.ul
              className="flex space-x-6"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li 
                variants={liVariants}
                whileHover={{ scale: 1.1, color: '#60a5fa' }} // Awesome hover animation
              >
                {/* Updated font size */}
                <Link to="/" className="text-lg transition-colors duration-300">Home</Link>
              </motion.li>
              <motion.li 
                variants={liVariants}
                whileHover={{ scale: 1.1, color: '#60a5fa' }} // Awesome hover animation
              >
                {/* Updated font size */}
                <Link to="/attendence" className="text-lg transition-colors duration-300">Attendance</Link>
              </motion.li>
              <motion.li 
                variants={liVariants}
                whileHover={{ scale: 1.1, color: '#60a5fa' }} // Awesome hover animation
              >
                <Link to="/event" className="text-lg transition-colors duration-300">Events</Link>
              </motion.li>
              <motion.li 
                variants={liVariants}
                whileHover={{ scale: 1.1, color: '#60a5fa' }} 
              >
                
                <Link to="/faculties" className="text-lg transition-colors duration-300">Faculties</Link>
              </motion.li>
              <motion.li 
                variants={liVariants}
                whileHover={{ scale: 1.1, color: '#60a5fa' }} 
              >
                
                <Link to="/notes" className="text-lg transition-colors duration-300">Notes</Link>
              </motion.li>
             
            </motion.ul>
          </nav>
          
          {/* Sign-in button with awesome hover and tap animations */}
          <motion.li
            variants={liVariants}
            whileHover={{ scale: 1.1, backgroundColor: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className="p-3 list-none bg-blue-600 cursor-pointer rounded-2xl"
          >
            {/* The sign-in link is already large */}
            <Link to="/login" className="transition-colors duration-300 hover:text-white">Sign-in</Link>
          </motion.li>
        </div>
      </div>
    </motion.header>
  );
};