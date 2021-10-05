import { AntDesign, Octicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
const avatar = require("../assets/images/avatars/user-male.png");

interface props {
  item: {
    name: string;
    desc: string;
    noOfReviews: number;
    stars: number;
    location: string;
  };
  navigation: {
    navigate: Function;
  };
}
const ServiceProviders = ({ item, navigation }: props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
          borderWidth: 0.6,
          borderColor: "#bbbdbb",
          elevation: 2,
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          borderRadius: 10,
          width: Dimensions.get("screen").width - 20,
        },
      ]}
      onPress={() => navigation.navigate("Request for Service")}
    >
      <View style={{ padding: 6 }}>
        <Image
          source={avatar}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          {item.name}
        </Text>
        <Text style={{ fontSize: 18 }}>{item.desc}</Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 15,
            alignItems: "center",
          }}
        >
          <AntDesign name="star" size={16} color="#edde05" />
          <Text style={{ color: "#edde05", fontSize: 18, marginHorizontal: 5 }}>
            {item.stars}.0
          </Text>
          <Text style={{ fontSize: 18 }}> ({item.noOfReviews} reviews)</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Octicons name="location" size={13} color="#ed0556" />
          <Text style={{ color: "#00709e", fontSize: 12, marginLeft: 5 }}>
            {item.location} (5KM from your current location)
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ServiceProviders;
