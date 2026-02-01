import React from 'react';
import { motion } from 'framer-motion';

export const NotesCard = ({ data }) => {
    const { imgurl, heading, Download } = data;

    return (
        <motion.div
            className="flex flex-col overflow-hidden rounded-lg shadow-xl colors"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
            <div className="flex justify-center p-4">
                <img 
                    src={imgurl} 
                    alt={heading} 
                    className="object-contain w-32 h-32" 
                />
            </div>

            <div className="flex flex-col flex-grow p-4">
                <h2 className="mb-2 text-xl font-bold text-center text-white">{heading}</h2>

                <div className="flex flex-col mt-auto space-y-2">

                    <motion.a
                        href={Download}
                        download   // <-- Yaha magic hota hai!
                        className="py-2 m-auto font-medium text-center text-white bg-blue-600 rounded-md px-4"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Download Pdf Notes
                    </motion.a>

                </div>
            </div>
        </motion.div>
    );
};
