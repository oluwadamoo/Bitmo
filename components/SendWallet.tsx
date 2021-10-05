import React from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { RootStackScreenProps } from "../types";

const SendWallet = ({
  navigation,
  route,
}: RootStackScreenProps<"Send Wallet">) => {
  const { hasBSID } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
      <View>
        {hasBSID && (
          <TextInput
            placeholder="BS Receiver ID"
            style={{
              height: 40,
              // backgroundColor: "#f0f0f0",
              paddingHorizontal: 10,
              borderRadius: 15,
              fontSize: 15,
              elevation: 1,
              marginVertical: 10,
            }}
          />
        )}
        <TextInput
          placeholder="Amount"
          style={{
            height: 40,
            // backgroundColor: "#f0f0f0",
            paddingHorizontal: 10,
            borderRadius: 15,
            fontSize: 15,
            elevation: 1,
            marginVertical: 8,
          }}
        />
        <Pressable
          style={{
            backgroundColor: "#317fde",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            marginTop: 8,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Send
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SendWallet;
