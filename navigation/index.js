import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Image } from "react-native";

import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";
import Explore from "../screens/Explore";
import Login from "../screens/Login";
import Product from "../screens/Product";
import Settings from "../screens/Settings";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  }
);

export default createAppContainer(screens);
