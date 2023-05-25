import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import Playground from "./components/Playground";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Playground></Playground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#3957CF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
