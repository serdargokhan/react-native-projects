import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// Styles
import { styles } from "../styles/Info";

interface InfoProps {
    infoText: string;
}

function Info({ infoText }: InfoProps) {
    const [toggle, setToggle] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setToggle(!toggle)}
                style={styles.checkBox}
                activeOpacity={0.5}
            >
                {toggle && <View style={styles.checkBoxInside}></View>}
            </TouchableOpacity>
            <Text style={styles.infoText}>{infoText}</Text>
        </View>
    );
}

export default Info;
