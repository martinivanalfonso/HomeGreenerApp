import React, { useState } from "react";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";

const images = [
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"), 
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/avatar.png"),
];

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [skipLoadingScreen, setSkipLoadingScreen] = useState(false);

  // caches all the images for a better performance
  const handleResourcesAsync = async () => {
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={handleResourcesAsync}
        onError={(error) => console.warn(error)}
        onFinish={() => setIsLoadingComplete(true)}
      />
    );
  }
  return (
    <Block white>
      <Navigation />
    </Block>
  );
};

export default App;
