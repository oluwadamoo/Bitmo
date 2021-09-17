/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}


export type RootStackParamList = {
  Auth: undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Home: undefined;
  Login: undefined;
  "Recover Account": undefined;
  SignUp: undefined;
  Categories: undefined
  Category: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  CategoryNav: undefined;
  Messages: undefined;
  Favorite: undefined;
  Account: undefined;
  Home: undefined;
};
export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;


export type RootDrawerParamList = {
  Home: undefined;
  Login: undefined;
  Account: undefined;
  "Manage Request": undefined;
  Inbox: undefined;
  Wallet: undefined;
  "Post a service": undefined;
  Feedback: undefined;
  "Invite Friends": undefined;
  Settings: undefined;
  Help: undefined;
};
export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
