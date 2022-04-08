import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
// Styles
import { styles } from "../styles/Cards";

function Cards({ data, navigation }: any) {
    return (
        <View style={styles.parentView}>
            <FlatList
                data={data}
                contentContainerStyle={{ paddingBottom: 70 }}
                keyExtractor={(item) => item?.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() =>
                                navigation.navigate("Details", { id: item?.id })
                            }
                        >
                            <Image
                                style={styles.imageStyle}
                                source={{ uri: item?.image_url }}
                            />
                            <Text style={styles.titleStyle}>{item?.name}</Text>
                            <View style={styles.reviewParent}>
                                <Text style={styles.reviewStyle}>
                                    {item?.rating} Ratings
                                </Text>
                                <Text style={styles.reviewStyle}>
                                    {item?.review_count} Reviews
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

export default Cards;
