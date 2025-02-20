import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  CircularProgress,
  LinearProgress
} from '@mui/material';
import {
  FitnessCenter as WorkoutIcon,
  Restaurant as DietIcon,
  Timeline as ProgressIcon,
  EmojiEvents as AchievementIcon
} from '@mui/icons-material';

const Dashboard = () => {
  // TODO: Replace with actual data from API
  const mockData = {
    dailyProgress: {
      calories: 1200,
      calorieGoal: 2000,
      waterIntake: 1.5,
      waterGoal: 3,
      workoutsCompleted: 1,
      workoutGoal: 1
    },
    nextWorkout: {
      name: 'Push Day',
      time: '14:00',
      duration: '60 min'
    },
    achievements: [
      'First Workout Completed',
      '7-Day Streak',
      'Weight Goal Milestone'
    ]
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            background: 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Welcome back, User!
        </Typography>

        <Grid container spacing={3}>
          {/* Daily Progress */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                backgroundColor: 'background.paper'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Daily Progress
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Calories
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(mockData.dailyProgress.calories / mockData.dailyProgress.calorieGoal) * 100}
                  sx={{ 
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(187, 134, 252, 0.2)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#BB86FC'
                    }
                  }}
                />
                <Typography variant="body2" color="text.secondary" align="right">
                  {mockData.dailyProgress.calories} / {mockData.dailyProgress.calorieGoal} kcal
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Water Intake
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(mockData.dailyProgress.waterIntake / mockData.dailyProgress.waterGoal) * 100}
                  sx={{ 
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(3, 218, 198, 0.2)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#03DAC6'
                    }
                  }}
                />
                <Typography variant="body2" color="text.secondary" align="right">
                  {mockData.dailyProgress.waterIntake}L / {mockData.dailyProgress.waterGoal}L
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Next Workout */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                backgroundColor: 'background.paper'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Next Workout
              </Typography>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <WorkoutIcon sx={{ mr: 2, color: '#BB86FC' }} />
                <Box>
                  <Typography variant="body1">
                    {mockData.nextWorkout.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Today at {mockData.nextWorkout.time} • {mockData.nextWorkout.duration}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  background: 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)',
                  color: '#000'
                }}
              >
                Start Workout
              </Button>
            </Paper>
          </Grid>

          {/* Achievements */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'background.paper'
              }}
            >
              <Typography variant="h6" gutterBottom>
                Recent Achievements
              </Typography>
              
              <Grid container spacing={2}>
                {mockData.achievements.map((achievement, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        backgroundColor: 'rgba(187, 134, 252, 0.1)',
                        border: '1px solid rgba(187, 134, 252, 0.2)'
                      }}
                    >
                      <AchievementIcon sx={{ color: '#BB86FC', fontSize: 40, mb: 1 }} />
                      <Typography variant="body2">
                        {achievement}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
