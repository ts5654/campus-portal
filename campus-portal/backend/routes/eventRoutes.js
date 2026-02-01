// routes/eventRoutes.js

const express = require('express')
const router = express.Router()
const Event = require("../models/Event") 
router.post("/",async(req,res)=>{
    const {heading,content,date,imageUrl}=req.body
      console.log("📦 Data received from frontend:", req.body);
    // Basic validation
    if(!heading || !content || !date){ 
        return res.status(400).json({message:"Heading, content, and date are required"})
    }
    
    try {
        const newevent = new Event({
            heading,
            content,
            date,
            imageUrl
        })
        const savedevent = await newevent.save()
        res.status(201).json(savedevent) 
    } catch (error) {
        console.error("Error saving event to DB:", error);
        res.status(500).json({message:"Internal server error when creating event"})
    }
})

// GET /api/events (Restored Database Logic)
router.get("/",async (req,res)=>{
    try {
        const events = await Event.find();
        res.json(events)
    } catch (error) {
        res.status(500).json({message:"something went wrong while fetching events"})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const deletedevent = await Event.findByIdAndDelete(req.params.id)
        if(!deletedevent){
            return res.status(404).json({message:"Event not found"})
        }
        res.json({message:"Event delted"})
    } catch (error) {
        console.log(error);
        
    }
})
module.exports = router