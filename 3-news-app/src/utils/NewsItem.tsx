import { Box, Flex, Image, Pressable, Text } from "native-base";
// Types
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigators/HomeStackNavigator";
// Types
import { ItemProps } from "../lib/dataType";

type ProfileScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<HomeStackParamList, "Home">,
    NativeStackNavigationProp<HomeStackParamList>
>;

function NewsItem({
    title,
    name,
    urlToImage,
    author,
    content,
    description,
    publishedAt,
    url,
}: ItemProps) {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return (
        <Pressable
            _pressed={{ opacity: 0.8 }}
            onPress={() =>
                navigation.navigate("Details", {
                    title,
                    urlToImage,
                    name,
                    author,
                    content,
                    description,
                    publishedAt,
                    url,
                })
            }
        >
            <Flex
                direction="row"
                align="flex-start"
                justify="space-between"
                py="4"
            >
                <Box w="60%" pr="4">
                    <Text fontSize="xs" color="gray.600">
                        {name}
                    </Text>
                    <Text fontWeight="bold" mt="2">
                        {title}
                    </Text>
                </Box>
                <Image
                    defaultSource={require("../../assets/newspaper.png")}
                    rounded="2xl"
                    w="40%"
                    h="120px"
                    source={
                        urlToImage !== null
                            ? {
                                  uri: urlToImage,
                              }
                            : require("../../assets/newspaper.png")
                    }
                    alt={title}
                />
            </Flex>
        </Pressable>
    );
}

export default NewsItem;
