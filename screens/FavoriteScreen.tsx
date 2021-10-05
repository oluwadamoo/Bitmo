import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Favorite from "../components/Favorite";

import { useNavigation } from "@react-navigation/core";

export default function FavoriteScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text></Text>
        <View style={styles.favorites}>
          <FontAwesome5 name="heart" size={80} color="#bbbdbb" />
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            No favorite partner added!
          </Text>
        </View>

        <Favorite navigation={navigation} />
        <Favorite navigation={navigation} />
        <Favorite navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    padding: 10,
  },
  favorites: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
});
