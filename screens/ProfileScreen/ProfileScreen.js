import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./ProfileScreenStyles";
import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import ProfileTabView from "../../components/ProfileTabView/ProfileTabView";
import MediaGrid from "../../components/MediaGrid/MediaGrid";
import dummy_user from '../../assets/dummy_data/user_data.json';
const ProfileScreen = (props) => {
  return (
    <View style={styles.profileScreenContainer}>
      <View style={styles.profileImageContainer}>
        {/* <FontAwesome name="user-circle" size={50} color="black" /> */}
      </View>
      <View style={styles.dateRangeContainer}>
        <Text>08/23/1988 - xx/xx/xxxx</Text>
      </View>
      <ProfileTabView userData={dummy_user} />
    </View>
  );
};

export default ProfileScreen;
