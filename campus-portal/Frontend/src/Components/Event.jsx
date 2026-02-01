import React from 'react';
import { Eventcards } from "./Eventcards";
import { useInView } from 'react-intersection-observer';

// Correctly import images from the assets folder
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

export const Events = () => {
    // We will observe the container of the event cards
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will only happen once
        threshold: 0.1,    // Trigger when 10% of the element is visible
    });

    const baseClasses = "transition-all duration-1000 transform";
    // This is the combined animation: slides from the right and up from the bottom
    const animatedClasses = `${inView ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-48 translate-y-12'}`;

    return (
        <div className="w-full px-4 py-16 text-white bg-black md:px-8">
            <h2 className="mb-12 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl animate-fade-in-up">
                Upcoming Events
            </h2>
            
            <div ref={ref} className="flex justify-between gap-6 overflow-x-auto carousel-container md:justify-center md:gap-8">
                {/* Dynamically apply animation classes based on `inView` state */}
                <div className={`carousel-item ${baseClasses} ${animatedClasses}`}>
                    <Eventcards
                        imageSrc={image1}
                        title="Code-a-thon 2025"
                        description="A 24-hour coding challenge for students. Join and win exciting prizes!"
                        date="25th Oct, 2025"
                    />
                </div>
                <div className={`carousel-item ${baseClasses} delay-200 ${animatedClasses}`}>
                    <Eventcards
                        imageSrc={image2}
                        title="Startup Summit"
                        description="Meet and learn from successful entrepreneurs. Your journey starts here."
                        date="15th Nov, 2025"
                    />
                </div>
                <div className={`carousel-item ${baseClasses} delay-400 ${animatedClasses}`}>
                    <Eventcards
                        imageSrc={image3}
                        title="Annual Fest"
                        description="The biggest event of the year! Live music, dance, and more."
                        date="1st Dec, 2025"
                    />
                </div>
            </div>
        </div>
    );
};