import { Text, View } from "react-native";
import cardStyle from "./Style";
import { FontAwesome } from "@expo/vector-icons";

export function MyCards() {
  return (
    <View style={cardStyle.myCards}>
      <FontAwesome name="credit-card" size={24} color="black" />
      <Text style={cardStyle.cardText}>Meus cartões</Text>
    </View>
  );
}
