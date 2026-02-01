const express = require('express');
const Faculty = require('../models/Faculties');
const router = express.Router();

// --- POST /api/faculties (CREATE) ---
router.post('/', async (req, res) => {
  const { heading, content, Image } = req.body;

  if (!heading || !content) {
    return res.status(400).json({ message: "Heading and content are required." });
  }

  try {
    const newFaculty = new Faculty({
      heading,
      content,
      Image
    });

    const savedFaculty = await newFaculty.save();
    res.status(201).json(savedFaculty);
  } catch (error) {
    console.error("Error creating faculty:", error);
    res.status(500).json({ message: "Internal server error while saving faculty." });
  }
});

// --- GET /api/faculties (READ ALL) ---
router.get('/', async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (error) {
    console.error("Error fetching faculties:", error);
    res.status(500).json({ message: "Error while fetching the faculties data." });
  }
});

// --- DELETE /api/faculties/:id (DELETE) ---
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Missing faculty ID in request." });
  }

  try {
    const deletedFaculty = await Faculty.findByIdAndDelete(id);

    if (!deletedFaculty) {
      return res.status(404).json({ message: "Faculty not found." });
    }

    res.status(200).json({ message: "Faculty deleted successfully." });
  } catch (error) {
    console.error("Error during faculty deletion:", error);

    if (error.name === 'CastError') {
      return res.status(400).json({ message: `Invalid Faculty ID format: ${id}.` });
    }

    res.status(500).json({ message: "Internal server error during deletion." });
  }
});

module.exports = router;
