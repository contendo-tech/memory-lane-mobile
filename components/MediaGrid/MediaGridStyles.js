import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    mediaGridContainter: {
        borderColor: "black",
        borderWidth: 2,
        width: deviceWidth,
        height: "auto"
    },
    gridContainer: {
        top: "20%",
    },
    imageContainer: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
        // margin: 5,
        height: deviceWidth / 3,
        width: deviceWidth / 3,
    },
})

export default styles;