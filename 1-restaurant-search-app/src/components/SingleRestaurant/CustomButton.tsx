import React from "react";
import { Button, Linking, View } from "react-native";

interface CustomButtonData {
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

function CustomButton({ coordinates }: CustomButtonData) {
    return (
        <View style={{ marginBottom: 15 }}>
            <Button
                title="Go to the Restaurant"
                onPress={() =>
                    Linking.openURL(
                        `https://maps.google.com/?q=<${coordinates?.latitude}>,<${coordinates?.longitude}>`
                    )
                }
            />
        </View>
    );
}

export default CustomButton;
