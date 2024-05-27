import { Container, Text, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Welcome to Fitness Tracker</Text>
        <Text fontSize="lg" textAlign="center">
          Track your workouts, monitor your progress, and achieve your fitness goals with our easy-to-use fitness tracking app.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;