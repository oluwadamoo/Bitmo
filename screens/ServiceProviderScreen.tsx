import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ServiceProviders from "../components/ServiceProviders";

import { useNavigation } from "@react-navigation/core";

const serviceProviders = [
  {
    id: 1,
    name: "Frank Idoho",
    desc:
      "I write blogs, articles, Newsletters  and other technical writings with time efficiency.",
    noOfReviews: 567,
    stars: 5.0,
    location: "Lekki, Lagos",
  },
  {
    id: 2,
    name: "Frank Idoho",

    desc:
      "I write blogs, articles, Newsletters  and other technical writings with time efficiency.",
    noOfReviews: 567,
    stars: 5.0,
    location: "Lekki, Lagos",
  },
  {
    id: 3,
    name: "Frank Idoho",

    desc:
      "I write blogs, articles, Newsletters  and other technical writings with time efficiency.",
    noOfReviews: 567,
    stars: 5.0,
    location: "Lekki, Lagos",
  },
];
const ServiceProviderScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={{ marginLeft: 10, marginBottom: 10, fontSize: 17 }}>
          Service Providers closest to you
        </Text>
        <FlatList
          data={serviceProviders}
          horizontal
          renderItem={({ item }) => (
            <ServiceProviders item={item} navigation={navigation} />
          )}
        />
        <Text style={{ marginLeft: 10, marginVertical: 10, fontSize: 17 }}>
          Also Recommended
        </Text>
        <FlatList
          data={serviceProviders}
          horizontal
          renderItem={({ item }) => (
            <ServiceProviders item={item} navigation={navigation} />
          )}
        />
      </View>
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default ServiceProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  wrapper: {},
});
