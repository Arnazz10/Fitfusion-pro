import axios from 'axios';
import { User, Workout, DietPlan } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/users/login', { email, password });
    return response.data;
  },
  register: async (userData: Partial<User>) => {
    const response = await api.post('/users/register', userData);
    return response.data;
  },
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
  updateProfile: async (userData: Partial<User>) => {
    const response = await api.patch('/users/profile', userData);
    return response.data;
  },
};

export const workouts = {
  getAll: async () => {
    const response = await api.get('/workouts');
    return response.data;
  },
  getOne: async (id: string) => {
    const response = await api.get(`/workouts/${id}`);
    return response.data;
  },
  create: async (workoutData: Partial<Workout>) => {
    const response = await api.post('/workouts', workoutData);
    return response.data;
  },
  update: async (id: string, workoutData: Partial<Workout>) => {
    const response = await api.patch(`/workouts/${id}`, workoutData);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/workouts/${id}`);
    return response.data;
  },
};

export const dietPlans = {
  getAll: async () => {
    const response = await api.get('/diet-plans');
    return response.data;
  },
  getOne: async (id: string) => {
    const response = await api.get(`/diet-plans/${id}`);
    return response.data;
  },
  create: async (dietPlanData: Partial<DietPlan>) => {
    const response = await api.post('/diet-plans', dietPlanData);
    return response.data;
  },
  update: async (id: string, dietPlanData: Partial<DietPlan>) => {
    const response = await api.patch(`/diet-plans/${id}`, dietPlanData);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/diet-plans/${id}`);
    return response.data;
  },
};
