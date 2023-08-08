import { FlatList, Text, View } from "react-native";

import contentStyle from "./Style";
import { Account } from "../account/Accont";
import { SelectFunc } from "../selectFunc/SelectFunc";
import { MaterialIcons } from "@expo/vector-icons";

import { MyCards } from "../myCards/MyCards";

export function Content() {
  const selectData = [
    {
      id: "1",
      icon: <MaterialIcons name="api" size={24} color="black" />,
      text: "Pix",
    },
    {
      id: "2",
      icon: <MaterialIcons name="money" size={24} color="black" />,
      text: "Saldo",
    },
    {
      id: "3",
      icon: (
        <MaterialIcons name="account-balance-wallet" size={24} color="black" />
      ),
      text: "Carteira",
    },
  ];

  const Item = ({ icon, text }) => <SelectFunc icon={icon} text={text} />;
  return (
    <View style={contentStyle.container}>
      <View>
        <Account />
      </View>
      <View>
        <FlatList
          data={selectData}
          renderItem={({ item }) => <Item icon={item.icon} text={item.text} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View style={contentStyle.cardView}>
        <MyCards />
      </View>
      <View>
        <Text>Emprestimos</Text>
      </View>
    </View>
  );
}
