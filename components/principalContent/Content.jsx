import { FlatList, Text, View } from "react-native";

import contentStyle from "./Style";
import { Account } from "../account/Accont";
import { SelectFunc } from "../selectFunc/SelectFunc";
import { MaterialIcons } from "@expo/vector-icons";

import { MyCards } from "../myCards/MyCards";
import { InfoCard } from "../infoCard/InfoCard";
import { Credit } from "../credit/Credit";
import { Card } from "../card/Card";
import { Announcement } from "../announcement/Announcement";

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

  const ANNOUN_DATA = [
    {
      id: "1",
      img: require("../../assets/nubank.png"),
      title: "Nu Limite Garantido",
      content: "Seu dinheiro vira mais limite redendo a 100% do CDI",
      button: "Ver mais",
    },
    {
      id: "2",
      img: require("../../assets/nubank.png"),
      title: "Nu Limite Garantido",
      content: "Seu dinheiro vira mais limite redendo a 100% do CDI",
      button: "Ver mais",
    },
    {
      id: "3",
      img: require("../../assets/nubank.png"),
      title: "Nu Limite Garantido",
      content: "Seu dinheiro vira mais limite redendo a 100% do CDI",
      button: "Ver mais",
    },
  ];

  const SelectItem = ({ icon, text }) => <SelectFunc icon={icon} text={text} />;
  const InfoItem = ({ purpleText, blackText }) => (
    <InfoCard purpleText={purpleText} blackText={blackText} />
  );
  const AnnounItem = ({ img, title, content, button }) => (
    <Announcement img={img} title={title} content={content} button={button} />
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
        <Card
          title="Emprestimo"
          content="Valor disponível de até R$ 25.000,00"
        />
      </View>
      <View>
        <Card
          title="Investimentos"
          content="O jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de R$1. Saiba mais.  "
        />
      </View>
      <View style={contentStyle.cardView}>
        <Text style={contentStyle.text}>Descubra mais</Text>
        <FlatList
          data={ANNOUN_DATA}
          renderItem={({ item }) => (
            <AnnounItem
              img={item.img}
              title={item.title}
              content={item.content}
              button={item.button}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
}
