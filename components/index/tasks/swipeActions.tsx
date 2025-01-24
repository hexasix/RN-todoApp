import { XStack, Text } from "tamagui";

export const SwipeActions = (direction: "left" | "right") => {
  const justifyContent = direction === "left" ? "flex-start" : "flex-end";
  return (
    <XStack
      backgroundColor="red"
      height={68}
      width={300}
      borderRadius={20}
      alignItems="center"
      justifyContent={justifyContent}
      paddingHorizontal={50}
    >
      <Text color="white">Delete</Text>
    </XStack>
  );
};
