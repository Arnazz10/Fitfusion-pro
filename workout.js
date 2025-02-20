const express = require('express');
const Workout = require('../models/Workout');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all workouts for the user
router.get('/', auth, async (req, res) => {
    try {
        const workouts = await Workout.find({ userId: req.user._id });
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific workout
router.get('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findOne({
            _id: req.params.id,
            userId: req.user._id
        });
        
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }
        
        res.json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new workout
router.post('/', auth, async (req, res) => {
    try {
        const workout = new Workout({
            ...req.body,
            userId: req.user._id
        });
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a workout
router.patch('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }

        res.json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a workout
router.delete('/:id', auth, async (req, res) => {
    try {
        const workout = await Workout.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id
        });

        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }

        res.json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
