import React from 'react';

export const CampusCard = ({ imageSrc, heading, para }) => {
    return (
        <div className="w-full md:w-[300px] bg-gray-900 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative w-full h-40">
                <img 
                    src={imageSrc} 
                    alt={heading} 
                    className="object-cover w-full h-full" 
                />
            </div>
            <div className="p-6 text-center text-white">
                <h3 className="mb-2 text-xl font-bold">{heading}</h3>
                <p className="text-gray-400">{para}</p>
            </div>
        </div>
    );
};