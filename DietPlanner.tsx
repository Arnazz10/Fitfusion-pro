import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Divider
} from '@mui/material';

const mealPlans = {
  weightLoss: {
    calories: 1800,
    meals: [
      {
        type: 'Breakfast',
        items: [
          { name: 'Oatmeal with berries', calories: 300, protein: 10 },
          { name: 'Greek yogurt', calories: 150, protein: 15 }
        ]
      },
      {
        type: 'Lunch',
        items: [
          { name: 'Grilled chicken salad', calories: 400, protein: 35 },
          { name: 'Quinoa', calories: 200, protein: 8 }
        ]
      },
      {
        type: 'Dinner',
        items: [
          { name: 'Baked salmon', calories: 350, protein: 30 },
          { name: 'Steamed vegetables', calories: 100, protein: 5 }
        ]
      }
    ]
  },
  muscleGain: {
    calories: 3000,
    meals: [
      {
        type: 'Breakfast',
        items: [
          { name: 'Protein pancakes', calories: 500, protein: 30 },
          { name: 'Banana smoothie', calories: 300, protein: 20 }
        ]
      },
      {
        type: 'Lunch',
        items: [
          { name: 'Turkey wrap', calories: 600, protein: 40 },
          { name: 'Sweet potato', calories: 200, protein: 4 }
        ]
      },
      {
        type: 'Dinner',
        items: [
          { name: 'Steak', calories: 500, protein: 45 },
          { name: 'Brown rice', calories: 300, protein: 7 }
        ]
      }
    ]
  }
};

const DietPlanner = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('weightLoss');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

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
          Diet Planner
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, backgroundColor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom>
                Select Your Goal
              </Typography>
              <List>
                <ListItem
                  button
                  selected={selectedPlan === 'weightLoss'}
                  onClick={() => setSelectedPlan('weightLoss')}
                >
                  <ListItemText primary="Weight Loss" secondary="1800 calories/day" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedPlan === 'muscleGain'}
                  onClick={() => setSelectedPlan('muscleGain')}
                >
                  <ListItemText primary="Muscle Gain" secondary="3000 calories/day" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2, backgroundColor: 'background.paper' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Tabs value={selectedTab} onChange={handleTabChange}>
                  <Tab label="Meal Plan" />
                  <Tab label="Supplements" />
                  <Tab label="Water Intake" />
                </Tabs>
              </Box>

              {selectedTab === 0 && (
                <Box>
                  {mealPlans[selectedPlan].meals.map((meal, index) => (
                    <Card key={index} sx={{ mb: 2, backgroundColor: 'background.paper' }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {meal.type}
                        </Typography>
                        <List>
                          {meal.items.map((item, itemIndex) => (
                            <ListItem key={itemIndex}>
                              <ListItemText
                                primary={item.name}
                                secondary={`Calories: ${item.calories} | Protein: ${item.protein}g`}
                              />
                              <ListItemSecondaryAction>
                                <Chip
                                  label={`${item.calories} cal`}
                                  size="small"
                                  sx={{
                                    backgroundColor: 'rgba(187, 134, 252, 0.1)',
                                    color: '#BB86FC'
                                  }}
                                />
                              </ListItemSecondaryAction>
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              )}

              {selectedTab === 1 && (
                <Box>
                  <Typography variant="body1" gutterBottom>
                    Recommended Supplements:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Whey Protein"
                        secondary="Post-workout, 25g protein per serving"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Creatine Monohydrate"
                        secondary="5g daily for muscle strength and recovery"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Multivitamin"
                        secondary="Daily for overall health and immunity"
                      />
                    </ListItem>
                  </List>
                </Box>
              )}

              {selectedTab === 2 && (
                <Box>
                  <Typography variant="body1" gutterBottom>
                    Daily Water Intake Goal: 3L
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tips for staying hydrated:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Drink 500ml water upon waking up" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Drink 500ml water before each meal" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Drink 500ml water during workout" />
                    </ListItem>
                  </List>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DietPlanner;
