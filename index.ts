export interface User {
  _id: string;
  name: string;
  email: string;
  height?: number;
  weight?: number;
  goals?: string;
  fitnessLevel?: string;
  preferredWorkoutDays?: string[];
  dietaryRestrictions?: string[];
}

export interface Workout {
  _id: string;
  name: string;
  type: string;
  difficulty: string;
  exercises: Exercise[];
  duration: number;
  caloriesBurned?: number;
  notes?: string;
  completed: boolean;
  scheduledFor?: Date;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
  restPeriod?: number;
  notes?: string;
}

export interface DietPlan {
  _id: string;
  name: string;
  type: string;
  dailyCalorieTarget: number;
  macroSplit: {
    protein: number;
    carbs: number;
    fats: number;
  };
  meals: Meal[];
  supplements?: Supplement[];
  waterIntake: {
    target: number;
  };
}

export interface Meal {
  type: string;
  items: MealItem[];
  timeToEat?: string;
  notes?: string;
}

export interface MealItem {
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface Supplement {
  name: string;
  dosage: string;
  timing: string;
  notes?: string;
}
