import { View, Text, StyleSheet } from "react-native";

export default function about() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>about Us</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c5dddd",
  },
  Text: {
    color: "#f7f3f3",
    fontSize: 24,
    fontWeight: "bold",
  },
});
