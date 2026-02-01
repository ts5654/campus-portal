import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CampusCard } from "./CampusCards";

import clubImage from "../assets/clubImage.png";
import announcementImage from "../assets/announcementImage.png";
import campusImage from "../assets/campusImage.png";
import sports from "../assets/sports.jpg";

export const Campus = () => {
    const [scrollingUp, setScrollingUp] = useState(false);
    const { ref, inView } = useInView({
        // Mobile par thoda pehle trigger karne ke liye threshold kam rakha hai
        threshold: 0.05, 
        triggerOnce: false, 
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY < lastScrollY) {
                        setScrollingUp(true);
                    } else {
                        setScrollingUp(false);
                    }
                    lastScrollY = window.scrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile par animations ko 0.7s rakha hai (Laptop par ye 1s tha)
    const baseClasses = "transition-all duration-700 ease-out transform"; 
    
    // Mobile par translate-y ko 10 se 8 kar diya taaki animation screen ke bahar se na aaye
    const downAnimationClasses = inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95';
    const upAnimationClasses = inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95';

    const campusData = [
        { img: clubImage, title: "Student Clubs", desc: "Join a variety of clubs and extracurricular activities.", delay: "" },
        { img: announcementImage, title: "Announcements", desc: "Stay updated on the latest campus news.", delay: "sm:delay-[150ms]" },
        { img: campusImage, title: "Campus Photos", desc: "Browse photos of the campus and surroundings.", delay: "sm:delay-[300ms]" },
        { img: sports, title: "Student Activities", desc: "Get involved in sports and student-led initiatives.", delay: "sm:delay-[450ms]" },
    ];

    return (
        <section className="w-full px-5 py-16 overflow-hidden text-white bg-black md:px-12">
            <h1 className="mb-10 text-3xl font-black tracking-tight text-center md:text-5xl lg:text-6xl">
                Campus <span className="text-blue-500">Life</span>
            </h1>

            {/* Grid layout for Mobile (1 col), Tablet (2 cols), Laptop (4 cols) */}
            <div 
                ref={ref} 
                className="grid grid-cols-1 gap-10 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
            >
                {campusData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`w-full mx-auto max-w-[350px] sm:max-w-none ${baseClasses} ${item.delay} ${scrollingUp ? upAnimationClasses : downAnimationClasses}`}
                    >
                        <CampusCard 
                            imageSrc={item.img} 
                            heading={item.title} 
                            para={item.desc} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};