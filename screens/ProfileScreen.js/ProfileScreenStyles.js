import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFAE0",
  },
  profileImageContainer: {
    height: 120,
    width: 120,
    backgroundColor: "grey",
    borderRadius: 100,
    marginTop: "5%",
    alignItems: "center",
  },
  dateRangeContainer: {
    marginTop: "5%",
    alignItems: "center",
  },
  activeTab: {
    color: "black"
  },
  inactiveTab: {
    color: "grey"
  }
});

export default styles;
