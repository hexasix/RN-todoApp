// app/index.tsx
import { YStack, XStack, Text, Button, H1, Sheet } from "tamagui";
import { View, StyleSheet, SafeAreaView, Modal, Dimensions } from "react-native";
import TopBar from "../components/index/topBar";
import Category from "@/components/index/category";
import Tasks from "@/components/index/tasks/tasks";
import { Plus, X } from '@tamagui/lucide-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { AddTaskModal } from "@/components/index/modal/modal";
const topBarColor = "grey";
const backgroundColor = "#1e1e1e";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // Get screen height
  const screenHeight = Dimensions.get('window').height;
  const modalHeight = screenHeight * 1; // 80% of screen height

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContent}>
          <YStack
            backgroundColor={backgroundColor}
            width="100%"
            maxWidth={1000}
            alignSelf="center"
            flex={0}
          >
            {/* Top Bar */}
            <TopBar topBarColor={topBarColor} />
            {/*  Heading of Greeting */}
            <View style={styles.headingArea}>
              <H1 color="white" fontSize={40}>
                What's up, Olivia!
              </H1>
            </View>
            {/* Categories */}
            <Category></Category>
            {/* Tasks */}
            <Tasks></Tasks>
          </YStack>
        </View>
      </SafeAreaView>

      {/* Main Plus Button (visible when modal is closed) */}
      {!isModalVisible && (
        <XStack
          position="absolute"
          bottom={30}
          right={30}
          backgroundColor="#e34ba8"
          borderRadius={30}
          width={60}
          height={60}
          alignItems="center"
          justifyContent="center"
          onPress={() => setIsModalVisible(true)}
          pressStyle={{ scale: 0.9 }}
          zIndex={100000000}
        >
          <Plus color="white" size={24} />
        </XStack>
      )}

      <AddTaskModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        backgroundColor={backgroundColor}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    width: "100%",
    maxWidth: "100%",
  },
  mainContent: {
    width: "80%",
    alignSelf: "center",
    flex: 1,
  },
  headingArea: {
    paddingVertical: 30,
  },
});
