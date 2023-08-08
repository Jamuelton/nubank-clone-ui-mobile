import { Image, View, Text } from "react-native";
import annouStyle from "./Style";

export function Announcement({ img, title, content, button }) {
  return (
    <View style={annouStyle.container}>
      <Image source={img} style={annouStyle.cardImg} />
      <View style={annouStyle.bottomCard}>
        <Text style={annouStyle.title}>{title}</Text>
        <Text style={annouStyle.info}>{content}</Text>

        <View style={annouStyle.button}>
          <Text style={annouStyle.buttonText}>{button}</Text>
        </View>
      </View>
    </View>
  );
}
