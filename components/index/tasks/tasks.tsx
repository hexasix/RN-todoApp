import { TaskColor, todos as mockTodos, Todo } from "@/mock/todos";
import { useState, useEffect } from "react";
import { View, ScrollView, Platform } from "react-native";
import { Text, YStack, XStack, Checkbox } from "tamagui";
import { StyleSheet, FlatList } from "react-native";
import SectionTitle from "../../common/sectionTitle";
import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { saveData, loadData} from "@/utils/crud";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { handleCheckboxChange, deleteTask } from "@/components/index/tasks/events";
import { SwipeActions } from "@/components/index/tasks/swipeActions";
export default function Tasks() {
  const title = "TODAY'S TASKS";
  const styles = createStyles();
  const [todos, setTodos] = useState<Todo[]>([]);
  const renderItem = ({
    title,
    color,
    completed,
    id,
  }: {
    title: string;
    color: TaskColor;
    completed: boolean;
    id: number;
  }) => {
    const renderContent = () => (
      <XStack
        backgroundColor={"black"}
        height={70}
        borderRadius={20}
        alignItems={"center"}
        gap={30}
        elevation={20}
        paddingHorizontal={20}
      >
        <Checkbox
          borderRadius={20}
          width={28}
          height={28}
          borderWidth={2}
          borderColor={color}
          backgroundColor={completed ? color : "transparent"}
          checked={completed}
          onCheckedChange={() => handleCheckboxChange(id, todos, setTodos)}
        >
          <Checkbox.Indicator>
            <CheckIcon color={"white"} />
          </Checkbox.Indicator>
        </Checkbox>
        <Text
          color={"#ccc"}
          fontSize={16}
          textDecorationLine={completed ? "line-through" : "none"}
          textDecorationColor={"white"}
        >
          {title}
        </Text>
      </XStack>
    );

    return (
      <ReanimatedSwipeable
        onSwipeableOpen={(direction) => deleteTask(id, todos, setTodos)}
        leftThreshold={80}
        rightThreshold={80}
        renderLeftActions={() => SwipeActions("left")}
        renderRightActions={() => SwipeActions("right")}
      >
        {renderContent()}
      </ReanimatedSwipeable>
    );
  };

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await loadData();
      if (todos && todos.length > 0) {
        setTodos(todos);
      } else {
        setTodos(mockTodos);
      }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      await saveData(todos);
    };
    saveTodos();
  }, [todos]);

  return (
    <View style={styles.tasksContainer}>
      <SectionTitle title={title}>
        <FlatList
          style={{ height: "100%" }}
          data={todos}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={Platform.OS === "web"}
          contentContainerStyle={{ paddingVertical: 0 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </SectionTitle>
    </View>
  );
}

function createStyles() {
  return StyleSheet.create({
    tasksContainer: {
      flex: 1,
      marginTop: 20,
    },
  });
}
