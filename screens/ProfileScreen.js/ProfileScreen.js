import React from "react";
import { View, Text } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import styles from "./ProfileScreenStyles";
import { FontAwesome } from "@expo/vector-icons";
const ProfileScreen = (props) => {
  return (
    <View style={styles.profileScreenContainer}>
      <ScreenHeader title={"Timothy Morales"} />
      <View style={styles.profileImageContainer}>
        <FontAwesome name="user-circle" size={50} color="black" />
      </View>
      <View style={styles.dateRangeContainer}>
        <Text>08/23/1988 - xx/xx/xxxx</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
