import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CampusCard } from "./CampusCards";

// Import images (ensure these paths and names are correct)
import clubImage from "../assets/clubImage.png";
import announcementImage from "../assets/announcementImage.png";
import campusImage from "../assets/campusImage.png";
import sports from "../assets/sports.jpg";

export const Campus = () => {
    const [scrollingUp, setScrollingUp] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        // Set triggerOnce to false so the observer is always active
        triggerOnce: false, 
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                // User is scrolling up
                setScrollingUp(true);
            } else {
                // User is scrolling down
                setScrollingUp(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const baseClasses = "transition-all duration-1000 transform";
    
    // Animation for scrolling down (top to bottom)
    const downAnimationClasses = `${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;
    
    // Animation for scrolling up (bottom to top) - a slightly different look
    const upAnimationClasses = `${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`;

    return (
        <div className="w-full px-4 py-16 text-white bg-black md:px-8">
            <h1 className="mb-12 text-4xl font-extrabold text-center md:text-5xl lg:text-6xl">
                Campus Life
            </h1>
            <div ref={ref} className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
                <div className={`${baseClasses} ${scrollingUp ? upAnimationClasses : downAnimationClasses}`}>
                    <CampusCard 
                        imageSrc={clubImage} 
                        heading={"Student Clubs"} 
                        para={"Join a variety of clubs and extracurricular activities."} 
                    />
                </div>
                <div className={`${baseClasses} delay-200 ${scrollingUp ? upAnimationClasses : downAnimationClasses}`}>
                    <CampusCard 
                        imageSrc={announcementImage} 
                        heading={"Announcements"} 
                        para={"Stay updated on the latest campus news and events."} 
                    />
                </div>
                <div className={`${baseClasses} delay-400 ${scrollingUp ? upAnimationClasses : downAnimationClasses}`}>
                    <CampusCard 
                        imageSrc={campusImage} 
                        heading={"Campus Photos"} 
                        para={"Browse photos of the campus and its surroundings."} 
                    />
                </div>
                <div className={`transition-all duration-1000 transform delay-600 ${scrollingUp ? upAnimationClasses : downAnimationClasses}`}>
                    <CampusCard 
                        imageSrc={sports} 
                        heading={"Student Activities"} 
                        para={"Get involved in sports, arts, and student-led initiatives."} 
                    />
                </div>
            </div>
        </div>
    );
};