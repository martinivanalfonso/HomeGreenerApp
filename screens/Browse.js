import React, { useState } from "react";

import { Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const Browse = ({
  profile = mocks.profile,
  categories = mocks.categories,
  navigation,
}) => {
  const TABS = ["Products", "Inspiration", "Shop"];
  const [activeTab, setActiveTab] = useState();

  const renderTab = (tab, index) => {
    const isActive = activeTab === index;
    return (
      <TouchableOpacity
        onPress={setActiveTab(index)}
        key={`tab-${index}`}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block center>
      <Block flex={false} row center space="between" style={style.header}>
        <Text h1 light>
          Browse
        </Text>
        <Button onPress={() => navigation.navigate('Settings')}>
          <Image source={profile.avatar} style={style.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={style.tabs}>
        {TABS.map(tab, (index) => renderTab(tab, index))}
      </Block>  
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: theme.sizes.base * 2 }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.name}
            onPress={() => navigation.navigate("Explore", { category })}
          >
            <Card center middle shadow style={style.category}>
              <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.2)">
                <Image source={category.image} />
              </Badge>
              <Text medium height={20}>{category.name}</Text>
              <Text gray caption>{category.count} products</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tab: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray2,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  category: {
    width: 150,
    height: 150,
  },
});

export default Browse;
