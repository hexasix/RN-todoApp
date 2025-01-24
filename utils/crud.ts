import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (data: any) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@todos_key", jsonValue);
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

// Load data
export const loadData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@todos_key");
    if (jsonValue != null) {
      const data = JSON.parse(jsonValue);
      console.log("Data loaded:", data);
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error loading data:", error);
    return null;
  }
};

// Remove data
export const removeData = async () => {
  try {
    await AsyncStorage.removeItem("@todos_key");
    console.log("Data removed successfully");
  } catch (error) {
    console.error("Error removing data:", error);
  }
};
