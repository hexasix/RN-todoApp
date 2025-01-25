import { Dispatch, SetStateAction } from "react";
import { Modal } from "react-native";
import { YStack, XStack, Text } from "tamagui";
import { Plus, X } from "@tamagui/lucide-icons";
import { useState } from "react";
import BottomRightCloseButton from "./bottomRightCloseButton";
import Form from "./form";
type AddTaskModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  backgroundColor: string;
};

export function AddTaskModal({ isModalVisible, setIsModalVisible, backgroundColor }: AddTaskModalProps) {
  const [taskName, setTaskName] = useState<string>("");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      {/* background */}
      <YStack
        flex={1}
        backgroundColor="rgba(0,0,0,0.9)"
        justifyContent="flex-end"
      >
        {/* form container */}
        <YStack
          backgroundColor={backgroundColor}
          padding={20}
          borderTopLeftRadius={30}
          borderTopRightRadius={30}
          height="100%"
          gap="20%"
        >
          <XStack
            justifyContent="flex-end"
            alignItems="center"
            marginBottom={20}
          >
            {/* close button */}
            <XStack
              backgroundColor="#e34ba8"
              borderRadius={30}
              width={60}
              height={60}
              alignItems="center"
              justifyContent="center"
              onPress={() => setIsModalVisible(false)}
              pressStyle={{ scale: 0.9 }}
            >
              <X color="white" size={24} />
            </XStack>
          </XStack>
          {/* form content */}
          <Form placeholder="Enter New Task" setTaskName={setTaskName} taskName={taskName}/>
        </YStack>
      </YStack>

      <BottomRightCloseButton setIsModalVisible={setIsModalVisible} />
    </Modal>
  );
}
