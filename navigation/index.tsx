import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Dimensions,
  Image,
  Pressable,
  StatusBar,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";

import TabOneScreen from "../screens/HomeScreen";

import {
  RootDrawerParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  RootDrawerScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RecoverAccountScreen from "../screens/Auth/RecoverAccountScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import { View, Text } from "../components/Themed";
import { TextInput } from "react-native-gesture-handler";
import CategorieScreen from "../screens/CategorieScreen";
import MessageScreen from "../screens/MessagesScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import AccountScreen from "../screens/AccountScreen";
import CategoriesCard from "../components/CategoriesCard";
import CategoryCard from "../components/CategoryCard";
import SingleCategoryScreen from "../screens/SingleCategoryScreen";
import SingleMessageScreen from "../screens/SingleMessageScreen";
import ServiceProviderScreen from "../screens/ServiceProviderScreen";
import RequestForServiceScreen from "../screens/RequestForServiceScreen";
import ManageRequestScreen from "../screens/ManageRequestScreen";
import WalletScreen from "../screens/WalletScreen";
import SendWallet from "../components/SendWallet";
import VerifyOtpForAccountScreenPhone from "../screens/Auth/VerifyOtpForAccountScreenPhone";
import VerifyOtpForPasswordScreen from "../screens/Auth/VerifyOtpForPasswordScreen";
import ResetPassword from "../screens/Auth/ResetPassword";
import VerifyOtpForAccountScreenEmail from "../screens/Auth/VerifyOtpForAccountScreenEmail";
import PostService from "../screens/PostService";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} /> */}

      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Recover Account" component={RecoverAccountScreen} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
      <Stack.Screen
        name="Verify Otp Sent To Email"
        component={VerifyOtpForAccountScreenEmail}
      />
      <Stack.Screen
        name="Verify Otp Sent To Phone"
        component={VerifyOtpForAccountScreenPhone}
      />
      <Stack.Screen
        name="Verify Otp For Password Recovery"
        component={VerifyOtpForPasswordScreen}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerTitle: "Create New Account" }}
      />
    </Stack.Navigator>
  );
}
const size = 24;

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeNav"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function CategoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategorieScreen}
        options={{
          title: "Categories",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Category"
        component={SingleCategoryScreen}
        options={{
          title: "Categories",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

function MessageNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Message"
        component={SingleMessageScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

function ServiceNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite Partners"
        component={FavoriteScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Service Providers"
        component={ServiceProviderScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Request for Service"
        component={RequestForServiceScreen}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

const DrawHeader = () => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <Image
          source={require("../assets/images/avatars/male_avatar.png")}
          style={{ height: 44, width: 44, borderRadius: 22 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#706f6f" }}>
            Obi Pascal Banjuare
          </Text>
          <Text>BS.ID: 245224523</Text>
        </View>
      </View>
      <View style={{ height: 0.7, backgroundColor: "#706f6f", marginTop: 5 }} />
    </View>
  );
};

const WalletNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Send Wallet"
        component={SendWallet}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home Screen">
      <Drawer.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          drawerIcon: () => <DrawHeader />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LoginScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" color="red" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Manage Request"
        component={ManageRequestScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="email-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Inbox"
        component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wallet-travel"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet Stack"
        component={WalletNavigator}
        options={{
          title: "Wallet",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Post a service"
        component={PostService}
        options={{
          drawerIcon: ({ color }) => (
            <Feather name="edit" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feedback"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color }) => (
            <SimpleLineIcons name="pencil" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Invite Friends"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="send" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Feather name="help-circle" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const color = "#00709e";

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Auth"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CategoryNav"
        component={CategoryNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Category",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-checkbox"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessageNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={ServiceNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
