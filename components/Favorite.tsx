import { Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const avatar = require("../assets/images/avatars/user-male.png");

interface props {
  navigation: {
    navigate: Function;
  };
}
export default function FavoriteScreen({ navigation }: props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
      ]}
      onPress={() => navigation.navigate("Service Providers")}
    >
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <View style={styles.leftImgContainer}>
            <Image source={avatar} style={styles.leftImg} />
          </View>
          <View style={styles.leftText}>
            <Text style={styles.leftTextName}>Frank Idoho</Text>
            <Text style={styles.leftTextCategory}>Service Category</Text>
            <Text style={styles.leftTextService}>Service Type</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Ionicons name="close-outline" size={30} color="#757876" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 7,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftImgContainer: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bbbdbb",
    marginRight: 15,
  },
  leftImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  leftText: {},
  leftTextName: {
    fontSize: 18,
    fontWeight: "600",
  },
  leftTextCategory: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444544",
  },
  leftTextService: {
    fontSize: 12,
    color: "#757876",
    fontWeight: "600",
  },
  right: {},
});
