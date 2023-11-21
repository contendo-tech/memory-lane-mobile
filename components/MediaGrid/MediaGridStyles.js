import { StyleSheet, Dimensions } from "react-native";
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    mediaGridContainter: {
        flex: 1,
        // borderColor: "black",
        // borderWidth: 2,
        width: "100%",
        // height: "auto"
        top: 5,

    },
    imageContainer: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
        marginRight: 3,
        marginBottom: 3,
        height: deviceWidth / 3,
        width: deviceWidth / 3,
    },
})

export default styles;