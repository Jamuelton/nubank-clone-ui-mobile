import { Text, View } from "react-native";
import buttonStyle from "./Style";

export function Container() {
  return (
    <View>
      <View>
        <Text>Usuário</Text>
      </View>
      <View>
        <Text>Produtos</Text>
      </View>
      <View>
        <Text>Meus cartões</Text>
      </View>
      <View>
        <Text>Emprestimos</Text>
      </View>
    </View>
  );
}
