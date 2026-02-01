import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { EvPage } from "../Components/EvPageHero";
import { ComingEvent } from "../Components/ComingEvent";
import axios from "axios";

// Define your API base URL here. Ensure the port matches your running backend server.
const API_URL = "http://localhost:5000/api/events";

export const Event = () => {
  // Hardcoded featured event data (remains local)
  const epage = [
    {
      heading: "Annual Tech Conference",
      date1: "10/8/2025",
      para: "Join for annual tech fest",
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  // State for events fetched from API, loading, and form management
  const [coming, setComing] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  const [newEvent, setNewEvent] = useState({
    heading: "",
    content: "",
    date: "",
    imageUrl: "", 
  });

  // 1. FETCH EVENTS ON COMPONENT MOUNT (READ operation)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_URL);
        setComing(response.data);
      } catch (error) {
        console.error("Error fetching initial events:", error);
        
      } finally {
        setLoading(false); 
      }
    };

    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (!newEvent.heading || !newEvent.date) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const dataToSend = {
          heading: newEvent.heading,
          content: newEvent.content,
          date: newEvent.date,
          imageurl: newEvent.imageUrl, 
      };
      
      const res = await axios.post(API_URL, dataToSend);

      // Add the event returned from the server to the state
      setComing([...coming, res.data]); 
      
     
      setNewEvent({ heading: "", content: "", date: "", imageUrl: "" });
      setShowForm(false);

    } catch (error) {
      console.error("Error creating new event:", error.response?.data || error.message);
      alert(`Failed to add event: ${error.response?.data?.message || error.message}. Check your backend server.`); 
    }
  };

  
  const formAnimation = {
    initial: { opacity: 0, height: 0, padding: 0 },
    animate: { opacity: 1, height: "auto", padding: "1.5rem", transition: { duration: 0.4 } },
    exit: { opacity: 0, height: 0, padding: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full min-h-screen p-8 text-white bg-black">
      
      {/* Featured Event Section */}
      <div className="mx-auto mb-16 max-w-7xl">
        {epage.map((currelem) => (
          <EvPage data={currelem} key={currelem.heading} />
        ))}
      </div>

      {/* Add Event Button */}
      <div className="flex justify-center mb-10">
        <motion.button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-8 py-3 space-x-2 text-lg font-bold text-white uppercase transition-all duration-300 shadow-lg rounded-xl"
          style={{ 
            backgroundColor: showForm ? "#dc2626" : "#3b82f6",
            boxShadow: showForm ? "0 10px 15px rgba(220, 38, 38, 0.4)" : "0 10px 15px rgba(59, 130, 246, 0.4)"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showForm ? (
            <>
              <XMarkIcon className="w-6 h-6" /> <span>Close Form</span>
            </>
          ) : (
            <>
              <PlusIcon className="w-6 h-6" /> <span>Add New Event</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Add Event Form with Animation */}
      <AnimatePresence>
        {showForm && (
          <motion.form
            onSubmit={handleAddEvent}
            className="relative max-w-xl mx-auto mb-10 overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl rounded-xl"
            variants={formAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_20px_rgba(59,130,246,0.1)]"></div>
            <h2 className="mb-8 text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Add New Event
            </h2>
            <div className="flex flex-col space-y-5">
              <input type="text" name="heading" value={newEvent.heading} onChange={handleChange} placeholder="Event Title" className="p-3 text-white placeholder-gray-500 transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required/>
              <textarea name="content" value={newEvent.content} onChange={handleChange} placeholder="Event Description (Max 200 chars)" rows="3" className="p-3 text-white placeholder-gray-500 transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
              <input type="date" name="date" value={newEvent.date} onChange={handleChange} className="p-3 text-white transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required/>
              <input type="url" name="imageUrl" value={newEvent.imageUrl} onChange={handleChange} placeholder="Image URL (e.g., https://example.com/image.jpg)" className="p-3 text-white placeholder-gray-500 transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
              <motion.button type="submit" className="flex items-center justify-center w-full py-3 mt-4 space-x-2 text-lg font-bold text-white uppercase transition-all duration-300 bg-green-600 rounded-lg shadow-lg hover:bg-green-500 shadow-green-600/40" whileTap={{ scale: 0.98 }}>
                <CheckCircleIcon className="w-5 h-5" />
                <span>Add Event</span>
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-white">
          Upcoming Events
        </h1>
        {/* Display Loading State */}
        {loading ? (
            <p className="text-xl text-center text-blue-400">Loading events...</p>
        ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Check for empty list */}
            {coming.length > 0 ? (
                coming.map((currelem, index) => (
                    // Use _id from the database as the key for stability
                    <ComingEvent data={currelem} key={currelem._id || index} index={index} onDelete={(id) => setComing(coming.filter((event) => event._id !== id))} />
                ))
            ) : (
                <p className="text-xl text-center text-gray-500 col-span-full">No upcoming events found. Add one now!</p>
            )}
            </div>
        )}
      </div>
    </div>
  );
};