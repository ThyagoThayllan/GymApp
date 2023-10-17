import { HStack, Heading, Text, VStack } from "native-base";

export const HistoryCard = () => {
  return (
    <HStack
      justifyContent="space-between"
      w="full"
      p={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
    >
      <VStack mr={6}>
        <Heading color="gray.300" fontSize="md" textTransform="capitalize">
          Costas
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Puxada Frontal
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        09:00
      </Text>
    </HStack>
  );
};
