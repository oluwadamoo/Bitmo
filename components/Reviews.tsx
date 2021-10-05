import React from "react";
import { View, Text, FlatList } from "react-native";
import Review from "./Review";

const data = [
  {
    id: 1,
    name: "Jennet Bako",
    stars: 5.0,
    time: "2 days ago",
    review:
      "Frank Idoho is a very good web developer, he is very fast in responding to his clients and diligent to his work. Always on time!",
  },
  {
    id: 2,
    name: "Jennet Bako",
    stars: 5.0,
    time: "2 days ago",
    review:
      "Frank Idoho is a very good web developer, he is very fast in responding to his clients and diligent to his work. Always on time!",
  },
];
const Reviews = () => {
  return (
    <View>
      <Text style={{ color: "#8a8485", fontSize: 22 }}>Reviews</Text>
      <FlatList data={data} renderItem={({ item }) => <Review data={item} />} />
      <View style={{ height: 50 }} />
    </View>
  );
};

export default Reviews;
