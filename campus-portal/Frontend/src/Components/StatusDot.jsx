// File: src/Components/StatusDot.jsx

import React from 'react';

// Added studentId and onStatusClick props for functionality
export const StatusDot = ({ studentStatus, type, studentId, onStatusClick }) => {
  let colorClass = 'bg-gray-700';
  let border = '';
  
  // Logic to determine color based on whether this status type matches the student's current status
  if (studentStatus === type) {
    if (type === 'Present') {
      colorClass = 'bg-green-500'; // Primary green for Present
    } else if (type === 'Absent') {
      colorClass = 'bg-red-600'; // Red for Absent
    } else if (type === 'Leave') {
      colorClass = 'bg-yellow-500'; // Yellow/Amber for Leave
    }
    // High-contrast ring for the selected status
    border = 'ring-2 ring-offset-2 ring-offset-[#1F1F1F] ring-opacity-75';
  } else {
      colorClass = 'bg-gray-700';
  }

  return (
    <div 
      className={`inline-block w-5 h-5 rounded-full ${colorClass} ${border} cursor-pointer transition duration-150`}
      title={type}
      // Functionality: Call the update handler when clicked
      onClick={() => onStatusClick(studentId, type)} 
    ></div>
  );
};