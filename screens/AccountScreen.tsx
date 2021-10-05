import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const avatar = require("../assets/images/avatars/male_avatar.png");
export default function AccountScreen() {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editId, setEditId] = useState(false);

  return (
    <ScrollView
      style={{
        padding: 15,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 5 }}
      >
        <Image
          source={avatar}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
            marginBottom: 8,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>
              Obi Pascal Banjuare
            </Text>
            <Text>Names</Text>
          </View>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={24}
            color="#00709e"
            onPress={() => setEditName(!editName)}
          />
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: 0.5,
            alignSelf: "center",
            width: Dimensions.get("screen").width,
          }}
        />
        {editName && (
          <View>
            <TextInput placeholder="Full Names" style={[styles.input]} />
          </View>
        )}
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
            marginBottom: 8,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>
              pascalobi83@gmail.com
            </Text>
            <Text>Email Address</Text>
          </View>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={24}
            color="#00709e"
            onPress={() => setEditEmail(!editEmail)}
          />
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: 0.5,
            alignSelf: "center",
            width: Dimensions.get("screen").width,
          }}
        />
        {editEmail && (
          <View>
            <TextInput placeholder="Email Address" style={[styles.input]} />
          </View>
        )}
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
            marginBottom: 8,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>0705078903</Text>
            <Text>Phone Number</Text>
          </View>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={24}
            color="#00709e"
            onPress={() => setEditPhone(!editPhone)}
          />
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: 0.5,
            alignSelf: "center",
            width: Dimensions.get("screen").width,
          }}
        />
        {editPhone && (
          <View>
            <TextInput
              placeholder="Phone Number"
              keyboardType="number-pad"
              style={[styles.input]}
            />
          </View>
        )}
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
            marginBottom: 8,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>National ID</Text>
            <Text>Proof of Identification</Text>
          </View>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={24}
            color="#00709e"
            onPress={() => setEditId(!editId)}
          />
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: 0.5,
            alignSelf: "center",
            width: Dimensions.get("screen").width,
          }}
        />
        {editId && (
          <View>
            <TextInput placeholder="NIN Number" style={[styles.input]} />
          </View>
        )}
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 35,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 15,
    padding: 10,
    borderRadius: 10,
  },
});
