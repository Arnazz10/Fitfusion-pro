import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';

const workoutTemplates = [
  {
    id: 1,
    name: 'Push Day',
    exercises: ['Bench Press', 'Shoulder Press', 'Tricep Extensions'],
    duration: 60,
    difficulty: 'intermediate'
  },
  {
    id: 2,
    name: 'Pull Day',
    exercises: ['Pull-ups', 'Barbell Rows', 'Bicep Curls'],
    duration: 60,
    difficulty: 'intermediate'
  },
  {
    id: 3,
    name: 'Legs Day',
    exercises: ['Squats', 'Deadlifts', 'Leg Press'],
    duration: 60,
    difficulty: 'intermediate'
  }
];

const WorkoutPlanner = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', py: 4 }}>
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
          Workout Planner
        </Typography>

        <Grid container spacing={3}>
          {workoutTemplates.map((workout) => (
            <Grid item xs={12} md={4} key={workout.id}>
              <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {workout.name}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={workout.difficulty}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(187, 134, 252, 0.1)',
                        color: '#BB86FC',
                        mr: 1
                      }}
                    />
                    <Chip
                      label={`${workout.duration} min`}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(3, 218, 198, 0.1)',
                        color: '#03DAC6'
                      }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Exercises:
                  </Typography>
                  {workout.exercises.map((exercise, index) => (
                    <Typography key={index} variant="body2" sx={{ ml: 2 }}>
                      • {exercise}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)',
                      color: '#000'
                    }}
                    onClick={() => {
                      setSelectedWorkout(workout);
                      setOpenDialog(true);
                    }}
                  >
                    Start Workout
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Start Workout</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              Customize your workout settings:
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <TextField
                label="Duration (minutes)"
                type="number"
                defaultValue={selectedWorkout?.duration}
                fullWidth
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Difficulty</InputLabel>
              <Select
                value={selectedWorkout?.difficulty || ''}
                label="Difficulty"
              >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)',
                color: '#000'
              }}
            >
              Start
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default WorkoutPlanner;
