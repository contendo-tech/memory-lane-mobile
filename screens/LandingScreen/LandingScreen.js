import React from "react";
import { View, Text } from "react-native";
import styles from "./LandingScreenStyles";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const LandingScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Memory Lane</Text>
        <Text style={styles.secondaryTitle}>Let's take a stroll.</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.button}>
          <PrimaryButton
            title="LOGIN"
            onPress={() => {
              console.log("LOGIN");
              props.navigation.navigate({ name: "ProfileScreen" });
            }}
          />
        </View>
        <View style={styles.button}>
          <PrimaryButton
            title="SIGN UP"
            onPress={() => {
              console.log("SIGN UP");
              //   props.navigation.navigate({ name: "SignUp" });
            }}
          />
        </View>
        <View style={styles.button}>
          <PrimaryButton
            title="SCAN"
            onPress={() => {
              console.log("SCAN");
              //   props.navigation.navigate({ name: "Camera" });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
