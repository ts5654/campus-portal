import React from 'react';

export const CampusCard = ({ imageSrc, heading, para }) => {
    return (
        /* w-64 ko hata kar w-full kiya taaki grid mein fit ho sake */
        <div className="flex-shrink-0 w-full overflow-hidden transition-all duration-300 transform shadow-2xl bg-gray-900/50 border border-gray-800 rounded-2xl hover:scale-[1.03] group">
            
            {/* The Image Container */}
            <div className="relative w-full aspect-video overflow-hidden">
                <img 
                    src={imageSrc} 
                    alt={heading} 
                    /* aspect-video aur object-cover images ko khichne nahi denge */
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Subtle Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* The Text Content */}
            <div className="p-5 sm:p-6 text-center text-white">
                <h3 className="mb-2 text-lg sm:text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                    {heading}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {para}
                </p>
            </div>
        </div>
    );
};