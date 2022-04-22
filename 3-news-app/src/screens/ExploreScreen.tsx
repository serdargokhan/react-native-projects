import { useState } from "react";
import { FlatList, Icon, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// Icons
import { Feather } from "@expo/vector-icons";
// Fetch
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
// Components
import CustomInput from "../utils/CustomInput";
import SkeletonWrapper from "../utils/Skeleton";
import NewsItem from "../utils/NewsItem";
import Categories from "../components/ExploreScreen/Categories";
// Types
import { NewsData } from "../lib/dataType";
// Hooks
import useDebounce from "../hooks/useDebounce";

function ExploreScreen() {
    const [category, setCategory] = useState("Business");
    const [searchQuery, setSearchQuery] = useState("");

    const debouncedValue = useDebounce(searchQuery, 500);

    const { data } = useSWR<NewsData>(
        debouncedValue
            ? `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=385dbce34b214eb1bc84eb26a23a2e37`
            : `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=385dbce34b214eb1bc84eb26a23a2e37`,
        fetcher
    );

    return (
        <SafeAreaView>
            <View mt="5">
                <CustomInput
                    placeholder="Search for news..."
                    value={searchQuery}
                    leftIcon={
                        <Icon
                            as={Feather}
                            name="search"
                            size={26}
                            color="gray.500"
                            ml={2}
                        />
                    }
                    onChangeText={(text) => setSearchQuery(text)}
                />

                <Categories
                    setCategory={setCategory}
                    category={category}
                    setSearchQuery={setSearchQuery}
                />

                {!data && (
                    <View w="90%" mx="auto">
                        <SkeletonWrapper />
                    </View>
                )}

                {data && (
                    <FlatList
                        data={data?.articles}
                        w="90%"
                        mx="auto"
                        mt="3"
                        keyExtractor={(item) => item.publishedAt}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 200,
                        }}
                        renderItem={({ item }) => {
                            return (
                                <NewsItem
                                    title={item.title}
                                    urlToImage={item.urlToImage}
                                    name={item.source.name}
                                    url={item.url}
                                    content={item.content}
                                    description={item.description}
                                    publishedAt={item.publishedAt}
                                    author={item.author}
                                />
                            );
                        }}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}

export default ExploreScreen;
