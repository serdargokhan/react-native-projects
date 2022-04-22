import { Text, Flex, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// Assets
import ListSVG from "../../assets/ListSVG";

function ListScreen() {
    return (
        <SafeAreaView>
            <View w="90%" mx="auto" flexGrow={1}>
                <Text fontSize="3xl" fontWeight="bold" mt="3">
                    My List
                </Text>
                <Flex justify="center" align="center">
                    <ListSVG />
                    <Text fontSize="lg" fontStyle="italic" color="gray.600">
                        There is no news in your list!
                    </Text>
                </Flex>
            </View>
        </SafeAreaView>
    );
}

export default ListScreen;
