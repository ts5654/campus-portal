"use client";

import React from "react";
import { motion } from "framer-motion";

export const OurCard = ({ data }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center p-4 overflow-hidden text-center transition-all duration-300 transform rounded-lg shadow-lg colors group hover:scale-105"
      initial={{ opacity: 0, y: 100 }} // hidden (bottom)
      whileInView={{ opacity: 1, y: 0 }} // animate to center
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // triggers on scroll down & scroll up
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 transition-transform duration-500 transform -translate-x-full -skew-x-12 bg-gradient-to-r from-blue-500 to-transparent group-hover:translate-x-full" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex justify-center mb-4">{data.icon}</div>
        <h1 className="mb-1 text-3xl font-bold text-blue-400">{data.numbers}</h1>
        <h2 className="text-lg text-gray-300">{data.heading}</h2>
      </div>
    </motion.div>
  );
};
