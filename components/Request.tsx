import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

interface RequestProps {
  request: {
    status: string;
    date: string;
    location: string;
    appointmentTime: string;
  };
}
const Request = ({ request }: RequestProps) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        marginVertical: 10,
        elevation: 2,
        marginHorizontal: 15,
        backgroundColor: "#edf3fa",
        borderRadius: 10,
        height: 200,
        minWidth: 300,
      }}
    >
      {request.status == "Approved" && (
        <View
          style={{
            backgroundColor: "#176cd4",
            alignSelf: "center",
            width: 100,
            padding: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {request.status}
          </Text>
        </View>
      )}
      {request.status == "Pending" && (
        <View
          style={{
            backgroundColor: "#c2c75d",
            alignSelf: "center",
            width: 100,
            padding: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {request.status}
          </Text>
        </View>
      )}
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#787878",
            textAlign: "center",
          }}
        >
          {request.date}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <View
            style={{
              height: 36,
              width: 36,
              borderRadius: 18,
              backgroundColor: "#949fa6",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="location-pin" size={24} color="black" />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: "700", color: "#787878" }}>
              Delivery Location:
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#4f4e4e" }}
            >
              {request.location}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <View
            style={{
              height: 36,
              width: 36,
              borderRadius: 18,
              backgroundColor: "#949fa6",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="clock" size={24} color="black" />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: "700", color: "#787878" }}>
              Appointment Time:
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#4f4e4e" }}
            >
              {request.location}
            </Text>
          </View>
        </View>
        <View>{/* size={24} color="black" /> */}</View>
      </View>
    </View>
  );
};

export default Request;
