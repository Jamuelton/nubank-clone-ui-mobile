import { StyleSheet } from "react-native";

const selectStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 8,
  },
  iconView: {
    backgroundColor: "#F0F1F5",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  iconText: {
    fontWeight: "600",
  },
});

export default selectStyle;
