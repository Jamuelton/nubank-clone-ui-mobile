import { StyleSheet } from "react-native";

const annouStyle = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardImg: {
    width: 270,
    height: 120,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  bottomCard: {
    width: 270,
    height: 120,
    backgroundColor: "#F0F1F5",
    padding: 10,
    flexDirection: "column",
    gap: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  title: {
    fontWeight: "bold",
  },
  info: { fontWeight: "bold", color: "#848389" },

  button: {
    backgroundColor: "#830BCC",
    maxWidth: 100,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "400",
  },
});

export default annouStyle;
