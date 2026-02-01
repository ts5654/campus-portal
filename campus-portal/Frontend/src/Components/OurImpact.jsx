"use client";

import React from "react";
import { motion } from "framer-motion";
import { OurCard } from "./OurCard";
import {
  FaUserGraduate,
  FaBuilding,
  FaCalendarAlt,
  FaBriefcase,
  FaUserPlus,
  FaGlobe,
} from "react-icons/fa";

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Card animation (dynamic for scroll up & down)
const cardVariants = {
  hidden: { opacity: 0, y: 100 }, // Coming from below
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hiddenTop: { opacity: 0, y: -100 }, // Coming from above
};

export const Ourimpact = () => {
  const ourdata = [
    {
      icon: <FaUserGraduate className="mb-4 text-5xl text-blue-400" />,
      numbers: "10000+",
      heading: "Active Students",
    },
    {
      icon: <FaBuilding className="mb-4 text-5xl text-blue-400" />,
      numbers: "5+",
      heading: "Departments",
    },
    {
      icon: <FaCalendarAlt className="mb-4 text-5xl text-blue-400" />,
      numbers: "100+",
      heading: "Events Hosted",
    },
    {
      icon: <FaBriefcase className="mb-4 text-5xl text-blue-400" />,
      numbers: "3000+",
      heading: "Placements",
    },
    {
      icon: <FaUserPlus className="mb-4 text-5xl text-blue-400" />,
      numbers: "500+",
      heading: "New Joinees",
    },
    {
      icon: <FaGlobe className="mb-4 text-5xl text-blue-400" />,
      numbers: "20+",
      heading: "Global Collaborations",
    },
  ];

  return (
    <div className="w-full px-4 py-32 text-center text-white bg-black">
      <h1 className="mb-8 text-4xl font-bold">Our Impact</h1>

      <motion.div
        className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // triggers multiple times on scroll
      >
        {ourdata.map((currelem, index) => (
          <motion.div
            key={index}
            className="p-1"
            variants={index % 2 === 0 ? cardVariants : { ...cardVariants, hidden: cardVariants.hiddenTop }} // odd cards from top, even from bottom
          >
            <OurCard data={currelem} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
