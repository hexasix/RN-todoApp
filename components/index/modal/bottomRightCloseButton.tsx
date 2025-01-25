import React, { Component } from "react";
import { Dispatch, SetStateAction } from "react";
import { XStack } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
export default function BottomRightCloseButton({
  setIsModalVisible,
}: {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}) {
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
      onPress={() => setIsModalVisible(false)}
      pressStyle={{ scale: 0.9 }}
      zIndex={100000000}
    >
      <Plus color="white" size={24} />
    </XStack>
  );
}
