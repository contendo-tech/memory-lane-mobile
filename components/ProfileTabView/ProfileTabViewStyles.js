import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileTabViewContainer: {
    marginTop: 30,
  },
  mediaTabContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // width: "100%",
    paddingLeft: "30%",
    paddingRight: "30%",
    // borderColor: "black",
    // borderWidth: 1
  },
  activeTab: {
    // color: "black",
    // height: "1%",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    marginLeft: "5%",
  },
  inactiveTab: {
    color: "grey",
    marginLeft: "5%",
  },
});

export default styles;
