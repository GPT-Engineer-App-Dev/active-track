import { Box, Text, VStack } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">User Profile</Text>
        <Text>Name: John Doe</Text>
        <Text>Age: 30</Text>
        <Text>Fitness Goals: Lose weight, Build muscle</Text>
      </VStack>
    </Box>
  );
};

export default Profile;