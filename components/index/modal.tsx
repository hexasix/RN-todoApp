import { Dispatch, SetStateAction } from "react";
import { Modal } from "react-native";
import { YStack, XStack, Text } from "tamagui";
import { Plus, X } from "@tamagui/lucide-icons";

type AddTaskModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  backgroundColor: string;
};

export function AddTaskModal({ isModalVisible, setIsModalVisible, backgroundColor }: AddTaskModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <YStack
        flex={1}
        backgroundColor="rgba(0,0,0,0.9)"
        justifyContent="flex-end"
      >
        <YStack
          backgroundColor={backgroundColor}
          padding={20}
          borderTopLeftRadius={30}
          borderTopRightRadius={30}
          height="100%"
        >
          <XStack
            justifyContent="flex-end"
            alignItems="center"
            marginBottom={20}
          >
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
          {/* Add your form content here */}
        </YStack>
      </YStack>

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
        onPress={() => setIsModalVisible(false)}
        pressStyle={{ scale: 0.9 }}
        zIndex={100000000}
      >
        <Plus color="white" size={24} />
      </XStack>
    </Modal>
  );
}
