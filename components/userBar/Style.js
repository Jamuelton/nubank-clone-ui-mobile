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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50%",
  },
  perfil: {
    backgroundColor: "#9B03FE",
    width: 70,
    height: 70,
    padding: 10,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    color: "#fff",
    gap: 32,
  },
  userNameView: {},
  userName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default userBarStyle;
