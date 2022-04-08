import React from "react";
import { Text, View } from "react-native";
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
// Styles
import { styles } from "../../styles/SingleRestaurant/Infos";

interface InfoData {
    data: string;
    iconName: string;
}

function Infos({ data, iconName }: InfoData) {
    return (
        <View style={styles.iconsWrapper}>
            <FontAwesome5 name={iconName} size={24} color="white" />
            <Text style={styles.textStyle}>{data}</Text>
        </View>
    );
}

export default Infos;
