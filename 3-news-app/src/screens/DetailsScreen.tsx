import { Flex, Image, ScrollView, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// Types
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigators/HomeStackNavigator";
// Link
import { Linking } from "react-native";

type RouteType = NativeStackScreenProps<HomeStackParamList, "Details">;

function DetailsScreen({ route }: RouteType) {
    return (
        <SafeAreaView>
            <ScrollView
                w="90%"
                mx="auto"
                maxW="500px"
                pt="6"
                contentContainerStyle={{ paddingBottom: 30 }}
                showsVerticalScrollIndicator={false}
            >
                <Text fontSize="2xl" fontWeight="semibold" lineHeight="sm">
                    {route.params.title}
                </Text>

                <Flex
                    direction="row"
                    align="center"
                    mt="3"
                    justify="space-between"
                >
                    <Text color="gray.600" fontSize="md">
                        {route.params.author || "Unknown"}
                    </Text>
                    <Text color="gray.600" fontStyle="italic">
                        {route.params.publishedAt.substring(0, 10)}
                    </Text>
                </Flex>

                <Text
                    fontSize="md"
                    mt="6"
                    fontWeight="medium"
                    textAlign="justify"
                >
                    {route.params.description}
                </Text>

                <Image
                    w="100%"
                    height="300px"
                    rounded="2xl"
                    my="4"
                    source={{
                        uri:
                            route.params.urlToImage !== null
                                ? route.params.urlToImage
                                : require("../../assets/newspaper.png"),
                    }}
                    alt={route.params.title}
                />

                <Text fontSize="md" textAlign="justify">
                    {route.params.content?.slice(0, 200)}{" "}
                    <Text
                        fontStyle="italic"
                        textDecorationLine="underline"
                        color="primary.100"
                        fontWeight="bold"
                        onPress={() => Linking.openURL(route.params.url)}
                    >
                        Read more
                    </Text>
                </Text>

                <Text fontSize="md" mt="4">
                    Source: {route.params.name}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DetailsScreen;
