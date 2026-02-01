import React from "react";
import { motion } from "framer-motion";
import axios from "axios"; // ✅ Fixed import

const API_URL = "http://localhost:5000/api/events";

export const ComingEvent = ({ data, index, onDelete }) => {
  
  // Animation for the main card
  const cardVariants = {
    hidden: { opacity: 0, y: 75, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation for inner elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // ✅ Delete function
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      await axios.delete(`${API_URL}/${data._id}`);
      onDelete(data._id); // Notify parent to remove event from UI
      alert("✅ Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("❌ Failed to delete event. Check your backend connection.");
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg colors group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{
        y: -10,
        rotate: -1,
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)",
        transition: { duration: 0.2, type: "spring", stiffness: 200 },
      }}
    >
      <div className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300 ease-in-out shadow-[0_0_8px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] group-hover:border-blue-500 border border-transparent"></div>

      <motion.img
        className="object-cover w-full h-36"
        src={data.imageUrl}
        alt={data.heading}
        variants={childVariants}
      />

      <div className="p-4">
        <motion.h2
          className="mb-1 text-xl font-bold text-white"
          variants={childVariants}
        >
          {data.heading}
        </motion.h2>
        <motion.p
          className="mb-2 text-sm font-light text-gray-400"
          variants={childVariants}
        >
          {data.date}
        </motion.p>
        <motion.p
          className="mb-4 text-sm text-gray-300"
          variants={childVariants}
        >
          {data.content}
        </motion.p>

        <motion.button
          className="w-full py-2 text-sm font-semibold text-white transition-colors duration-300 bg-red-600 rounded-lg hover:bg-red-700"
          variants={childVariants}
          onClick={handleDelete}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );
};
