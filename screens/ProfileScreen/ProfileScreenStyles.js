import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    paddingVertical: "20%",
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FEFAE0",
  },
  profileScrollContainer: {
    marginTop: "30%",
    height: "auto",
    alignItems: "center"
  },
  profileImageContainer: {
    marginTop: "5%",
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
