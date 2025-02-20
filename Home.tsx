import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TimelineIcon from '@mui/icons-material/Timeline';

const Home = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #121212 0%, #2C2C2C 100%)',
    }}>
      {/* Hero Section */}
      <Box sx={{ 
        pt: 15,
        pb: 8,
        textAlign: 'center',
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 2,
              background: 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome to FitFusion Pro
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, color: 'grey.400' }}
          >
            Your AI-Powered Personal Fitness Journey
          </Typography>
          <Button
            component={RouterLink}
            to="/login"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #BB86FC 30%, #03DAC6 90%)',
              color: '#000',
              px: 4,
              py: 2,
              fontSize: '1.2rem',
            }}
          >
            Start Your Journey
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <FitnessCenterIcon sx={{ fontSize: 60, color: '#BB86FC', mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  Smart Workout Plans
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Personalized workout routines tailored to your goals and fitness level
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <RestaurantIcon sx={{ fontSize: 60, color: '#03DAC6', mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  Custom Diet Plans
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Nutrition guidance and meal plans based on your body type and goals
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', backgroundColor: 'background.paper' }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <TimelineIcon sx={{ fontSize: 60, color: '#CF6679', mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  Progress Tracking
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Monitor your fitness journey with advanced analytics and insights
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
