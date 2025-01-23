// app/index.tsx
import { YStack, XStack, Text, Button } from "tamagui";
import { View, StyleSheet, SafeAreaView } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <YStack
          backgroundColor="black"
          width="100%"
          maxWidth={1000}
          alignSelf="center"
        >
          {/* <Text fontSize="$4" color="white">Welcome to Tamagui + Expo Router!</Text>
        <Button>
          Hello
        </Button> */}
          <XStack style={styles.topBar} gap={30}>
            <FontAwesome6 name="equals" size={24} color="white" style={styles.menuIcon} />
            <Feather name="search" size={24} color="white" />
            <Feather name="bell" size={24} color="white" />
          </XStack>
        </YStack>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
    maxWidth: "100%",
  },
  mainContent: {
    marginHorizontal: 30,
  },
  topBar: {
    marginTop: 50,
  },
  menuIcon: {
    flex: 1,
  }
});
