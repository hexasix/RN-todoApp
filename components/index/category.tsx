import React from "react";
import { View, FlatList, Platform, StyleSheet } from "react-native";
import { Text, YStack } from "tamagui";
import SectionTitle from "../common/sectionTitle";

const subTitleColor = "grey";

type Category = {
  id: number;
  name: string;
  progress: number;
  tasks: number;
  color: string;
};

const categories: Category[] = [
  { id: 1, name: "Business", progress: 70, tasks: 12, color: "#FF6B6B" }, // Coral Red
  { id: 2, name: "Personal", progress: 45, tasks: 8, color: "#4ECDC4" }, // Turquoise
  { id: 3, name: "Shopping", progress: 85, tasks: 5, color: "#45B7D1" }, // Sky Blue
  { id: 4, name: "Health", progress: 30, tasks: 10, color: "#96CEB4" }, // Sage Green
  { id: 5, name: "Work", progress: 90, tasks: 15, color: "#FFBE0B" }, // Golden Yellow
  { id: 6, name: "Travel", progress: 20, tasks: 3, color: "#9B5DE5" }, // Purple
];

export default function Category() {
  const styles = createStyles();
  const renderItem = ({ item }: { item: Category }) => (
    <YStack
      backgroundColor="black"
      paddingHorizontal={15}
      paddingTop={30}
      paddingBottom={20}
      borderRadius={25}
      gap={15}
      style={styles.card}
    >
      <Text color="gray" fontSize={14}>
        {item.tasks} tasks
      </Text>
      <Text color="white" fontSize={18}>
        {item.name}
      </Text>
      <View style={styles.progressBar}>
        <View
          style={{
            backgroundColor: item.color,
            width: `${item.progress}%`,
            height: 3,
          }}
        ></View>
      </View>
    </YStack>
  );

  return (
    <SectionTitle title="CATEGORIES">
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10, }}
      />
    </SectionTitle>
  );
}

function createStyles() {
  return StyleSheet.create({
    card: {
      marginRight: 15,
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 5,
        },
        web: {
          boxShadow: "4px 8px 7px rgba(0, 0, 0, 0.25)",
          WebkitBoxShadow: "4px 8px 6px rgba(0, 0, 0, 0.25)",
          MozBoxShadow: "4px 8px 6px rgba(0, 0, 0, 0.25)",
        },
      }),
    },
    progressBar: {
      height: 3,
      backgroundColor: "grey",
      width: 150,
      marginTop: 10,
    },
  });
}
