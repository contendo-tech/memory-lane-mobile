import React, { useCallback } from "react";
import MainNavigation from "./navigation/MainNavigation";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Grenze-Regular": require("./assets/fonts/Grenze/Grenze-Regular.ttf"),
    "GrandifloraOne-Regular": require("./assets/fonts/Grandiflora_One/GrandifloraOne-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    "Montserrat-Italic": require("./assets/fonts/Montserrat/static/Montserrat-Italic.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <MainNavigation />;
}
