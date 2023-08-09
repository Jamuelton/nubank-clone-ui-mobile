import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Container } from "./components/container/Container";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Container />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#830AD1",
  },
});
