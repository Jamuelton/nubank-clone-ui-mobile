import { FlatList, Text, View } from "react-native";

import contentStyle from "./Style";
import { Account } from "../account/Accont";
import { SelectFunc } from "../selectFunc/SelectFunc";
import { MaterialIcons } from "@expo/vector-icons";

import { MyCards } from "../myCards/MyCards";
import { InfoCard } from "../infoCard/InfoCard";
import { Credit } from "../credit/Credit";
import { Card } from "../card/Card";

export function Content() {
  const SELECT_DATA = [
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

  const INFO_DATA = [
    {
      id: "1",
      purpleText: " Pix no credito: ",
      blackText: "transfira sem usar o seu saldo",
    },
    {
      id: "2",
      purpleText: "Aumente seu limite do cartao ",
      blackText: "hoje com o Nu Limite Garantido",
    },
    {
      id: "3",
      purpleText: "Convide amigos para o Nubank ",
      blackText: "e desbloquei brascoes incriveis",
    },
  ];

  const SelectItem = ({ icon, text }) => <SelectFunc icon={icon} text={text} />;
  const InfoItem = ({ purpleText, blackText }) => (
    <InfoCard purpleText={purpleText} blackText={blackText} />
  );
  return (
    <View style={contentStyle.container}>
      <View>
        <Account />
      </View>
      <View>
        <FlatList
          data={SELECT_DATA}
          renderItem={({ item }) => (
            <SelectItem icon={item.icon} text={item.text} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View style={contentStyle.cardView}>
        <MyCards />
      </View>
      <View>
        <FlatList
          data={INFO_DATA}
          renderItem={({ item }) => (
            <InfoItem purpleText={item.purpleText} blackText={item.blackText} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View>
        <Credit />
      </View>
      <View>
        <Card />
      </View>
      <View>
        <Text>Investimento</Text>
      </View>
      <View>
        <Text>descubra mais</Text>
      </View>
    </View>
  );
}
