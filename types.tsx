/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Auth: undefined;
  Root: NavigatorScreenParams<RootTabParamList>;
  "Send Wallet": object;
  Wallet: undefined;
  NotFound: undefined;
  HomeScreen: undefined;
  Login: undefined;
  "Recover Account": undefined;
  SignUp: undefined;
  Categories: undefined;
  Category: undefined;
  Messages: undefined;
  Message: undefined;
  HomeNav: undefined;
  "Request for Service": undefined;
  "Service Providers": undefined;
  "Favorite Partners": undefined;
  "Reset Password": object | undefined;
  "Verify Otp Sent To Email": object | undefined;
  "Verify Otp Sent To Phone": object | undefined;
  "Verify Otp For Password Recovery": object | undefined;
};

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  CategoryNav: undefined;
  Messages: undefined;
  Favorite: undefined;
  Account: undefined;
  Home: undefined;
};
export type RootTabScreenProps<
  Screen extends keyof RootTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootDrawerParamList = {
  "Home Screen": undefined;
  Logout: undefined;
  Account: undefined;
  "Manage Request": undefined;
  Inbox: undefined;
  "Wallet Stack": undefined;
  "Post a service": undefined;
  Feedback: undefined;
  "Invite Friends": undefined;
  Settings: undefined;
  Help: undefined;
};
export type RootDrawerScreenProps<
  Screen extends keyof RootDrawerParamList
> = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
