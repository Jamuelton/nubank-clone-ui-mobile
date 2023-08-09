import { Text, View } from "react-native";
import userBarStyle from "./Style";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export function UserBar() {
  return (
    <View style={userBarStyle.container}>
      <View style={userBarStyle.content}>
        <View style={userBarStyle.topPart}>
          <View style={userBarStyle.perfil}>
            <Octicons name="person" size={20} color="white" />
          </View>
          <View style={userBarStyle.icons}>
            <Feather name="eye" size={24} color="white" />
            <Feather name="help-circle" size={24} color="white" />
            <MaterialIcons name="person-add-alt" size={24} color="white" />
          </View>
        </View>
        <View style={userBarStyle.userNameView}>
          <Text style={userBarStyle.userName}>Olá, Jamuelton</Text>
        </View>
      </View>
    </View>
  );
}
