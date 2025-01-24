// app/index.tsx
import { YStack, XStack, Text, Button, H1 } from "tamagui";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TopBar from "../components/index/topBar";
import Category from "@/components/index/category";
const topBarColor = "grey";
const backgroundColor = "#1e1e1e";
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent} >
        <YStack
          backgroundColor={backgroundColor}
          width="100%"
          maxWidth={1000}
          alignSelf="center"
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
        </YStack>
      </View>
    </SafeAreaView>
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
    marginHorizontal: 30,
  },
  headingArea: {
    paddingVertical: 30,
  },
});
