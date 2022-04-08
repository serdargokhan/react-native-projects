import React from "react";
import { Text, View } from "react-native";
// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Styles
import { styles } from "../../styles/SingleRestaurant/Categories";

interface CategoriesData {
    categories: {
        title: string;
    }[];
}

function Categories({ categories }: CategoriesData) {
    return (
        <View style={styles.categoriesParent}>
            <MaterialCommunityIcons name="details" size={24} color="white" />
            {categories?.map((item, index) => {
                return (
                    <Text style={styles.categoriesText} key={index}>
                        {item.title}
                    </Text>
                );
            })}
        </View>
    );
}

export default Categories;
