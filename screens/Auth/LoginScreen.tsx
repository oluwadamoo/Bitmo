import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import { loginCall } from "../../apiCalls";
import Button from "../../components/Button";
// import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import * as Device from "expo-device";
import axios from "axios";

const logo = require("../../assets/images/logos/blue.png");

export default function LoginScreen() {
  const navigation = useNavigation();
  const [client_email, setClientEmail] = useState("");
  const [email_validation_message, setEmailValidationMessage] = useState(
    null || ""
  );
  const [password, setPassword] = useState("");
  const [password_validation_message, setPasswordValidationMessage] = useState(
    null || ""
  );
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);

  const verifyField = (field: string) => {
    switch (field) {
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

      case "password":
        if (password.length < 1) {
          setPasswordValidationMessage("Password field is compulsory!");
          setIsError(true);
        } else {
          setPasswordValidationMessage("");
          setIsError(false);
        }
        break;
    }
  };

  const handleLogin = async () => {
    // loginCall({ client_email, password });
    // // console.log(user);
    try {
      if (isError == false) {
        setLoading(true);
        let device_name = Device.modelName;
        let userCredentials = {
          client_email,
          password,

          device_name,
        };
        let headers = {
          Client_Secret: "Ku0DjUFHdGUUbvEkHqv975WLPQv5DJYpK6k",
          App_No: "07fix32665",
          Resource_Code: "301",
        };

        const response = await axios.post(
          "https://backend.bitmoservice.com/api/resources/v1/client/login",
          userCredentials,
          { headers: headers }
        );

        if (response.data.status == true) {
          Alert.alert("Success!", response.data.message, [
            {
              text: "Alright Thanks",
              onPress: () => navigation.navigate("HomeScreen"),
            },
          ]);
        } else {
          Alert.alert("Error!", response.data.message, [
            {
              text: "Oops! Aiit",
            },
          ]);
        }

        // } else {
        //   Alert.alert("Error!", response.data.message);
        // }

        setClientEmail("");

        setPassword("");

        setLoading(false);

        console.log(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
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
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#303030"
            style={styles.authInput}
            value={password}
            onChangeText={setPassword}
            onEndEditing={() => verifyField("email")}
          />
          {isError && (
            <Text style={{ color: "red", fontFamily: "monospace" }}>
              {password_validation_message}
            </Text>
          )}
          {isLoading ? (
            <Pressable
              onPress={handleLogin}
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
              onPress={handleLogin}
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
          {/* <Button title="Login" /> */}

          <Pressable
            onPress={() => navigation.navigate("SignUp")}
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

          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>OR</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18 }}>Forgotten Password?</Text>
              <Pressable onPress={() => navigation.navigate("Recover Account")}>
                <Text style={{ fontSize: 18, marginLeft: 8, color: "#0000ee" }}>
                  Reset here
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
