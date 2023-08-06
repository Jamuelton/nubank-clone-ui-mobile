import { Text, View } from "react-native";
import userBarStyle from "./Style";

export function UserBar() {
  return (
    <View style={userBarStyle.container}>
      <View style={userBarStyle.content}>
        <View style={userBarStyle.topPart}>
          <View>
            <Text>perfil</Text>
          </View>
          <View style={userBarStyle.icons}>
            <Text>olho</Text>
            <Text>interrogação</Text>
            <Text>user+</Text>
          </View>
        </View>
        <View style={userBarStyle.userName}>
          <Text>Nome usuário</Text>
        </View>
      </View>
    </View>
  );
}
