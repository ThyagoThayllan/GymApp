import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";

export const HomeHeader = () => {
  return (
    <HStack
      backgroundColor="gray.600"
      pt={16}
      pb={6}
      px={6}
      alignItems="center"
    >
      <UserPhoto
        source={{ uri: "https://github.com/ThyagoThayllan.png" }}
        size={16}
        alt="Imagem do usuário"
        mr={3}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Thyago Thayllan
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
};
