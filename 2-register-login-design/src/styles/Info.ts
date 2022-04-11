import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",

        marginTop: 25,
    },
    checkBox: {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    checkBoxInside: {
        width: 18,
        height: 18,
        backgroundColor: "#f44d7f",
        borderRadius: 5,
        opacity: 0.8,
    },
    infoText: {
        fontSize: 15,
        color: "gray",
        marginLeft: 10,
    },
});
