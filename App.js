import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.view}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.title}>CryptoWorld</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 20, alignItems: "center" },
  view: { padding: 20, backgroundColor: "#f8f8ff" },
  title: {
    fontSize: 40,
    fontColor: "#1976d",
    fontWeight: "bold",
    textAlign: "center",
  },
});
