import React from 'react';
import "../index.css"
export const Eventcards = ({ imageSrc, title, description, date }) => {
    return (
        <div className="relative w-[320px] m-2 h-[350px]">
            <div className="flip-card-inner">
                {/* Front of the card */}
                <div className="p-0 text-white transition-transform duration-500 ease-in-out shadow-xl flip-card-front rounded-xl bg-red">
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className="object-cover w-full h-40 rounded-t-xl"
                    />
                    <div className="p-6 colors">
                        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                        <p className="mb-4 text-sm text-gray-300">{description}</p>
                        <p className="text-sm font-semibold text-blue-400">Date: {date}</p>
                    </div>
                </div>

                {/* Back of the card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white transition-transform duration-500 ease-in-out transform bg-blue-600 shadow-xl flip-card-back rounded-xl rotate-y-180">
                    <h3 className="mb-4 text-2xl font-bold">Join Us!</h3>
                    <p className="text-base text-white">
                        Don't miss out on this incredible event. Register now and be part of the excitement!
                    </p>
                    <button className="px-4 py-2 mt-6 font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-200">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};