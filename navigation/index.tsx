/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Dimensions, Image, Pressable, StatusBar } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootDrawerParamList, RootStackParamList, RootTabParamList, RootTabScreenProps, RootDrawerScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RecoverAccountScreen from '../screens/Auth/RecoverAccountScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import { View, Text } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';
import CategorieScreen from '../screens/CategorieScreen';
import MessageScreen from '../screens/MessageScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';
import CategoriesCard from '../components/CategoriesCard';
import CategoryCard from '../components/CategoryCard';
import SingleCategoryScreen from '../screens/SingleCategoryScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
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
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} /> */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}


function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Recover Account" component={RecoverAccountScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTitle: "Create New Account" }} />
    </Stack.Navigator>
  )
}
const size = 24

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function CategoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategorieScreen} options={{
        title: 'Categories',
        headerTitleAlign: 'center',
      }} />
      <Stack.Screen name="Category" component={SingleCategoryScreen} options={{
        title: 'Categories',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={({ navigation }: RootDrawerScreenProps<'Home'>) => ({
        headerShown: false,

      })} />
      <Drawer.Screen name="Login" component={LoginScreen}
        options={{
          drawerIcon: ({ color }) => <MaterialCommunityIcons name="logout" color="red" size={size} />
        }}
      />
      <Drawer.Screen name="Account" component={AccountScreen}
        options={{
          drawerIcon: ({ color }) => <AntDesign name="user" color={color} size={size} />
        }}
      />
      <Drawer.Screen name="Manage Request" component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => <MaterialCommunityIcons name="email-outline" color={color} size={size} />
        }} />
      <Drawer.Screen name="Inbox" component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => <MaterialCommunityIcons name="wallet-travel" color={color} size={size} />
        }}
      />
      <Drawer.Screen name="Wallet" component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => <SimpleLineIcons name="wallet" color={color} size={size} />
        }} />
      <Drawer.Screen name="Post a service" component={LoginScreen} />
      <Drawer.Screen name="Feedback" component={LoginScreen} />
      <Drawer.Screen name="Invite Friends" component={LoginScreen} />
      <Drawer.Screen name="Settings" component={LoginScreen} />
      <Drawer.Screen name="Help" component={LoginScreen} />

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
  const color = "#00709e"

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,

      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="home" size={size} color={color} />
        }}
      />
      <BottomTab.Screen
        name="CategoryNav"
        component={CategoryNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="format-list-checkbox" color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <Entypo name="chat" color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          tabBarIcon: ({ color }) => <MaterialIcons name="favorite-outline" color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <AntDesign name="user" color={color} size={size} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
