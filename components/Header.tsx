import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  Dimensions,
  Pressable,
} from "react-native";
const logo = require("../assets/images/logos/logo-text-white.png");

interface navigationProps {
  navigation: {
    openDrawer: Function;
  };
}
export default function Header({ navigation }: navigationProps) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("screen").width / 2.15,
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              onPress={() => navigation.openDrawer()}
            >
              <Feather name="menu" color="#fff" size={24} />
            </Pressable>
            <Image source={logo} style={{ height: 30, width: 130 }} />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: 65,
              justifyContent: "space-between",
            }}
          >
            <View>
              <View
                style={{
                  width: 18,
                  height: 18,
                  marginBottom: -8,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  backgroundColor: "yellow",
                }}
              >
                <Text>0</Text>
              </View>
              <AntDesign name="shoppingcart" color="#fff" size={24} />
            </View>
            <View>
              <View
                style={{
                  width: 18,
                  height: 18,
                  marginBottom: -8,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  backgroundColor: "yellow",
                }}
              >
                <Text>0</Text>
              </View>
              <Ionicons name="notifications-outline" size={24} color="#fff" />
            </View>
          </View>
        </View>
        <View style={styles.topRight}></View>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="What are you looking for?"
          style={styles.formInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00709e",
  },
  top: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
  topLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topRight: {},
  form: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  formInput: {
    backgroundColor: "#fff",
    borderRadius: 16,
    height: 38,
    paddingHorizontal: 17,
    fontSize: 16,
  },
});
