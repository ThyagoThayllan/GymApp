import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ExerciseDTO } from "@dtos/ExercisesDTO";
import { api } from "@services/api";

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export const ExerciseCard = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        backgroundColor="gray.600"
        alignItems="center"
        p={3}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`,
          }}
          alt="Exercício para costas"
          w={16}
          h={16}
          rounded="md"
          mr={3}
          borderWidth={1}
          borderColor="blue.400"
          resizeMode="stretch"
        />

        <VStack flex={1}>
          <Heading color="gray.100" fontSize="lg" fontFamily="heading">
            {data.name}
          </Heading>

          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            {data.repetitions} séries de {data.series} repetições.
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
};
