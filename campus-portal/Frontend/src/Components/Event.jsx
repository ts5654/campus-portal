import React from 'react';
import { Eventcards } from "./Eventcards";
import { useInView } from 'react-intersection-observer';

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

export const Events = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const baseClasses = "transition-all duration-1000 transform ease-out";
    // Mobile par X-axis slide thoda kam rakha hai taaki layout glitchy na lage
    const animatedClasses = `${inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-20 translate-y-12'}`;

    const eventData = [
        { img: image1, title: "Code-a-thon 2025", date: "25th Oct, 2025", desc: "A 24-hour coding challenge for students.", delay: "" },
        { img: image2, title: "Startup Summit", date: "15th Nov, 2025", desc: "Meet and learn from successful entrepreneurs.", delay: "delay-200" },
        { img: image3, title: "Annual Fest", date: "1st Dec, 2025", desc: "The biggest event of the year! Live music & dance.", delay: "delay-400" },
    ];

    return (
        <div className="w-full py-16 overflow-hidden text-white bg-black">
            <div className="px-6 md:px-8">
                <h2 className="mb-10 text-3xl font-black tracking-tight text-center md:text-5xl lg:text-6xl">
                    Upcoming <span className="text-blue-500">Events</span>
                </h2>
            </div>
            
            {/* Mobile: Horizontal Scroll with Snap effect
               Desktop: Centered Grid 
            */}
            <div 
                ref={ref} 
                className="flex gap-6 px-6 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:max-w-6xl md:mx-auto md:overflow-visible md:px-0"
            >
                {eventData.map((event, index) => (
                    <div 
                        key={index} 
                        className={`min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-center carousel-item ${baseClasses} ${event.delay} ${animatedClasses}`}
                    >
                        <Eventcards
                            imageSrc={event.img}
                            title={event.title}
                            description={event.desc}
                            date={event.date}
                        />
                    </div>
                ))}
            </div>

            {/* Hint for mobile users */}
            <p className="mt-2 text-xs text-center text-gray-500 md:hidden animate-pulse">
                Swipe left to see more →
            </p>
        </div>
    );
};