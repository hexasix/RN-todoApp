import { todos } from "@/mock/todos";
import { View } from "react-native";
import { Text, YStack, XStack, Checkbox } from "tamagui";
import { StyleSheet, FlatList } from "react-native";
import SectionTitle from "../common/sectionTitle";
import { Check as CheckIcon } from '@tamagui/lucide-icons'
export default function Tasks() {
  const title = "TODAY'S TASKS";
  const styles = createStyles();
  return (
    <View style={styles.tasksContainer}>
      <SectionTitle title={title}>
        <XStack backgroundColor={"black"} height={70} borderRadius={20}   alignItems={"center"} gap={20}>
          <Checkbox >
            <Checkbox.Indicator>
                <CheckIcon color={"white"} />
            </Checkbox.Indicator>
          </Checkbox>
          <Text color={"white"} fontSize={16}>
            CATEGORIES
          </Text>
        </XStack>
      </SectionTitle>
    </View>
  );
}

function createStyles() {
  return StyleSheet.create({
    tasksContainer: {
      marginTop: 20,
    },
  });
}
