import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import accountStyle from "./Style";

export function Account() {
  return (
    <View style={accountStyle.container}>
      <View style={accountStyle.account}>
        <Text style={accountStyle.accountText}>Conta</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
      </View>
      <Text style={accountStyle.cash}>R$ 1,356,98</Text>
    </View>
  );
}
