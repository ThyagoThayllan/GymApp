import { Pressable, Text, IPressableProps } from "native-base";

type Props = IPressableProps & {
  name: string;
  isActive?: boolean;
};

export const Group = ({ name, isActive, ...rest }: Props) => {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderWidth: 1,
        borderColor: "blue.400",
      }}
      {...rest}
    >
      <Text
        color={isActive ? 'blue.400' : "gray.200"}
        textTransform="uppercase"
        fontSize="xs"
        fontFamily="heading"
      >
        {name}
      </Text>
    </Pressable>
  );
};
