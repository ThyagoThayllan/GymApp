import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};

export const ExerciseCard = ({ ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        backgroundColor="gray.600"
        alignItems="center"
        p={3}
        rounded="md"
        pr={4}
        mb={3}
      >
        <Image
          source={{
            uri: "https://static.tuasaude.com/media/article/pb/gk/treino-costas_39685_l.webp",
          }}
          alt="Exercício para costas"
          w={16}
          h={16}
          rounded="md"
          mr={3}
          borderWidth={2}
          borderColor="blue.400"
          resizeMode="stretch"
        />

        <VStack flex={1}>
          <Heading color="gray.100" fontSize="lg" fontFamily="heading">
            Pulley articulado
          </Heading>

          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            3x séries de 12 repetições.
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color='gray.300' />
      </HStack>
    </TouchableOpacity>
  );
};
