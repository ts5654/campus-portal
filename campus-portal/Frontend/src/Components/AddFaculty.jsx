import React, { useState } from 'react';

export const AddFacultyForm = ({ onClose, onSubmit }) => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        about: '',
        Image: '', // URL for the image
        // Add more fields as needed (e.g., department, qualification)
    });
    
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.about) {
            alert('Please fill in all required fields (Name and About).');
            return;
        }

        // Call the onSubmit function passed from the parent component
        onSubmit({
            heading: formData.name, // Map to your API's expected field name
            content: formData.about, // Map to your API's expected field name
            Image: formData.Image || null,
        });
        
        // Clear form after submission (optional, depending on flow)
        setFormData({ name: '', about: '', Image: '' });
    };

    return (
        // Modal overlay
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm">
            {/* Modal content container */}
            <div className="relative w-full max-w-lg p-8 mx-auto text-white bg-gray-800 border border-blue-500 shadow-2xl rounded-xl">
                <h2 className="mb-6 text-3xl font-bold text-blue-400">Add New Faculty Member</h2>
                
                {/* Close button */}
                <button 
                    className="absolute text-2xl font-bold text-gray-400 transition top-4 right-4 hover:text-red-500"
                    onClick={onClose}
                >
                    &times;
                </button>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Faculty Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Dr. Jane Doe"
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-300">About/Designation</label>
                        <textarea
                            id="about"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Professor of AI & Robotics, 15 years experience..."
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="Image" className="block mb-2 text-sm font-medium text-gray-300">Image URL</label>
                        <input
                            type="text"
                            id="Image"
                            name="Image"
                            value={formData.Image}
                            onChange={handleChange}
                            className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Paste direct image link here"
                        />
                    </div>
                    
                    {/* Submission Buttons */}
                    <div className="flex justify-end pt-4 space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 text-sm font-medium text-gray-300 transition duration-150 bg-gray-600 rounded-lg hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 text-sm font-medium text-white transition duration-150 bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                        >
                            Save Faculty
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};