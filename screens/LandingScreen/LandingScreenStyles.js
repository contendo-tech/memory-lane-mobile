import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FEFAE0",
  },
  titleContainer: {
    alignItems: "center",
  },
  mainTitle: {
    fontFamily: "Grenze-Regular",
    fontSize: 36,
    color: "#656D4A",
  },
  secondaryTitle: {
    fontFamily: "GrandifloraOne-Regular",
  },
  btnContainer: {
    marginTop: 30,
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto",
    // marginHorizontal: 65,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  button: {
    width: "100%",
    marginVertical: "3%",
  },
});

export default styles;
