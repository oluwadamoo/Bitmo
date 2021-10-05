import {
  Entypo,
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { RootDrawerScreenProps } from "../types";

const showSmtn = () => {};
const WalletScreen = ({
  navigation,
}: RootDrawerScreenProps<"Wallet Stack">) => {
  //   const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          marginLeft: -5,
          height: 80,
          elevation: 4,
          width: Dimensions.get("screen").width + 10,
          paddingTop: 10,
          marginBottom: 8,
          backgroundColor: "#f2f2f2",
        }}
      >
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons
            name="menu-outline"
            size={30}
            color="black"
            style={{ marginTop: 30, marginLeft: 15 }}
          />
        </Pressable>
        <Text
          style={{
            textAlign: "center",
            marginTop: -30,
            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          Wallet
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <View
          style={{
            backgroundColor: "#317fde",
            minHeight: 180,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
            NGN 0.00
          </Text>
          <Text style={{ color: "#adadad", fontSize: 15 }}>
            Available Balance
          </Text>
          <View
            style={{
              height: 0.5,
              backgroundColor: "#adadad",
              marginVertical: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 5,
            }}
          >
            <Pressable
              style={{ alignItems: "center", justifyContent: "center" }}
              onPress={() =>
                navigation.navigate("Send Wallet", {
                  title: "Send Money",
                  hasBSID: true,
                })
              }
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 50,
                  height: 40,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="send" size={30} color="#317fde" />
              </View>
              <Text style={{ fontWeight: "700", color: "#fff" }}>
                Send Money
              </Text>
            </Pressable>

            <Pressable
              style={{ alignItems: "center", justifyContent: "center" }}
              onPress={() =>
                navigation.navigate("Send Wallet", {
                  title: "Request Money",
                  hasBSID: true,
                })
              }
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 50,
                  height: 40,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome5
                  name="hand-holding-usd"
                  size={30}
                  color="#317fde"
                />
              </View>
              <Text style={{ fontWeight: "700", color: "#fff" }}>
                Request Money
              </Text>
            </Pressable>

            <Pressable
              style={{ alignItems: "center", justifyContent: "center" }}
              onPress={() =>
                navigation.navigate("Send Wallet", { title: "Top Up" })
              }
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 50,
                  height: 40,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="bank" size={30} color="#317fde" />
              </View>
              <Text style={{ fontWeight: "700", color: "#fff" }}>Top Up</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 12 }}>
        <Text style={{ fontWeight: "700", fontSize: 30, color: "#454545" }}>
          Transaction Activities
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <FontAwesome name="money" size={30} color="green" />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "700", color: "#454545" }}
              >
                Frank Idoho
              </Text>
              <Text
                style={{ fontWeight: "700", fontSize: 17, color: "#454545" }}
              >
                transaction purpose
              </Text>
              <Text style={{ fontFamily: "monospace" }}>NGN 2,500.00</Text>
            </View>
          </View>
          <EvilIcons name="close" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default WalletScreen;
