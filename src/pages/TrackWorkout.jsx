import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const TrackWorkout = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Exercise Name</FormLabel>
          <Input placeholder="Enter exercise name" />
        </FormControl>
        <FormControl>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" placeholder="Enter duration" />
        </FormControl>
        <FormControl>
          <FormLabel>Calories Burned</FormLabel>
          <Input type="number" placeholder="Enter calories burned" />
        </FormControl>
        <Button colorScheme="blue">Track Workout</Button>
      </VStack>
    </Box>
  );
};

export default TrackWorkout;