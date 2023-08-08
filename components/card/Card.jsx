import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import cardStyle from "./Style";

export function Card({ title, content }) {
  return (
    <View style={cardStyle.container}>
      <View style={cardStyle.card}>
        <Text style={cardStyle.cardText}>{title}</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
      </View>
      <Text style={cardStyle.info}>{content}</Text>
    </View>
  );
}
