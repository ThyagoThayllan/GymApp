import { Spinner, Center } from "native-base";

export const Loading = () => {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="blue.700" />
    </Center>
  );
};
