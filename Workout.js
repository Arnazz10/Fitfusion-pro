const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true,
        min: 1
    },
    reps: {
        type: Number,
        required: true,
        min: 1
    },
    weight: {
        type: Number,
        min: 0
    },
    duration: {
        type: Number,
        min: 0
    },
    restPeriod: {
        type: Number,
        default: 60 // in seconds
    },
    notes: String
});

const workoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['push', 'pull', 'legs', 'upper_body', 'lower_body', 'full_body', 'cardio'],
        required: true
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        required: true
    },
    exercises: [exerciseSchema],
    duration: {
        type: Number,
        required: true
    },
    caloriesBurned: {
        type: Number,
        default: 0
    },
    notes: String,
    completed: {
        type: Boolean,
        default: false
    },
    scheduledFor: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Calculate estimated calories burned
workoutSchema.methods.calculateCaloriesBurned = function(userWeight) {
    // Basic calculation - can be enhanced with more sophisticated algorithms
    const MET = {
        'cardio': 8,
        'push': 6,
        'pull': 6,
        'legs': 7,
        'upper_body': 6,
        'lower_body': 7,
        'full_body': 7
    };
    
    // Formula: Calories = MET × weight (kg) × duration (hours)
    const durationInHours = this.duration / 60;
    this.caloriesBurned = Math.round(MET[this.type] * userWeight * durationInHours);
    return this.caloriesBurned;
};

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
