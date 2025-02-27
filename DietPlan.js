const mongoose = require('mongoose');

const mealItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    unit: { type: String, required: true },
    calories: { type: Number, required: true, min: 0 },
    protein: { type: Number, required: true, min: 0 },
    carbs: { type: Number, required: true, min: 0 },
    fats: { type: Number, required: true, min: 0 }
});

const mealSchema = new mongoose.Schema({
    type: { 
        type: String, 
        enum: ['breakfast', 'pre_workout', 'post_workout', 'lunch', 'dinner', 'snack'], 
        required: true 
    },
    items: [mealItemSchema],
    totalCalories: { type: Number, default: 0 },
    totalProtein: { type: Number, default: 0 },
    totalCarbs: { type: Number, default: 0 },
    totalFats: { type: Number, default: 0 },
    timeToEat: { type: String },
    notes: String
});

const dietPlanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    type: { 
        type: String, 
        enum: ['weight_loss', 'lean_muscle_gain', 'maintenance', 'custom'], 
        required: true 
    },
    dailyCalorieTarget: { type: Number, required: true },
    macroSplit: {
        protein: { type: Number, required: true, min: 30, max: 50 }, // Higher protein (30-50%)
        carbs: { type: Number, required: true, min: 30, max: 50 }, // Moderate carbs (30-50%)
        fats: { type: Number, required: true, min: 10, max: 20 }   // Controlled fats (10-20%)
    },
    meals: [mealSchema],
    supplements: [{
        name: { type: String },
        dosage: { type: String },
        timing: { type: String },
        notes: { type: String }
    }],
    waterIntake: {
        target: { type: Number, default: 3000 } // Increase water intake for muscle recovery
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

// **Calculate Total Daily Nutrition**
dietPlanSchema.methods.calculateDailyNutrition = function() {
    let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFats = 0;

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
