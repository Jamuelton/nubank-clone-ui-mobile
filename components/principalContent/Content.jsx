import { Text, View } from "react-native";

import contentStyle from "./Style";

export function Content() {
  return (
    <View style={contentStyle.container}>
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
