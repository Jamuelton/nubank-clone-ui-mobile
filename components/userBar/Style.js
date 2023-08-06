import { StyleSheet } from "react-native";

const userBarStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    backgroundColor: "#830AD1",
  },
  content: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,
  },
  topPart: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: 8,
  },
  userName: {},
});

export default userBarStyle;
