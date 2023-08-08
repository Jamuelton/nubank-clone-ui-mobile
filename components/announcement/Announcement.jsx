import { Image, View, Text } from "react-native";
import annouStyle from "./Style";

export function Announcement() {
  return (
    <View style={annouStyle.container}>
      <Image
        source={require("../../assets/nubank.png")}
        style={annouStyle.cardImg}
      />
      <View style={annouStyle.bottomCard}>
        <Text style={annouStyle.title}>Nu Limite Garantido</Text>
        <Text style={annouStyle.info}>
          Seu dinheiro vira mais limite redendo a 100% do CDI
        </Text>

        <View style={annouStyle.button}>
          <Text style={annouStyle.buttonText}>Ver mais</Text>
        </View>
      </View>
    </View>
  );
}
