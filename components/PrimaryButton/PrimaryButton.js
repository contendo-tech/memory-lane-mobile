import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./PrimaryButtonStyles";
const PrimaryButton = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
    >
      <LinearGradient
        colors={["#F3CBA8", "#F7E9A8"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.button}
      >
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
