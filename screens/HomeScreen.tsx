import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CKE</Text>
      <Text style={styles.title}>Commerce KENYA</Text>
      <Text style={styles.subtitle}>Buy • Sell • Grow</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 48,
    fontWeight: "900",
    color: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.text,
    marginTop: 12,
  },
  subtitle: {
    marginTop: 6,
    color: Colors.textLight,
    fontSize: 16,
  },
});
