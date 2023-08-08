import { Text, View } from "react-native";
import infoStyle from "./Style";

export function InfoCard({ purpleText, blackText }) {
  return (
    <View style={infoStyle.container}>
      <Text>
        <Text style={infoStyle.principalText}>{purpleText}</Text>
        <Text>{blackText}</Text>
      </Text>
    </View>
  );
}
