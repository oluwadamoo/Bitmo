import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image } from "react-native";

const avatar = require("../assets/images/avatars/user.png");
interface props {
  data: {
    name: string;
    stars: number;
    time: string;
    review: string;
  };
}
const Review = ({ data }: props) => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            borderWidth: 1,
            borderColor: "#8a8485",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Image source={avatar} style={{ width: 42, height: 42 }} />
        </View>

        <Text style={{ fontSize: 20, fontWeight: "700", color: "#8a8485" }}>
          {data.name}
        </Text>
      </View>
      <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
        <AntDesign name="star" size={16} color="#edde05" />
        <Text style={{ color: "#edde05", fontSize: 18, marginHorizontal: 5 }}>
          {data.stars}
        </Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#8a8485" }}>
          {data.time}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          marginLeft: 20,
          marginRight: 10,
          textAlign: "center",
        }}
      >
        " {data.review} "
      </Text>
    </View>
  );
};

export default Review;
