import React, { useState } from "react";

import { Input, Block, Text, Button } from "../components";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import * as Icon from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

const Explore = ({ images = mocks.explore, navigation }) => {
  const [searchString, setSearchString] = useState("");

  const renderFooter = () => (
    <LinearGradient
      locations={[0.5, 1]}
      style={styles.footer}
      colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.6)"]}
      >
      <Button gradient style={{ width: width / 2.678 }}>
        <Text bold white center>
          Filter
        </Text>
      </Button>
    </LinearGradient>
  );

  const renderExplore = () => {
    const mainImage = images[0];

    return (
      <Block style={{ marginBottom: height / 3 }}>
        <TouchableOpacity
          style={[styles.image, styles.mainImage]}
          onPress={() => navigation.navigate("Product")}
        >
          <Image source={mainImage} style={[styles.image, styles.mainImage]} />
        </TouchableOpacity>
        <Block row space="between" wrap>
          {images.slice(1).map((img, index) => renderImage(img, index))}
        </Block>
      </Block>
    );
  };

  const renderImage = (img, index) => {
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - theme.sizes.padding * 2.5;
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;

    return (
      <TouchableOpacity
        key={`img-${index}`}
        onPress={() => navigation.navigate("Product")}
      >
        <Image
          source={img}
          style={[styles.image, { minWidth: imgWidth, maxWidth: imgWidth }]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Block style={styles.header}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Block flex={false} row center space="between">
        <Text h1 bold style={{ paddingVertical: theme.sizes.base * 2 }}>
          Explore
        </Text>
        <Block middle flex={0.6} style={styles.search}>
          <Input
            placeholder="Search"
            style={styles.searchInput}
            placeholderTextColor={theme.colors.gray}
            value={searchString}
            onChangeText={(text) => setSearchString(text)}
            rightStyle={styles.searchRight}
            rightLabel={
              <Icon.FontAwesome
                name="search"
                size={theme.sizes.base / 1.6}
                color={theme.colors.gray2}
                style={styles.searchIcon}
              />
            }
          />
        </Block>
      </Block>
        {renderExplore()}
      </ScrollView>
      {renderFooter()}
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2,
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: "rgba(142, 142, 147, 0.06)",
    borderColor: "rgba(142, 142, 147, 0.06)",
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: "transparent"
  },
  searchIcon: {
    position: "absolute",
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - theme.sizes.base * 2.5,
    marginBottom: theme.sizes.base,
    borderRadius: 4,
  },
  mainImage: {
    minWidth: width - theme.sizes.base * 2.5,
    minHeight: width - theme.sizes.padding * 2.5,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.1,
    width,
    paddingBottom: theme.sizes.base * 4,
  },
});

export default Explore;
