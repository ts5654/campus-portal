import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full px-6 pt-16 pb-8 text-gray-400 bg-[#0a0a0a] border-t border-gray-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-12 pb-12 border-b border-gray-800 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand/About Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-black tracking-tighter text-white">
              Smart <span className="text-blue-500">Campus</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed">
              Empowering students and faculty with a seamless digital experience for attendance, events, and academic resources.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs text-lg font-bold tracking-widest text-white uppercase">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {["Academics", "Admission", "Campus Life", "Research", "Alumni"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="transition-colors duration-300 hover:text-blue-400 w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Us Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs text-lg font-bold tracking-widest text-white uppercase">Contact Us</h3>
            <div className="flex flex-col gap-2 text-sm">
              <p className="transition-colors cursor-pointer hover:text-blue-400">campusPortal@gmail.com</p>
              <p>+91 9213789512</p>
              <p className="text-gray-500">New Delhi, India</p>
            </div>
          </div>
          
          {/* Follow Us Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs text-lg font-bold tracking-widest text-white uppercase">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedin />, link: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="p-3 text-gray-400 transition-all duration-300 bg-gray-900 rounded-xl hover:text-blue-400 hover:bg-gray-800 hover:-translate-y-1"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 mt-8 text-xs text-gray-600 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Smart Campus Portal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};