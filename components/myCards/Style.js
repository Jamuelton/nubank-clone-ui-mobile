import { StyleSheet } from "react-native";

const cardStyle = StyleSheet.create({
  myCards: {
    backgroundColor: "#F0F1F5",

    width: "95%",
    height: 60,
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardText: {
    fontWeight: "600",
  },
});

export default cardStyle;
