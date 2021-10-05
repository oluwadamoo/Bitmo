import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as Device from "expo-device";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import Button from "../../components/Button";
import { styles } from "./styles";

const logo = require("../../assets/images/logos/blue.png");
export default function SignUpScreen() {
  const [client_name, setClientName] = useState("");
  const [name_validation_message, setNameValidationMessage] = useState(
    null || ""
  );
  const [client_email, setClientEmail] = useState("");
  const [email_validation_message, setEmailValidationMessage] = useState(
    null || ""
  );
  const [client_phone_number, setClientPhone] = useState("");
  const [phone_validation_message, setPhoneValidationMessage] = useState(
    null || ""
  );
  const [client_address, setClientAddress] = useState("");
  const [address_validation_message, setAddressValidationMessage] = useState(
    null || ""
  );
  const [password, setPassword] = useState("");
  const [password_validation_message, setPasswordValidationMessage] = useState(
    null || ""
  );
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const verifyField = (field: string) => {
    switch (field) {
      case "name":
        if (client_name.length < 1) {
          setIsError(true);
          setNameValidationMessage("The name field is compulsory!");
        } else if (client_name.length < 5) {
          setIsError(true);
          setNameValidationMessage("Please enter your full name!");
        } else {
          setIsError(false);
          setNameValidationMessage("");
        }
        break;
      case "address":
        if (client_address.length < 1) {
          setIsError(true);
          setAddressValidationMessage("The address field is compulsory!");
        } else {
          setIsError(false);
          setAddressValidationMessage("");
        }
        break;
      case "email":
        if (client_email.length > 3) {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const result = re.test(String(client_email).toLowerCase());
          if (result == false) {
            setEmailValidationMessage("Please enter a valid email address!");
            setIsError(true);
          } else {
            setIsError(false);
            setEmailValidationMessage("");
          }
        } else {
          setEmailValidationMessage("Email should be more than 3 characters!");
          setIsError(true);
        }
        break;
      case "phone":
        if (client_phone_number.length < 11) {
          setPhoneValidationMessage("Phone number should be 11 numbers!");
          setIsError(true);
        } else {
          setIsError(false);
          setPhoneValidationMessage("");
        }
        break;
      case "password":
        if (password.length < 1) {
          setPasswordValidationMessage("Password field is compulsory!");
          setIsError(true);
        } else if (password !== password_confirmation) {
          setPasswordValidationMessage("Password doesn't match!");
          setIsError(true);
        } else {
          setPasswordValidationMessage("");
          setIsError(false);
        }
        break;
    }
  };

  const handleRegister = async () => {
    try {
      if (isError == false) {
        setLoading(true);
        let device_name = Device.modelName;
        let userCredentials = {
          client_name,
          client_email,
          client_phone_number,
          client_address,
          password,
          password_confirmation,
          device_name,
        };
        let headers = {
          Client_Secret: "Ku0DjUFHdGUUbvEkHqv975WLPQv5DJYpK6k",
          App_No: "07fix32665",
          Resource_Code: "300",
        };

        const response = await axios.post(
          "https://backend.bitmoservice.com/api/resources/v1/client/register",
          userCredentials,
          { headers: headers }
        );

        Alert.alert("Success!", response.data.message, [
          {
            text: "Alright Thanks",
            onPress: () =>
              navigation.navigate("Verify Otp Sent To Email", {
                auth_token: response.data.data.auth_token,
              }),
          },
        ]);
        // } else {
        //   Alert.alert("Error!", response.data.message);
        // }

        setClientAddress("");
        setClientEmail("");
        setClientName("");
        setClientPhone("");
        setClientAddress("");
        setPassword("");
        setPasswordConfirmation("");
        setLoading(false);

        console.log(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        style={[styles.wrapper, { marginTop: -2 }]}
      >
        <View style={styles.authTop}>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.authForm}>
          <TextInput
            placeholder="Email"
            style={styles.authInput}
            placeholderTextColor="#303030"
            value={client_email}
            onChangeText={setClientEmail}
            keyboardType="email-address"
            onEndEditing={() => verifyField("email")}
          />
          {isError && (
            <Text style={{ color: "red", fontFamily: "monospace" }}>
              {email_validation_message}
            </Text>
          )}
          <TextInput
            placeholder="Your Full Name"
            style={styles.authInput}
            placeholderTextColor="#303030"
            value={client_name}
            onChangeText={setClientName}
            onEndEditing={() => verifyField("name")}
          />
          {isError && (
            <Text style={{ color: "red", fontFamily: "monospace" }}>
              {name_validation_message}
            </Text>
          )}
          <TextInput
            placeholder="Phone Number"
            style={styles.authInput}
            placeholderTextColor="#303030"
            value={client_phone_number}
            onChangeText={setClientPhone}
            keyboardType="number-pad"
            onEndEditing={() => verifyField("phone")}
          />
          {isError && (
            <Text style={{ color: "red", fontFamily: "monospace" }}>
              {phone_validation_message}
            </Text>
          )}
          <TextInput
            placeholder="Resident Address"
            style={styles.authInput}
            placeholderTextColor="#303030"
            value={client_address}
            onChangeText={setClientAddress}
            onEndEditing={() => verifyField("address")}
          />
          {isError && (
            <Text style={{ color: "red", fontFamily: "monospace" }}>
              {address_validation_message}
            </Text>
          )}
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#303030"
            style={styles.authInput}
            value={password}
            onChangeText={setPassword}
            onEndEditing={() => verifyField("password")}
          />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#303030"
            style={styles.authInput}
            value={password_confirmation}
            onChangeText={setPasswordConfirmation}
            onEndEditing={() => verifyField("confirm")}
          />
          {isError && (
            <Text style={{ color: "red", fontFamily: "monospace" }}>
              {password_validation_message}
            </Text>
          )}
          {isLoading ? (
            <Pressable
              style={{
                backgroundColor: "#00709e",
                height: 38,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 14,
                marginTop: 20,
              }}
            >
              <ActivityIndicator color="#fff" />
            </Pressable>
          ) : (
            <Pressable
              onPress={handleRegister}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  backgroundColor: "#00709e",
                  height: 38,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  marginTop: 20,
                },
              ]}
            >
              <Text style={{ color: "#fff", fontSize: 19 }}>Sign Up</Text>
            </Pressable>
          )}
          {/* <Button title="Sign Up" /> */}
          <View
            style={{
              width: Dimensions.get("screen").width / 2,
              height: 0.5,
              alignSelf: "center",
              marginTop: 20,
              marginBottom: -5,
              backgroundColor: "#303030",
            }}
          />

          {!isLoading && (
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  backgroundColor: "#00709e",
                  height: 38,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  marginTop: 20,
                },
              ]}
            >
              <Text style={{ color: "#fff", fontSize: 19 }}>Login</Text>
            </Pressable>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
