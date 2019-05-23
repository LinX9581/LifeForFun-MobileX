import React, { Component } from "react";
import {
  NavigationStyleheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Alert,
  TextInput
} from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from "react-navigation"; // Version can be specified in package.json


import LoginView from "./pages/login"
import Navigation from "./pages/navi"
import Main from "./Main";
const AppNavigator = createSwitchNavigator(
  {
    Navigation: {
      screen: Navigation
    },
    LoginView: {
      screen: LoginView
    },
    Main: {
      screen: Main
    }
  },
  {
    initialRouteName: "Navigation"
  }
);

export default createAppContainer(AppNavigator);
