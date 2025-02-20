# FitFusion Pro

A comprehensive fitness and gym management platform that acts as your personal trainer, nutritionist, and wellness coach.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (running locally on port 27017)
- npm (usually comes with Node.js)

## Quick Start Guide

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fitfusion-pro
   ```

2. **Set up the backend**
   ```bash
   # Navigate to backend directory
   cd backend

   # Install dependencies
   npm install

   # Create .env file (already done)
   # Make sure MongoDB is running locally

   # Start the backend server
   npm run dev
   ```

3. **Set up the frontend**
   ```bash
   # Navigate to frontend directory
   cd ../frontend

   # Install dependencies
   npm install

   # Start the frontend development server
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Troubleshooting

### PowerShell Execution Policy
If you encounter PowerShell execution policy errors:

1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy RemoteSigned`
3. Type 'Y' to confirm

### MongoDB Connection
Make sure MongoDB is running locally:
1. Open Command Prompt as Administrator
2. Run: `net start MongoDB`

If MongoDB isn't installed:
1. Download MongoDB Community Server
2. Follow the installation instructions
3. Add MongoDB to system PATH

## Features

### User Features
- Personalized workout plans
- Diet chart generation
- Calorie tracking
- Progress monitoring
- Supplement guidance
- Live workout sessions
- AI-powered chatbot
- Wearable device integration
- Community forum
- Leaderboard & challenges

### Admin Features
- Member management
- Trainer dashboard
- Analytics
- Payment processing
- User feedback system

## Tech Stack

### Frontend
- React.js with TypeScript
- Material-UI
- Redux (planned)
- Chart.js
- Socket.io (client)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Socket.io

## Project Structure

```
fitfusion-pro/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── types/
    └── package.json
```

## License
MIT
