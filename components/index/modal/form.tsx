import React, { Component } from "react";
import { Text, View } from "react-native";
import { YStack, XStack, Button, Input } from "tamagui";
import { useState } from "react";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dispatch, SetStateAction } from "react";
const backgroundColor = "#1e1e1e";
type FormProps = {
  placeholder: string;
  setTaskName: Dispatch<SetStateAction<string>>;
  taskName: string;
};
export default function Form({
  placeholder,
  setTaskName,
  taskName,
}: FormProps) {
  const styles = createStyleSheet();
  return (
    <YStack gap={30}>
      {/* input */}
      <XStack>
        <Input
          placeholder={placeholder}
          flex={1}
          backgroundColor="transparent"
          value={taskName}
          onChangeText={setTaskName}
          borderColor="transparent"
          color="white"
          fontSize={30}
          style={styles.input}
        />
      </XStack>
      <XStack height={50} gap={10}>
        <Button
          backgroundColor="transparent"
          color={"white"}
          borderColor="grey"
          icon={<AntDesign name="calendar" size={24} color="white" />}
          pressStyle={styles.buttonPressed}
          hoverStyle={styles.buttonHover}
        >
          Today
        </Button>
        <Button
          width={44}
          circular
          backgroundColor="transparent"
          borderColor="grey"
          pressStyle={styles.buttonPressed}
          hoverStyle={styles.buttonHover}
        >
          <View style={styles.blueCircle} />
        </Button>
      </XStack>
    </YStack>
  );
}

function createStyleSheet() {
  return StyleSheet.create({
    input: {
      height: 100,
    },
    buttonPressed: {
      borderColor: "#444444",
      backgroundColor: "transparent",
    },
    buttonHover: {
      borderColor: "#444444",
      backgroundColor: "transparent",
    },
    blueCircle: {
      width: 25,
      height: 25,
      borderRadius: 50,
      backgroundColor: '#007AFF',
    },
  });
}
