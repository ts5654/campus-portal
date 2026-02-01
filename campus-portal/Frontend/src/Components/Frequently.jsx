import React, { useState, useEffect, useRef } from "react";
import { Fcards } from "./Fcards";

const fdata = [
  {
    heading: "How do I log in to the portal?",
    Droptdown: "Your username is your student ID number, and your initial password is your date of birth in MMDDYYYY format.",
  },
  {
    heading: "Where can I find my course schedule and grades?",
    Droptdown: "You can access your personalized course schedule and view your grades under the 'My Academics' tab.",
  },
  {
    heading: "How do I reserve a study room?",
    Droptdown: "Navigate to 'Campus Resources' and select 'Room Booking.' Choose a location, date, and time.",
  },
  {
    heading: "Can I view campus announcements?",
    Droptdown: "Yes, the homepage features a 'Campus News' section with real-time announcements and event schedules.",
  },
  {
    heading: "How do I access campus Wi-Fi?",
    Droptdown: "Connect to 'CampusNet' using your portal credentials. Visit IT Support if you face issues.",
  },
];

export const Frequently = () => {
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasScrolledIn(true);
        } else {
          setHasScrolledIn(false);
          setVisibleCount(0);
        }
      },
      { threshold: 0.05 } // Mobile friendly low threshold
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => containerRef.current && observer.unobserve(containerRef.current);
  }, []);

  useEffect(() => {
    if (hasScrolledIn && visibleCount < fdata.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 100); 
      return () => clearTimeout(timer);
    }
  }, [hasScrolledIn, visibleCount]);

  return (
    <section 
      ref={containerRef} 
      className="w-full min-h-screen px-4 py-16 overflow-hidden text-white bg-black sm:px-8"
    >
      {/* Responsive Typography */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
          Frequently Asked <br className="sm:hidden" />
          <span className="text-blue-500">Questions</span>
        </h2>
      </div>

      {/* Accordion Container */}
      <div className="flex flex-col max-w-3xl gap-4 mx-auto">
        {fdata.map((currelem, index) => (
          <div
            key={index}
            className={`transition-all duration-500 transform ${
              index < visibleCount 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <Fcards data={currelem} />
          </div>
        ))}
      </div>
    </section>
  );
};