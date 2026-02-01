import React from 'react';
import { useInView } from 'react-intersection-observer';

export const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const baseClasses = "transition-all transform duration-1000 ease-out"; 
  const animatedClasses = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 overflow-hidden text-center text-white bg-black sm:px-6">
      
      {/* Background Decor - Responsive Blur Blobs */}
      <div className="absolute top-10 left-[-10%] w-48 h-48 md:w-64 md:h-64 bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-48 h-48 md:w-64 md:h-64 bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="z-10 max-w-4xl mx-auto">
        <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 ${baseClasses} ${animatedClasses}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
            Welcome to
          </span>
          <br />
          <span className="inline-block mt-2 drop-shadow-2xl">Smart Campus</span>
        </h1>

        <p className={`max-w-xl mx-auto text-base sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 leading-relaxed px-2 ${baseClasses} delay-300 ${animatedClasses}`}>
          Your one-stop solution for <span className="font-medium text-blue-400">Attendance</span> & <span className="font-medium text-blue-400">College Events</span>.
          <span className="hidden sm:block mt-4 text-sm md:text-base font-light tracking-[0.2em] uppercase text-gray-500">
            Experience the next-gen digital campus
          </span>
        </p>

        {/* Responsive Button Group */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xs sm:max-w-none mx-auto ${baseClasses} delay-500 ${animatedClasses}`}>
          <a 
            href="#events" 
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-center"
          >
            Get Started
          </a>
          <a 
            href="#features" 
            className="w-full px-8 py-4 text-base font-semibold text-center text-white transition-all border sm:w-auto sm:text-lg bg-white/5 border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            View Events
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile to save space */}
      <div className="absolute hidden text-gray-600 bottom-6 sm:bottom-10 animate-bounce xs:block">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="