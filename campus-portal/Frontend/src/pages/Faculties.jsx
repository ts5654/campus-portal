// Faculties.js

import React, { useState, useEffect } from "react";
import { Facul } from "../Components/Facul";
import { motion } from "framer-motion";
import Teacher1 from "../assets/Teacher1.png";
import axios from "axios";
import { AddFacultyForm } from "../Components/AddFaculty"; // your form component

const HERO_IMAGE_URL =
  "https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?semt=ais_hybrid&w=740&q=80";

const api_base_url = "http://localhost:5000/api/faculties";

export const Faculties = () => {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // ✅ Fetch all faculties on mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(api_base_url);
        const mappedData = response.data.map((item) => ({
          id: item._id,
          photo: item.Image || Teacher1,
          name: item.heading,
          about: item.content,
        }));

        setFaculties(mappedData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching faculty data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Delete faculty
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this faculty member?')) {
        try {
            // ✅ 1. Await the API call and capture the response
            const response = await axios.delete(`${api_base_url}/${id}`); 
            
            // ✅ 2. Check for successful deletion status codes (200 OK or 204 No Content)
            if (response.status === 200 || response.status === 204) {
                
                // ✅ 3. ONLY update the local state IF the API call succeeded
                setFaculties((prevFaculties) => prevFaculties.filter((fac) => fac.id !== id));
                
                alert("Faculty deleted successfully!");
            } else {
                // This block handles server-side errors that don't throw an exception (rare)
                alert("Server responded unexpectedly. Faculty deletion might have failed.");
            }
        } catch (error) {
            // ❌ This catches network errors or 4xx/5xx status codes
            console.error("Error deleting faculty:", error);
            
            // You can optionally refresh data here if you're unsure if the item was deleted
            // or just inform the user that the operation failed.
            alert(`Failed to delete faculty. Error: ${error.message}.`);
            
            // If deletion failed, the item remains in the state, which is correct.
        }
    }
};

  // ✅ Add new faculty
  const handleAddFaculty = async (newFaculty) => {
    try {
      const response = await axios.post(api_base_url, newFaculty);

      // backend returns the new faculty — map it into the same structure
      const created = {
        id: response.data._id,
        photo: response.data.Image || Teacher1,
        name: response.data.heading,
        about: response.data.content,
      };

      setFaculties((prev) => [...prev, created]);
      alert("Faculty added successfully!");
      setShowAddForm(false);
    } catch (err) {
      console.error("Error adding faculty:", err);
      alert("Failed to add faculty.");
    }
  };

  // ✅ Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl text-blue-400 bg-gray-950">
        Loading Faculty Data...
      </div>
    );
  }

  // ✅ Error State
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-950">
        <p className="text-xl text-red-500">{error}</p>
        <p className="mt-2 text-gray-400">
          Ensure your Express server is running and the API path is correct (
          {api_base_url}).
        </p>
      </div>
    );
  }

  // ✅ UI Layout
  return (
    <div className="min-h-screen font-sans text-white bg-gray-950">
      {/* 🔹 Add Faculty Modal */}
      {showAddForm && (
        <AddFacultyForm
          onClose={() => setShowAddForm(false)}
          onSubmit={handleAddFaculty}
        />
      )}

      {/* 🔹 Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center w-full text-center bg-center bg-cover h-96"
        style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 p-6">
          <motion.h1
            className="mb-4 text-4xl font-extrabold leading-tight tracking-wide text-blue-300 md:text-6xl drop-shadow-2xl"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Esteemed Faculties
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 md:text-xl drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Innovators, Researchers & Mentors Shaping the Future
          </motion.p>
        </div>

        {/* 🔹 Add Faculty Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 px-6 py-3 mt-6 text-lg font-semibold text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
          onClick={() => setShowAddForm(true)}
        >
          + Add Faculty
        </motion.button>
      </div>

      {/* 🔹 Search & Filter Section */}
      <motion.div
        className="sticky top-0 z-20 flex flex-col items-center justify-center w-full gap-4 p-4 bg-black border-b border-gray-700 shadow-xl md:p-8 md:flex-row"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <input
          type="text"
          placeholder="Search by name, department..."
          className="w-full max-w-lg p-3 text-white placeholder-gray-400 transition duration-200 bg-black border-2 border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="w-full max-w-[150px] p-3 text-gray-400 transition duration-200 border-2 border-gray-700 rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option value="">Department</option>
          <option value="AI">AI & ML</option>
          <option value="CS">Computer Science</option>
        </select>
        <select className="w-full max-w-[150px] p-3 text-gray-400 transition duration-200 border-2 border-gray-700 rounded-lg bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
          <option value="">Qualification</option>
          <option value="PHD">PhD</option>
          <option value="MTECH">M.Tech</option>
        </select>
      </motion.div>

      {/* 🔹 Faculty Cards */}
      <div className="grid grid-cols-1 gap-8 p-6 bg-black md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-10 place-items-center">
        {faculties.map((faculty) => (
          <Facul key={faculty.id} data={faculty} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};
