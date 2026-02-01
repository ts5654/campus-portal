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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Standard mobile-friendly entrance
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Ourimpact = () => {
  const ourdata = [
    { icon: <FaUserGraduate className="mb-4 text-5xl text-blue-400" />, numbers: "10000+", heading: "Active Students" },
    { icon: <FaBuilding className="mb-4 text-5xl text-blue-400" />, numbers: "5+", heading: "Departments" },
    { icon: <FaCalendarAlt className="mb-4 text-5xl text-blue-400" />, numbers: "100+", heading: "Events Hosted" },
    { icon: <FaBriefcase className="mb-4 text-5xl text-blue-400" />, numbers: "3000+", heading: "Placements" },
    { icon: <FaUserPlus className="mb-4 text-5xl text-blue-400" />, numbers: "500+", heading: "New Joinees" },
    { icon: <FaGlobe className="mb-4 text-5xl text-blue-400" />, numbers: "20+", heading: "Global Collaborations" },
  ];

  return (
    <section className="w-full px-6 py-20 text-center text-white bg-black md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-black tracking-tight md:text-6xl">
          Our <span className="text-blue-500">Impact</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Mobile par performance ke liye 'once: true'
        >
          {ourdata.map((currelem, index) => (
            <motion.div
              key={index}
              className="flex w-full" // Cards ki height same rakhne ke liye
              variants={cardVariants}
              whileHover={{ scale: 1.05 }} // Interactive feel for mobile touch
            >
              <div className="w-full">
                <OurCard data={currelem} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};