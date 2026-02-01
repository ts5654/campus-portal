import React from 'react';

export const CampusCard = ({ imageSrc, heading, para }) => {
    return (
        <div className="flex-shrink-0 w-64 overflow-hidden transition-transform transform shadow-xl colors rounded-xl hover:scale-105">
            {/* The Image */}
            <div className="relative w-full aspect-w-16 aspect-h-9">
                <img 
                    src={imageSrc} 
                    alt={heading} 
                    className="object-cover w-full h-full" 
                />
            </div>
            
            {/* The Text Content */}
            <div className="p-6 text-center text-white">
                <h3 className="mb-2 text-xl font-bold">{heading}</h3>
                <p className="text-sm text-gray-400">{para}</p>
            </div>
        </div>
    );
};