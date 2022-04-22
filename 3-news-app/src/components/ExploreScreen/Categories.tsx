import { FlatList, Pressable, Text } from "native-base";

interface CategoriesProps {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    category: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Categories({
    setCategory,
    category,
    setSearchQuery,
}: CategoriesProps) {
    const categories = [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology",
    ];

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            contentContainerStyle={{ paddingRight: 50 }}
            px="8"
            data={categories}
            renderItem={({ item }) => {
                return (
                    <Pressable
                        onPress={() => {
                            setSearchQuery("");
                            setCategory(item);
                        }}
                        mr="3"
                        _pressed={{ opacity: 0.8 }}
                        borderWidth="1"
                        borderColor={
                            category === item ? "primary.100" : "gray.300"
                        }
                        px="5"
                        py="2"
                        rounded="2xl"
                        backgroundColor={
                            category === item ? "primary.100" : "gray.300"
                        }
                    >
                        <Text color={category === item ? "white" : "gray.500"}>
                            {item}
                        </Text>
                    </Pressable>
                );
            }}
        />
    );
}

export default Categories;
