import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export const Exercise = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <VStack>
      <VStack px={6} pt={10} bg="gray.600">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="blue.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={3} pb={3}>
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada frontal
          </Heading>
          <HStack>
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={6}>
          <Image
            w="full"
            h={72}
            source={{
              uri: "https://blog.lionfitness.com.br/wp-content/uploads/2018/11/Puxada-alta-descubra-como-conquistar-costas-definidas.jpg",
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
                  3 Series
                </Text>
              </HStack>

              <HStack alignItems="center">
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 Repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
