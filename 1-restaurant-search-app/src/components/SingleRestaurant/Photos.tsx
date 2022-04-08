import React from "react";
import { FlatList, Image } from "react-native";
// Styles
import { styles } from "../../styles/SingleRestaurant/Photos";

interface PhotoData {
    photos: [string, string, string];
}

function Photos({ photos }: PhotoData) {
    return (
        <FlatList
            data={photos}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
                return (
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: item }}
                    ></Image>
                );
            }}
        />
    );
}

export default Photos;
