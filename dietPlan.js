const express = require('express');
const DietPlan = require('../models/DietPlan');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all diet plans for the user
router.get('/', auth, async (req, res) => {
    try {
        const dietPlans = await DietPlan.find({ userId: req.user._id });
        res.json(dietPlans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific diet plan
router.get('/:id', auth, async (req, res) => {
    try {
        const dietPlan = await DietPlan.findOne({
            _id: req.params.id,
            userId: req.user._id
        });
        
        if (!dietPlan) {
            return res.status(404).json({ error: 'Diet plan not found' });
        }
        
        res.json(dietPlan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new diet plan
router.post('/', auth, async (req, res) => {
    try {
        const dietPlan = new DietPlan({
            ...req.body,
            userId: req.user._id
        });
        await dietPlan.save();
        res.status(201).json(dietPlan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a diet plan
router.patch('/:id', auth, async (req, res) => {
    try {
        const dietPlan = await DietPlan.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!dietPlan) {
            return res.status(404).json({ error: 'Diet plan not found' });
        }

        res.json(dietPlan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a diet plan
router.delete('/:id', auth, async (req, res) => {
    try {
        const dietPlan = await DietPlan.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id
        });

        if (!dietPlan) {
            return res.status(404).json({ error: 'Diet plan not found' });
        }

        res.json({ message: 'Diet plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
