import React from "react";
import { View } from "react-native";
// Components
import Details from "../components/Details";
// Styles
import { styles } from "../styles/ItemScreen";

function ItemScreen({ route }: any) {
    const { id } = route.params;

    return (
        <View style={styles.parentView}>
            <Details id={id} />
        </View>
    );
}

export default ItemScreen;
