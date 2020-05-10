import React from "react";
import { StyleSheet } from "react-native";

import { Button, Block, Text } from '../components'

const Welcome = () => {
  return (
    <Block center middle>
      <Text>Welcome Martin</Text>
    </Block>
  );
}

Welcome['navigationOptions'] = screenProps => ({
    headerShown: false,
})

export default Welcome