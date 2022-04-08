import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    parentView: {
        height: "100%",
        backgroundColor: "#18181b",
        paddingHorizontal: 25,
    },
    titleStyle: {
        marginVertical: 8,
        color: "#fff",
        fontSize: 20,
    },
    reviewStyle: {
        color: "#aaa",
        fontSize: 17,
    },
    imageStyle: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginTop: 20,
    },
    reviewParent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
