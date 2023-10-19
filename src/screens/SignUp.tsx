import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  FormControl,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import BackgroundImg from "@assets/background.png";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import LogoSvg from "@assets/logo.svg";
import { Controller, useForm } from "react-hook-form";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

export const SignUp = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  const handleGoToSignIn = () => {
    navigation.goBack();
  };

  const handleSignUp = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          {/* Inputs - REACT HOOK FORM  */}
          <Controller
            control={control}
            name="name"
            rules={{
              required: "Informe o nome.",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            rules={{
              required: "Informe o e-mail.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: "Informe a senha.",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            rules={{
              required: "Confirme sua senha",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirmar a senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Button
          marginTop={8}
          title="Fazer login"
          variant="outline"
          onPress={handleGoToSignIn}
        />
      </VStack>
    </ScrollView>
  );
};
