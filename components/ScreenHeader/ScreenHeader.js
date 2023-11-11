import React from "react";
import { View, Text } from "react-native";
import styles from "./ScreenHeaderStyles";
import { Entypo } from "@expo/vector-icons";
const ScreenHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default ScreenHeader;
