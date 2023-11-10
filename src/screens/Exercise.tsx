import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";
import { useEffect, useState } from "react";
import { ExerciseDTO } from "@dtos/ExercisesDTO";
import { Loading } from "@components/Loading";

type RoutesParamsProps = {
  exerciseId: string;
};

export const Exercise = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);

  const navigation = useNavigation();

  const toast = useToast();

  const route = useRoute();
  const { exerciseId } = route.params as RoutesParamsProps;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const fetchExercisesDetails = async () => {
    try {
      setIsLoading(true);

      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício.";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExercisesDetails();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      <VStack px={6} pt={10} bg="gray.600">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="blue.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={3} pb={3}>
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            {exercise.name}
          </Heading>
          <HStack>
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <VStack p={6}>
            <Image
              w="full"
              h={72}
              source={{
                uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
              }}
              alt="Nome do exercício"
              mb={3}
              resizeMode="stretch"
              rounded="lg"
            />
            <Box bg="gray.600" rounded="md" pb={3} px={3}>
              <HStack
                alignItems="center"
                justifyContent="space-around"
                mb={6}
                mt={5}
              >
                <HStack alignItems="center">
                  <SeriesSvg />
                  <Text color="gray.200" ml={2}>
                    {exercise.series} Series
                  </Text>
                </HStack>

                <HStack alignItems="center">
                  <RepetitionsSvg />
                  <Text color="gray.200" ml={2}>
                    {exercise.repetitions} Repetições
                  </Text>
                </HStack>
              </HStack>

              <Button title="Marcar como realizado" />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
};
