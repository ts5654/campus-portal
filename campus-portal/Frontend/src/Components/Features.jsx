import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BsFingerprint, BsCalendarEvent, BsBarChart } from 'react-icons/bs';

export const Features = () => {
  // Use `triggerOnce: false` to re-trigger the animation on any scroll
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const baseClasses = "transition-all duration-1000 transform";
  // These classes control the rotate and scale animation
  const animatedClasses = `${inView ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-6'}`;

  return (
    <div className="w-full px-4 py-16 text-white bg-black md:px-8">
      <h2 className="mb-12 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl">
        Our Key Features
      </h2>

      <div ref={ref} className="flex flex-wrap justify-center max-w-6xl gap-6 mx-auto md:gap-8">
        {/* Smart Attendance Card */}
        <div className={`w-full md:w-1/3 lg:w-1/4 p-6 colors rounded-xl shadow-xl flex flex-col items-center text-center ${baseClasses} delay-200 ${animatedClasses}`}>
          <BsFingerprint className="mb-4 text-4xl text-blue-400 md:text-5xl lg:text-6xl" />
          <h3 className="mb-2 text-2xl font-bold">Smart Attendance</h3>
          <p className="text-gray-400">Mark and track attendance digitally.</p>
        </div>

        {/* Event Management Card */}
        <div className={`w-full md:w-1/3 lg:w-1/4 p-6 colors rounded-xl shadow-xl flex flex-col items-center text-center ${baseClasses} delay-400 ${animatedClasses}`}>
          <BsCalendarEvent className="mb-4 text-4xl text-blue-400 md:text-5xl lg:text-6xl" />
          <h3 className="mb-2 text-2xl font-bold">Event Management</h3>
          <p className="text-gray-400">Stay updated with campus events.</p>
        </div>

        {/* Student Dashboard Card */}
        <div className={`w-full md:w-1/3 lg:w-1/4 p-6 colors rounded-xl shadow-xl flex flex-col items-center text-center ${baseClasses} delay-600 ${animatedClasses}`}>
          <BsBarChart className="mb-4 text-4xl text-blue-400 md:text-5xl lg:text-6xl" />
          <h3 className="mb-2 text-2xl font-bold">Student Dashboard</h3>
          <p className="text-gray-400">View records and performance.</p>
        </div>
      </div>
    </div>
  );
};