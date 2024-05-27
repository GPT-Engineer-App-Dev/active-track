import { useState, useEffect } from "react";
import { Box, Text, VStack, Stat, StatLabel, StatNumber, StatHelpText, SimpleGrid } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Progress = () => {
  const [workouts, setWorkouts] = useState([]);
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts"));
    if (storedWorkouts) {
      setWorkouts(storedWorkouts);
      setTotalWorkouts(storedWorkouts.length);
      setTotalDuration(storedWorkouts.reduce((acc, workout) => acc + parseInt(workout.duration), 0));
      setTotalCalories(storedWorkouts.reduce((acc, workout) => acc + parseInt(workout.caloriesBurned), 0));
    }
  }, []);

  const chartData = {
    labels: workouts.map((_, index) => `Workout ${index + 1}`),
    datasets: [
      {
        label: 'Duration (minutes)',
        data: workouts.map(workout => workout.duration),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Calories Burned',
        data: workouts.map(workout => workout.caloriesBurned),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      }
    ],
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">Progress</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Stat>
            <StatLabel>Total Workouts</StatLabel>
            <StatNumber>{totalWorkouts}</StatNumber>
            <StatHelpText>Workouts completed</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Total Duration</StatLabel>
            <StatNumber>{totalDuration} mins</StatNumber>
            <StatHelpText>Minutes spent working out</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Total Calories Burned</StatLabel>
            <StatNumber>{totalCalories}</StatNumber>
            <StatHelpText>Calories burned</StatHelpText>
          </Stat>
        </SimpleGrid>
        <Box width="100%" height="400px">
          <Line data={chartData} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Progress;