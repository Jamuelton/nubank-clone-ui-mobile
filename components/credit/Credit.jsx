import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import creditStyle from "./Style";

export function Credit() {
  return (
    <View style={creditStyle.container}>
      <View style={creditStyle.credit}>
        <Text style={creditStyle.creditText}>Cartao de credito</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
      </View>
      <View style={creditStyle.infoCard}>
        <Text style={creditStyle.info}>Fatura atual</Text>
        <Text style={creditStyle.cash}>R$ 250,00</Text>
        <Text style={creditStyle.info}>Limite disponivel de R$ 3.455,55</Text>
      </View>
    </View>
  );
}
