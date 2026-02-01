import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BsFingerprint, BsCalendarEvent, BsBarChart } from 'react-icons/bs';

export const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const baseClasses = "transition-all duration-700 transform ease-out";
  // Mobile par 'rotate' animation thodi subtle rakhi hai taaki scrolling jittery na lage
  const animatedClasses = inView ? 'opacity-100 scale-100 rotate-0 translate-y-0' : 'opacity-0 scale-90 rotate-3 translate-y-10';

  const features = [
    {
      icon: <BsFingerprint />,
      title: "Smart Attendance",
      desc: "Mark and track attendance digitally with just one tap.",
      delay: "delay-[200ms]",
      color: "from-blue-500/20"
    },
    {
      icon: <BsCalendarEvent />,
      title: "Event Management",
      desc: "Never miss a beat. Stay updated with all campus events.",
      delay: "delay-[400ms]",
      color: "from-purple-500/20"
    },
    {
      icon: <BsBarChart />,
      title: "Student Dashboard",
      desc: "Your academic performance and records in one place.",
      delay: "delay-[600ms]",
      color: "from-emerald-500/20"
    }
  ];

  return (
    <section className="w-full px-6 py-20 text-white bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl lg:text-6xl">
            Our <span className="text-blue-500">Key Features</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-500 md:text-lg">
            Everything you need to manage your campus life efficiently and digitally.
          </p>
        </div>

        {/* Responsive Grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-10"
        >
          {features.map((f, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors ${baseClasses} ${f.delay} ${animatedClasses}`}
            >
              {/* Background Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-4 mb-6 text-5xl text-blue-400 transition-transform duration-500 bg-gray-800 rounded-2xl md:text-6xl group-hover:scale-110">
                  {f.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="leading-relaxed text-gray-400">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};