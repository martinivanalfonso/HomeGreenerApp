import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Image } from "react-native";

import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";
import Explore from "../screens/Explore";
import Login from "../screens/Login";
import Forgot from "../screens/Forgot";
import Signup from "../screens/Signup";
import Product from "../screens/Product";
import Settings from "../screens/Settings";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Browse,
    Forgot,
    Signup,
    Settings,
    Explore,
    Product
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white,
        elevation: 0, // for android
      },
      headerBackImage: () => {
        const headerImage = <Image source={require('../assets/icons/back.png')}/>
        headerImage.displayName="Back"
        return headerImage
      },
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {},
      headerBackTitleVisible: false,
      headerTitle: () => null,
    },
  }
);

export default createAppContainer(screens);
