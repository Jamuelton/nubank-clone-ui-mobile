import { Text, View } from "react-native";
import selectStyle from "./Style";

export function SelectFunc({ icon, text }) {
  return (
    <View style={selectStyle.container}>
      <View style={selectStyle.iconView}>
        <Text>{icon}</Text>
      </View>
      <Text style={selectStyle.iconText}>{text}</Text>
    </View>
  );
}
