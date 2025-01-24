import { XStack, Text } from "tamagui";
import AntDesign from '@expo/vector-icons/AntDesign';
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
      paddingHorizontal={30}
      gap={10}
    >
      {direction === "left" && (
        <AntDesign name="delete" size={24} color="white" />
      )}
      <Text color="white">Delete</Text>
      {direction === "right" && (
        <AntDesign name="delete" size={24} color="white" />
      )}
    </XStack>
  );
};
