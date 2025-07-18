# 🏋️‍♂️ FitFusion Pro

**FitFusion Pro** is a smart fitness and gym management platform that doubles as your personal trainer, nutritionist, and wellness companion. It includes **AI-powered posture detection** using machine learning to guide your workouts with real-time feedback — ideal for squats, pushups, pullups, and more.

---

## 🚀 Key Features

### 👤 User Features
- Personalized workout plans
- AI-based posture detection (e.g., squats, pushups, pullups)
- Live workout sessions with ML feedback
- Diet chart generation
- Calorie tracking & supplement guidance
- Progress monitoring
- Chatbot with fitness Q&A
- Leaderboard, badges, and community forums
- Wearable device integration

### 🛠️ Admin Features
- Member management system
- Trainer dashboard and performance stats
- Analytics & reports
- Feedback system
- Secure payment processing

---

## 🧠 AI Posture Detection

The system integrates a machine learning model using computer vision (OpenCV + PoseNet/MediaPipe) to:
- Detect and count reps in real-time
- Provide posture correction feedback
- Support multiple exercises like squats, pushups, and pullups

---

## ⚙️ Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- MongoDB (running locally on port `27017`)
- npm (comes with Node.js)

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd fitfusion-pro
2. Set up the Backend
bash
Copy
Edit
cd backend
npm install

# Ensure MongoDB is running locally
npm run dev
3. Set up the Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm start


🧪 Troubleshooting
⚠️ PowerShell Execution Policy
powershell
Copy
Edit
Set-ExecutionPolicy RemoteSigned
Run PowerShell as Administrator and type Y to confirm.

🛑 MongoDB Not Running?
bash
Copy
Edit
net start MongoDB
Or install it from the MongoDB Community Server.

🧱 Project Structure
pgsql
Copy
Edit
fitfusion-pro/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── ml/                   # ML model scripts for posture detection
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── types/
    └── package.json
💻 Tech Stack
Frontend:
React.js ## TypeScript ## Material-UI ## Chart.js ## Socket.io-client

Backend:
Node.js ## Express.js ## MongoDB ## JWT ## Socket.io

Machine Learning & CV:
Python ## OpenCV ## MediaPipe ## PoseNet ## TensorFlow.js (optional)

📜 License
This project is licensed under the MIT License.

💡 Feel free to contribute, fork, and suggest features for FitFusion Pro!

