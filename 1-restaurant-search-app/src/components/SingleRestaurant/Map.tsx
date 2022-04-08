import React from "react";
import { View } from "react-native";
// Maps
import MapView, { Marker } from "react-native-maps";
import { mapStyle } from "../../utils/MapStyle";
// Styles
import { styles } from "../../styles/SingleRestaurant/Map";

interface MapData {
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

function Map({ coordinates }: MapData) {
    return (
        <View style={styles.mapWrapper}>
            <MapView
                style={styles.mapView}
                customMapStyle={mapStyle}
                initialRegion={{
                    latitude: coordinates?.latitude!,
                    longitude: coordinates?.longitude!,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.15,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: coordinates?.latitude!,
                        longitude: coordinates?.longitude!,
                        latitudeDelta: 0.15,
                        longitudeDelta: 0.15,
                    }}
                />
            </MapView>
        </View>
    );
}

export default Map;
