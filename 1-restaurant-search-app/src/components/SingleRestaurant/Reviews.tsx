import React from "react";
import { FlatList, Linking, Text, TouchableOpacity, View } from "react-native";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// Styles
import { styles } from "../../styles/SingleRestaurant/Reviews";

function Reviews({ data }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <MaterialIcons name="rate-review" size={36} color="white" />
                <Text style={styles.headerText}>Reviews</Text>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemsWrapper}>
                            <View style={styles.itemsHeader}>
                                <Ionicons
                                    name="person-circle-sharp"
                                    size={48}
                                    color="white"
                                />
                                <View>
                                    <Text style={styles.nameText}>
                                        {item.user.name}
                                    </Text>
                                    <Text style={styles.ratingText}>
                                        {item.rating} - Ratings
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.commentText}>{item.text}</Text>
                            <TouchableOpacity
                                style={styles.link}
                                onPress={() => Linking.openURL(item.url)}
                            >
                                <Text style={styles.linkText}>
                                    Continue Reading
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
}

export default Reviews;
