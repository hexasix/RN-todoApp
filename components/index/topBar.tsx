import { XStack } from "tamagui";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet } from "react-native";
export default function TopBar({ topBarColor }: { topBarColor: string }) {
  return (
    <XStack style={styles.topBar} gap={30}>
      <FontAwesome6
        name="equals"
        size={24}
        color={topBarColor}
        style={styles.menuIcon}
      />
      <Feather name="search" size={24} color={topBarColor} />
      <Feather name="bell" size={24} color={topBarColor} />
    </XStack>
  );
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 50,
  },
  menuIcon: {
    flex: 1,
  },
});
