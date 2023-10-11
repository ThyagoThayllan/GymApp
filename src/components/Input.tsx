import { Input as InputNB, IInputProps } from "native-base";

export const Input = ({...rest}: IInputProps) => {
    return (
        <InputNB
            bg="gray.700"
            h={10}
            px={4}
            borderWidth={0}
            fontSize='md'
            color='white'
            fontFamily="body"
            mb={4}
            placeholderTextColor="gray.300"
            _focus={{
                bg: 'gray.700',
                borderWidth: 1,
                borderColor: 'blue.400'
            }}
            {...rest}
        />
    )
};