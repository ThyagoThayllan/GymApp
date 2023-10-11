import { Button as ButtonNB, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export const Button = ({ title, variant = "solid", ...rest }: Props) => {
  return (
    <ButtonNB
      w="full"
      h="10"
      bg={variant === "outline" ? "transparent" : "blue.500"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="blue.500"
      rounded="sm"
      _pressed={{ bg: variant === "outline" ? "gray.700" : "blue.400" }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "blue.400" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNB>
  );
};
