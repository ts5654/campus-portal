// Frequently.js

import React, { useState, useEffect, useRef } from "react";
import { Fcards } from "./Fcards";

const fdata = [
  {
    heading: "How do I log in to the portal?",
    Droptdown:
      "Your username is your student ID number, and your initial password is your date of birth in MMDDYYYY format. You will be prompted to change your password upon your first login for security purposes.",
  },
  {
    heading: "Where can I find my course schedule and grades?",
    Droptdown:
      "You can access your personalized course schedule and view your grades under the 'My Academics' tab on the main dashboard. This section is updated automatically at the start of each semester.",
  },
  {
    heading: "How do I reserve a study room?",
    Droptdown:
      "To reserve a study room, navigate to the 'Campus Resources' section and select 'Room Booking.' You can choose a location, date, and time that works for you. All bookings are confirmed via email.",
  },
  {
    heading: "Can I view campus announcements on the portal?",
    Droptdown:
      "Yes, the portal's homepage features a 'Campus News' section that displays real-time announcements, including event schedules, academic deadlines, and emergency alerts. Be sure to check it daily!",
  },
  {
    heading: "How do I access campus Wi-Fi?",
    Droptdown:
      "Connect to the 'CampusNet' network using your portal credentials. If you experience issues, please visit the IT Support office located in the Student Services building for assistance.",
  },
];

export const Frequently = () => {
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);

  // Observer to detect when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasScrolledIn(true);
        } else {
          // Reset the state when the element leaves the viewport
          setHasScrolledIn(false);
          setVisibleCount(0);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Effect to handle the staggered animation after the component is in view
  useEffect(() => {
    if (hasScrolledIn && visibleCount < fdata.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prevCount) => prevCount + 1);
      }, 150); // Delay between each card

      return () => clearTimeout(timer);
    }
  }, [hasScrolledIn, visibleCount]);

  return (
    <div ref={containerRef} className="w-full min-h-screen py-10 text-white bg-black">
      <h1 className="mb-2 text-3xl font-bold text-center">Frequently Asked</h1>
      <h1 className="mb-8 text-3xl font-bold text-center">Questions</h1>
      <div className="flex flex-col items-center">
        {fdata.map((currelem, index) => (
          <Fcards
            data={currelem}
            key={index}
            isVisible={index < visibleCount}
          />
        ))}
      </div>
    </div>
  );
};