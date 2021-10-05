import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import OrderServices from "../components/OrderServices";
import Review from "../components/Review";
import Reviews from "../components/Reviews";
import SocialAccounts from "../components/SocialAccounts";
// const serviceImg = require("../assets/images/samples/event-bartending-service@event.jpg");
const avatar = require("../assets/images/avatars/male_avatar.png");
const serviceImg = require("../assets/images/samples/bartending-service.png");

const data = [
  {
    id: 1,
    name: "Jennet Bako",
    stars: 5.0,
    time: "2 days ago",
    review:
      "Frank Idoho is a very good web developer, he is very fast in responding to his clients and diligent to his work. Always on time!",
  },
  {
    id: 2,
    name: "Jennet Bako",
    stars: 5.0,
    time: "2 days ago",
    review:
      "Frank Idoho is a very good web developer, he is very fast in responding to his clients and diligent to his work. Always on time!",
  },
];

const ServiceProviderScreen = () => {
  const [orderService, setOrderService] = useState(true);
  const [review, setReview] = useState(false);
  const [social, setSocial] = useState(false);

  const openOrderServices = () => {
    setOrderService(true);
    setReview(false);
    setSocial(false);
  };
  const openReviews = () => {
    setOrderService(false);
    setReview(true);
    setSocial(false);
  };
  const openSocial = () => {
    setOrderService(false);
    setReview(false);
    setSocial(true);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={serviceImg}
          style={{ width: Dimensions.get("screen").width, height: 250 }}
        />
        <View style={styles.topBanner}>
          <View style={styles.topBannerLeft}>
            <Image
              source={avatar}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <Text
              style={{
                marginHorizontal: 8,
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Frank Idoho
            </Text>
            <AntDesign name="star" size={16} color="#edde05" />
            <Text
              style={{ color: "#edde05", fontSize: 18, marginHorizontal: 5 }}
            >
              5.0
            </Text>
          </View>
          <View style={styles.topBannerRight}>
            <View style={styles.iconContainer}>
              <Ionicons name="share-social-sharp" size={24} color="#fff" />
            </View>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="heart" size={24} color="#fff" />
            </View>
          </View>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Pressable
            style={[styles.category, orderService && { elevation: 0 }]}
            onPress={openOrderServices}
          >
            <Text
              style={[
                styles.categoryText,
                orderService && { color: "#8a8485" },
              ]}
            >
              Order Services
            </Text>
          </Pressable>

          <Pressable
            style={[styles.category, review && { elevation: 0 }]}
            onPress={openReviews}
          >
            <Text style={[styles.categoryText, review && { color: "#8a8485" }]}>
              Reviews
            </Text>
          </Pressable>
          <Pressable
            style={[styles.category, social && { elevation: 0 }]}
            onPress={openSocial}
          >
            <Text style={[styles.categoryText, social && { color: "#8a8485" }]}>
              Social Accounts
            </Text>
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          {orderService && <OrderServices />}
          {review && <Reviews />}
          {social && <SocialAccounts />}
        </View>
      </View>
    </ScrollView>
  );
};

export default ServiceProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    position: "relative",
  },
  topBanner: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#5751519c",
    padding: 10,
  },
  topBannerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  topBannerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginHorizontal: 5,
    width: 32,
    height: 32,
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#57515113",
  },
  category: {
    elevation: 1,
    backgroundColor: "white",
    width: Dimensions.get("screen").width / 3 - 5,
    paddingBottom: 5,
  },
  categoryText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#00709e",
  },
});
