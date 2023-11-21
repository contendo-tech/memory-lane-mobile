import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    profileTabViewContainer: {
        marginTop: 30,

    },
    mediaTabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // width: "100%",
        paddingLeft: "25%",
        paddingRight: "25%",
        // borderColor: "black",
        // borderWidth: 1
    },
    activeTab: {
        // color: "black",
        // height: "4%",
        borderBottomColor: "#000",
        borderBottomWidth: 2
    },
    inactiveTab: {
        color: "grey"
    }
});

export default styles