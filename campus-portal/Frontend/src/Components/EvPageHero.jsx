// EvPageHero.js

import React from "react";
import { motion } from "framer-motion";

export const EvPage = ({ data }) => {
  // Define animation states (variants)
  const heroVariants = {
    hidden: { scale: 0.9, y: 50, opacity: 0 },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative w-full md:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden shadow-lg mx-auto"
      // Apply the animation variants and props
      variants={heroVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* Background Image */}
      <img
        src={data.imageUrl}
        alt={data.heading}
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay to darken the image for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">
          {data.heading}
        </h1>
        <h2 className="mb-4 text-xl font-medium text-gray-300">
          {data.date1}
        </h2>
        <p className="mb-6 text-lg text-gray-200">
          {data.para}
        </p>
        <motion.button 
          className="self-start px-6 py-3 text-lg font-semibold transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
          whileHover={{ scale: 1.05 }} // Subtle button animation
          whileTap={{ scale: 0.95 }}
        >
          Register for Event
        </motion.button>
      </div>
    </motion.div>
  );
};