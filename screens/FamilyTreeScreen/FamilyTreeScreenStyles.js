import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  bioScreenContainter: {
    flex: 1,
    width: "100%",
    top: 5,
  },
  bioContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 40,
    width: "100%",
  },
  image: {
    marginRight: 3,
    marginBottom: 3,
    height: deviceWidth / 3,
    width: deviceWidth / 3,
  },
});

export default styles;
