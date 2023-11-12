import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LandingScreen from "../screens/LandingScreen/LandingScreen";
import ProfileScreen from "../screens/ProfileScreen.js/ProfileScreen";

const Stack = createStackNavigator();
const MainNavigation = (props) => {
  let navigation;

  navigation = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerTitle: "", headerTransparent: true }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: "User Name",
            headerTransparent: true,
            headerBackTitle: "User Name",
            headerBackTitleVisible: true,
            headerBackTitleStyle: {
              opacity: 0,
              top: "5%",
            },
            headerBackImage: () => (
              <Entypo name="chevron-left" size={24} color="black" />
            ),
            headerRight: () => (
              <Entypo
                name="forward"
                size={24}
                color="black"
                style={styles.forwardIcon}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return navigation;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFAE0",
  },
});

export default MainNavigation;
