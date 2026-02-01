import React from "react";
import { motion } from "framer-motion";

// ✅ Faculty Card Component
export const Facul = ({ data, onEdit, onDelete }) => {
  return (
    <motion.div
      className="flex flex-col w-full max-w-sm overflow-hidden text-white transition-all duration-300 transform rounded-lg shadow-xl bg-gray-800 hover:scale-[1.02] hover:shadow-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      {/* Faculty Image */}
      <motion.div
        className="w-full h-auto overflow-hidden bg-gray-700 max-h-60"
        variants={{
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
        }}
      >
        <img
          src={data.photo}
          alt={`Profile photo of ${data.name}`}
          className="object-cover object-top w-full h-full"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col justify-between flex-grow p-4 space-y-4"
        variants={{
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
        }}
      >
        <div>
          <h3 className="mb-1 text-xl font-bold text-blue-400 md:text-2xl">{data.name}</h3>
          <p className="text-sm text-gray-400 md:text-base">{data.about}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-2 space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            
            whileTap={{ scale: 0.95 }}
            onClick={() => onEdit(data)}
            className="flex-1 px-3 py-2 text-sm font-semibold text-white transition duration-300 bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            ✏️ Edit
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onDelete(data.id)} 
            className="flex-1 px-3 py-2 text-sm font-semibold text-white transition duration-300 bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            🗑️ Delete
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
    