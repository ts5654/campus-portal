// Fcards.js

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Fcards = ({ data, isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`w-4/5 p-4 mb-4 text-white transition-all duration-500 ease-out transform md:w-3/5 lg:w-2/5 border border-gray-700 rounded-lg cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center justify-between" onClick={toggleDropdown}>
          <p className="font-semibold">{data.heading}</p>
          <span>
            {isOpen ? <FaChevronUp className="text-xl" /> : <FaChevronDown className="text-xl" />}
          </span>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-4 pt-4 border-t border-gray-700" : "max-h-0 opacity-0"
          }`}
        >
          <div className="text-gray-400">
            <p>{data.Droptdown}</p>
          </div>
        </div>
      </div>
    </>
  );
};