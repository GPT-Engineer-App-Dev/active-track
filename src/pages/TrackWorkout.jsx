import { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, List, ListItem, Text } from "@chakra-ui/react";

const TrackWorkout = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (storedWorkouts) {
      setWorkouts(storedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const handleAddWorkout = () => {
    const newWorkout = { exerciseName, duration, caloriesBurned };
    setWorkouts([...workouts, newWorkout]);
    setExerciseName("");
    setDuration("");
    setCaloriesBurned("");
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Exercise Name</FormLabel>
          <Input
            placeholder="Enter exercise name"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input
            type="number"
            placeholder="Enter duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Calories Burned</FormLabel>
          <Input
            type="number"
            placeholder="Enter calories burned"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleAddWorkout}>
          Track Workout
        </Button>
        <List spacing={3} mt={4}>
          {workouts.map((workout, index) => (
            <ListItem key={index} borderWidth="1px" borderRadius="lg" p={4}>
              <Text fontWeight="bold">{workout.exerciseName}</Text>
              <Text>Duration: {workout.duration} minutes</Text>
              <Text>Calories Burned: {workout.caloriesBurned}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default TrackWorkout;