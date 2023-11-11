import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import styles from "./ProfileScreenStyles";
import { FontAwesome } from "@expo/vector-icons";
import mediaTabs from "../../assets/dummy_data/profile_tabs";

const ProfileScreen = (props) => {
  return (
    <View style={styles.profileScreenContainer}>
      <ScreenHeader title={"Timothy Morales"} />
      <View style={styles.profileImageContainer}>
        {/* <FontAwesome name="user-circle" size={50} color="black" /> */}
      </View>
      <View style={styles.dateRangeContainer}>
        <Text>08/23/1988 - xx/xx/xxxx</Text>
      </View>
      <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={{
          // alignItems: "center",
          gap: 50,
          paddingHorizontal: 20
        }}>
        {mediaTabs.map((item, index) => (
          <TouchableOpacity key={index}>
            {item.image}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
