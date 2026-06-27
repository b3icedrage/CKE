import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.logo}>CKE</Text>

      <Text style={styles.title}>
        Commerce KENYA
      </Text>

      <Text style={styles.subtitle}>
        Buy • Sell • Grow
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    fontSize: 60,
    fontWeight: "900",
    color: "#22C55E",
  },

  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#CBD5E1",
  },

  button: {
    marginTop: 40,
    backgroundColor: "#22C55E",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
