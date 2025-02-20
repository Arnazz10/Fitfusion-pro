const mongoose = require('mongoose');

const mealItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    unit: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true,
        min: 0
    },
    protein: {
        type: Number,
        required: true,
        min: 0
    },
    carbs: {
        type: Number,
        required: true,
        min: 0
    },
    fats: {
        type: Number,
        required: true,
        min: 0
    }
});

const mealSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['breakfast', 'morning_snack', 'lunch', 'evening_snack', 'dinner'],
        required: true
    },
    items: [mealItemSchema],
    totalCalories: {
        type: Number,
        default: 0
    },
    totalProtein: {
        type: Number,
        default: 0
    },
    totalCarbs: {
        type: Number,
        default: 0
    },
    totalFats: {
        type: Number,
        default: 0
    },
    timeToEat: {
        type: String
    },
    notes: String
});

const dietPlanSchema = new mongoose.Schema({
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
        enum: ['weight_loss', 'muscle_gain', 'maintenance', 'custom'],
        required: true
    },
    dailyCalorieTarget: {
        type: Number,
        required: true
    },
    macroSplit: {
        protein: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        carbs: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        fats: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        }
    },
    meals: [mealSchema],
    supplements: [{
        name: String,
        dosage: String,
        timing: String,
        notes: String
    }],
    waterIntake: {
        target: {
            type: Number,
            default: 2000 // ml
        }
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Calculate total daily nutrition
dietPlanSchema.methods.calculateDailyNutrition = function() {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    this.meals.forEach(meal => {
        meal.items.forEach(item => {
            totalCalories += item.calories;
            totalProtein += item.protein;
            totalCarbs += item.carbs;
            totalFats += item.fats;
        });
    });

    return {
        calories: totalCalories,
        protein: totalProtein,
        carbs: totalCarbs,
        fats: totalFats
    };
};

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);
module.exports = DietPlan;
