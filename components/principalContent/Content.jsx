import { Text, View } from "react-native";

import contentStyle from "./Style";
import { Account } from "../account/Accont";

export function Content() {
  return (
    <View style={contentStyle.container}>
      <View>
        <Account />
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
