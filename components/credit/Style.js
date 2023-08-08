import { StyleSheet } from "react-native";

const creditStyle = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginTop: 12,
    gap: 8,
  },
  credit: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  creditText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoCard: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
  },
  cash: { fontSize: 16, fontWeight: "bold" },
  info: { fontSize: 14, fontWeight: "bold", color: "#848389" },
});

export default creditStyle;
