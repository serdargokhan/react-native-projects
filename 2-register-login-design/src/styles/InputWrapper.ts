import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(80, 80, 80)",
    },
    label: {
        fontSize: 18,
        color: "rgb(80, 80, 80)",
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textInput: {
        paddingVertical: 10,
        width: "80%",
        fontSize: 15,
        color: "rgb(80, 80, 80)",
    },
});
