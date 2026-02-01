// Footer.js

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full px-6 py-12 text-gray-300 colors">
      {/* Main Content Sections */}
      <div className="flex flex-col items-start justify-between gap-12 pb-8 mx-auto border-b border-gray-700 md:flex-row max-w-7xl">
        
        {/* Quick Links Section */}
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-lg font-semibold text-white">Quick Links</h3>
          <a href="#" className="transition-colors duration-300 hover:text-blue-400">Academics</a>
          <a href="#" className="transition-colors duration-300 hover:text-blue-400">Admission</a>
          <a href="#" className="transition-colors duration-300 hover:text-blue-400">Campus Life</a>
          <a href="#" className="transition-colors duration-300 hover:text-blue-400">Research</a>
          <a href="#" className="transition-colors duration-300 hover:text-blue-400">Alumni</a>
        </div>
        
        {/* Contact Us Section */}
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-lg font-semibold text-white">Contact Us</h3>
          <p className="text-gray-400">campusPortal@gmail.com</p>
          <div className="flex items-center gap-2">
            <span className="text-white">Phone:</span>
            <span className="text-gray-400">9213789512</span>
          </div>
        </div>
        
        {/* Follow Us Section with Icons */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="mb-2 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-6">
            {/* New animation for icons */}
            <a href="#" className="p-1 text-gray-400 transition-all duration-300 ease-in-out rounded-full hover:text-blue-400 hover:-translate-y-1 hover:shadow-lg">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="p-1 text-gray-400 transition-all duration-300 ease-in-out rounded-full hover:text-blue-400 hover:-translate-y-1 hover:shadow-lg">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="p-1 text-gray-400 transition-all duration-300 ease-in-out rounded-full hover:text-blue-400 hover:-translate-y-1 hover:shadow-lg">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="p-1 text-gray-400 transition-all duration-300 ease-in-out rounded-full hover:text-blue-400 hover:-translate-y-1 hover:shadow-lg">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-sm text-center text-gray-500">
        <p>&copy; 2025 Smart Campus Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};