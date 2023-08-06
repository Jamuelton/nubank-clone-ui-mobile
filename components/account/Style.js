import { StyleSheet } from "react-native";

const accountStyle = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    marginTop: 12,
    gap: 8,
  },
  account: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cash: { fontSize: 16, fontWeight: "bold" },
});

export default accountStyle;
