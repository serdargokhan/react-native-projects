import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    headerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        borderTopWidth: 2,
        borderTopColor: "white",
        paddingTop: 15,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        marginLeft: 15,
    },
    itemsWrapper: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        padding: 8,
        marginBottom: 10,
    },
    itemsHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    nameText: {
        color: "white",
        fontSize: 18,
        marginLeft: 15,
    },
    ratingText: {
        color: "white",
        fontSize: 14,
        marginLeft: 15,
        fontStyle: "italic",
    },
    commentText: {
        color: "white",
        fontSize: 15,
        marginVertical: 8,
        marginHorizontal: 6,
        textAlign: "justify",
    },
    link: {
        borderWidth: 1,
        borderColor: "#ad2a46",
        backgroundColor: "#ad2a46",
        borderRadius: 8,
        padding: 6,
        width: "50%",
        alignItems: "center",
    },
    linkText: {
        color: "white",
        fontSize: 15,
    },
});
