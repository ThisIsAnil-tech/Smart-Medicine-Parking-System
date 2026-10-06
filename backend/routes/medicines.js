import express from 'express';
import Medicine from '../models/Medicine.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// Get all medicines
router.get('/', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    const medicines = await Medicine.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Medicine.countDocuments(query);

    res.json({
      medicines,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single medicine
router.get('/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (medicine) {
      res.json(medicine);
    } else {
      res.status(404).json({ message: 'Medicine not found bro!' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create medicine (admin only)
router.post('/', protect, admin, async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    const createdMedicine = await medicine.save();
    res.status(201).json(createdMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;