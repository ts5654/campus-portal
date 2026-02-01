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
        threshold: 0.05, // Mobile par jaldi trigger ho isliye threshold kam kiya
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

    const baseClasses = "transition-all duration-700 ease-out transform"; // Duration thodi kam ki for snappiness
    
    const downAnimationClasses = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    const upAnimationClasses = inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10';

    const campusData = [
        { img: clubImage, title: "Student Clubs", desc: "Join a variety of clubs and extracurricular activities.", delay: "" },
        { img: announcementImage, title: "Announcements", desc: "Stay updated on the latest campus news and events.", delay: "delay-[150ms]" },
        { img: campusImage, title: "Campus Photos", desc: "Browse photos of the campus and its surroundings.", delay: "delay-[300ms]" },
        { img: sports, title: "Student Activities", desc: "Get involved in sports, arts, and initiatives.", delay: "delay-[450ms]" },
    ];

    return (
        <section className="w-full px-6 py-16 overflow-hidden text-white bg-black md:px-12">
            <h1 className="mb-12 text-3xl font-black tracking-tight text-center md:text-5xl lg:text-6xl">
                Campus <span className="text-blue-500">Life</span>
            </h1>

            <div 
                ref={ref} 
                className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4"
            >
                {campusData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`${baseClasses} ${item.delay} ${scrollingUp ? upAnimationClasses : downAnimationClasses}`}
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