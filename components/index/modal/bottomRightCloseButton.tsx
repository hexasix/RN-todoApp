import React from "react";
import { Dispatch, SetStateAction } from "react";
import { XStack } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo, TaskColor } from "@/mock/todos";

type BottomRightCloseButtonProps = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  taskName: string;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export default function BottomRightCloseButton({
  setIsModalVisible,
  taskName,
  todos,
  setTodos,
}: BottomRightCloseButtonProps) {
  async function handlePress() {
    const colors: TaskColor[] = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFBE0B", "#9B5DE5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    if (taskName.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: taskName,
        completed: false,
        category: "Default",
        color: randomColor,
      };
      setTodos([newTodo, ...todos]);
    }
    setIsModalVisible(false);
  }

  return (
    <XStack
      position="absolute"
      bottom={30}
      right={30}
      backgroundColor="#e34ba8"
      borderRadius={30}
      width={100}
      height={60}
      alignItems="center"
      justifyContent="center"
      onPress={handlePress}
      pressStyle={{ scale: 0.9 }}
      zIndex={100000000}
    >
      <Plus color="white" size={24} />
    </XStack>
  );
}
