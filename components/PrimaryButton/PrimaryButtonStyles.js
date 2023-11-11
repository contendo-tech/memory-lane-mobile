import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    letterSpacing: 4,
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
    color: "white",
  },
});

export default styles;
