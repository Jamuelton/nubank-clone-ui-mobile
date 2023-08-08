import { StyleSheet } from "react-native";

const cardStyle = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginTop: 12,
    gap: 8,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  info: { fontSize: 14, fontWeight: "bold", color: "#848389" },
});

export default cardStyle;
