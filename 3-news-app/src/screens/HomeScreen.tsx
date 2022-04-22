import { useState } from "react";
import { FlatList, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// Fetch
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
// Context
import { useUser } from "../context/UserContext";
// Components
import ListFooter from "../components/HomeScreen/ListFooter";
import SkeletonWrapper from "../utils/Skeleton";
import UserInfo from "../utils/UserInfo";
import NewsItem from "../utils/NewsItem";
// Types
import { NewsData } from "../lib/dataType";

function HomeScreen() {
    const [pageIndex, setPageIndex] = useState(1);

    const { user } = useUser();

    const { data } = useSWR<NewsData>(
        `https://newsapi.org/v2/everything?q=world&language=en&apiKey=385dbce34b214eb1bc84eb26a23a2e37&page=${pageIndex}`,
        fetcher
    );

    return (
        <SafeAreaView>
            <View w="90%" maxW="500px" mx="auto">
                <UserInfo userName={user?.displayName!} />

                {!data && <SkeletonWrapper />}

                {data && (
                    <FlatList
                        data={data?.articles}
                        keyExtractor={(item) => item.publishedAt}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 100,
                            flexGrow: 1,
                        }}
                        ListFooterComponent={
                            <ListFooter
                                setPageIndex={setPageIndex}
                                pageIndex={pageIndex}
                            />
                        }
                        ListFooterComponentStyle={{
                            flex: 1,
                            justifyContent: "flex-end",
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

export default HomeScreen;
