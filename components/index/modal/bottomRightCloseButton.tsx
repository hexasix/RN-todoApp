import React from "react";
import { Dispatch, SetStateAction } from "react";
import { XStack, Text } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo, TaskColor } from "@/mock/todos";

type BottomRightCloseButtonProps = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  taskName: string;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  setTaskName: Dispatch<SetStateAction<string>>;
};

export default function BottomRightCloseButton({
  setIsModalVisible,
  taskName,
  todos,
  setTodos,
  setTaskName,
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
      // save the new todo
      setTodos([newTodo, ...todos]);
      // clear the task name
      setTaskName("");
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
      width={200}
      height={60}
      alignItems="center"
      justifyContent="center"
      onPress={handlePress}
      pressStyle={{ scale: 0.9 }}
      zIndex={100000000}
    gap={10}
    >
      <Text color="white" fontSize={16}>New Task</Text>
      <Plus color="white" size={24} />
    </XStack>
  );
}
