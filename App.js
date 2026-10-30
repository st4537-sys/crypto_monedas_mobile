import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Form from "./components/Form";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.view}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.title}>CryptoWorld</Text>
          </View>

          <Form />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#E8F4F3" },
  container: { flexGrow: 1, paddingTop: 28 },
  view: { paddingHorizontal: 20, paddingBottom: 12 },
  title: {
    color: "#123B4A",
    fontSize: 34,
    fontWeight: "800",
  },
});
