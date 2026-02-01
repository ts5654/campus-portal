import React from 'react';
import { useInView } from 'react-intersection-observer';

export const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation har baar chalegi
    threshold: 0.1,
  });

  const baseClasses = "transition-all duration-2000 transform";
  const animatedClasses = `${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center w-full h-screen p-4 text-center text-white bg-black">
      <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 ${baseClasses} ${animatedClasses}`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          Welcome to
        </span>
        <br />
        Smart Campus Portal
      </h1>
      <p className={`text-lg md:text-xl text-gray-400 mb-8 ${baseClasses} delay-200 ${animatedClasses}`}>
        Your one-stop solution for Attendance & College Events
        <br />
        <span className="text-sm">
          Experience the next-gen digital campus
        </span>
      </p>
      <div className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${baseClasses} delay-400 ${animatedClasses}`}>
        <a href="#events" className="px-6 py-3 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
          Get Started
        </a>
        <a href="#features" className="px-6 py-3 text-white transition-colors duration-300 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700">
          View Events
        </a>
      </div>
    </div>
  );
};