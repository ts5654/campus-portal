// File: ./pages/Attendence.jsx (or your main component file)

import React, { useState } from 'react';
import { StatusDot } from '../Components/StatusDot'; 

// --- MOCK DATA ---
const initialFilters = {
    faculty: 'Faculty of CS',
    program: 'BSCS',
    section: 'All',
    session: 'FALL 22',
    course: 'CS001-IT',
};

const mockStudents = [
    { id: 447, name: 'Harsh', status: 'Present', note: 'Note' },
    { id: 177, name: 'Mayank', status: 'Present', note: 'Note' },
    { id: 185, name: 'Harshit', status: 'Absent', note: 'Note' },
    { id: 816, name: 'Deppak', status: 'Leave', note: 'Note' },
    { id: 429, name: 'Aayush', status: 'Absent', note: 'Note' },
    { id: 501, name: 'Abhiskek', status: 'Present', note: 'Note' },
    { id: 622, name: 'Vishal', status: 'Present', note: 'Note' },
    { id: 703, name: 'Karan', status: 'Leave', note: 'Note' },
    { id: 914, name: 'Arjun', status: 'Absent', note: 'Note' },
];



export const Attendence = () => {
    const [filters, setFilters] = useState(initialFilters);
    const [students, setStudents] = useState(mockStudents);

    // Filter handlers (functionality unchanged)
    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        console.log('Searching with filters:', filters);
        // Mock data shuffling to simulate new data fetch
        const shuffledStudents = [...mockStudents].sort(() => 0.5 - Math.random());
        setStudents(shuffledStudents);
    };

    // --- NEW FUNCTIONALITY: Update Status Handler ---
    const handleStatusUpdate = (id, newStatus) => {
        console.log(`Updating student ${id} status to: ${newStatus}`);
        
        // Use functional state update to find the student and toggle their status
        setStudents(prevStudents => 
            prevStudents.map(student => 
                student.id === id ? { ...student, status: newStatus } : student
            )
        );
        // In a real application, you would also call an API here to persist the change.
    };
    // --- END NEW FUNCTIONALITY ---

    return (
        // Outer container: Full screen, deep charcoal background
        <div className="min-h-screen bg-[#121212] p-8 text-gray-100">
            
            {/* Optional Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold text-white">HiTech University Attendance</h1>
                <div className="text-lg text-[#00BCD4]">
                    <i className="mr-2 fas fa-user-circle"></i> User Menu
                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-2xl">
                
                <h2 className="pb-3 mb-6 text-xl font-semibold border-b border-gray-700">Subject Attendance</h2>
                
                {/* 1. Filter and Search Section */}
                <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-3 lg:grid-cols-6">
                    {/* Mapping through filters to create dropdowns */}
                    {Object.keys(initialFilters).map((key) => (
                        <div key={key} className="col-span-1">
                            <label htmlFor={key} className="block mb-1 text-xs text-gray-400 capitalize">
                                {key} *
                            </label>
                            <select
                                id={key}
                                name={key}
                                value={filters[key]}
                                onChange={handleFilterChange}
                                className="w-full p-2 bg-gray-700 border-none rounded-md text-sm text-white focus:ring-[#00BCD4] focus:border-[#00BCD4] transition duration-150"
                            >
                                <option value={initialFilters[key]}>{initialFilters[key]}</option>
                                <option value="Other">Other option</option>
                            </select>
                        </div>
                    ))}
                    
                    {/* Search Button */}
                    <div className="self-end col-span-1">
                        <button
                            onClick={handleSearch}
                            className="w-full bg-[#00BCD4] hover:bg-opacity-80 text-white font-semibold py-2 rounded-md transition duration-150 shadow-lg shadow-teal-900/50"
                        >
                            <i className="mr-2 fas fa-search"></i> Search
                        </button>
                    </div>
                </div>

                {/* 2. Attendance Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                        
                        {/* Table Header */}
                        <thead>
                            <tr className="text-sm font-medium tracking-wider text-left text-gray-400 uppercase">
                                <th className="px-4 py-3">Student ID</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3 text-center">Present</th>
                                <th className="px-4 py-3 text-center">Absent</th>
                                <th className="px-4 py-3 text-center">Leave</th>
                                <th className="px-4 py-3">Note</th>
                            </tr>
                        </thead>
                        
                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-800">
                            {students.map((student) => (
                                <tr key={student.id} className="transition duration-100 hover:bg-gray-800">
                                    <td className="px-4 py-4 text-base font-medium text-white">{student.id}</td>
                                    <td className="px-4 py-4 text-base">{student.name}</td>
                                    
                                    {/* Status Indicator Cells - PASSING ALL PROPS FOR FUNCTIONALITY */}
                                    <td className="px-4 py-4 text-center">
                                        <StatusDot 
                                            studentStatus={student.status} 
                                            type="Present" 
                                            studentId={student.id} 
                                            onStatusClick={handleStatusUpdate} 
                                        />
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <StatusDot 
                                            studentStatus={student.status} 
                                            type="Absent" 
                                            studentId={student.id} 
                                            onStatusClick={handleStatusUpdate} 
                                        />
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <StatusDot 
                                            studentStatus={student.status} 
                                            type="Leave" 
                                            studentId={student.id} 
                                            onStatusClick={handleStatusUpdate} 
                                        />
                                    </td>
                                    
                                    <td className="px-4 py-4 text-sm text-gray-400">
                                        <a href="#" className="underline hover:text-[#00BCD4]">{student.note}</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};