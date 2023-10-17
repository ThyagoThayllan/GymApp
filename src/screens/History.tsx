import { useState } from "react";
import { Heading, Text, VStack, SectionList } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export const History = () => {
  const [exercises, setExescises] = useState([
    {
      title: "12.10.2023",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "13.10.2023",
      data: ["Puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.100" fontSize="sm" mt={10} mb={2}>
            {section.title}
          </Heading>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <VStack>
            <Heading color='gray.100' fontSize='xl' fontFamily='heading' textAlign='center'>Vamos treinar!</Heading>
            <Text color='gray.200' fontSize='md' textAlign='center'>Não há exercícios registrados ainda.</Text>
          </VStack>
        )}
        px={6}
      />
    </VStack>
  );
};
