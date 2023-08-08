import { ScrollView, Text, View } from "react-native";
import { UserBar } from "../userBar/UserBar";
import containerStyle from "./Style";
import { Content } from "../principalContent/Content";

export function Container() {
  return (
    <ScrollView>
      <View style={containerStyle.container}>
        <UserBar />
        <Content />
      </View>
    </ScrollView>
  );
}
