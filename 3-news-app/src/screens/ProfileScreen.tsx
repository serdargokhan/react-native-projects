import { Avatar, Divider, Flex, View, Text, Box, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
// Icons
import { Ionicons } from "@expo/vector-icons";
// Context
import { useUser } from "../context/UserContext";
// Storage
import { storeData } from "../lib/storage";
// Assets
import ProfileSVG from "../../assets/ProfileSVG";

function ProfileScreen({ navigation }: any) {
    const { user } = useUser();

    function signoutHandler() {
        navigation.replace("Sign in");
        storeData("");
    }

    return (
        <SafeAreaView>
            <Flex mt="6" justify="center" align="center">
                <ProfileSVG />
            </Flex>
            <Divider
                bg="primary.100"
                thickness="2"
                my="5"
                w="90%"
                mx="auto"
                orientation="horizontal"
            />
            <View mx="4">
                <Flex justify="space-around" align="center" direction="row">
                    <Avatar bg="primary.100" size="2xl">
                        {user?.displayName?.slice(0, 1)}
                    </Avatar>
                    <Box>
                        <Text fontSize="lg" fontWeight="semibold" mb="3">
                            {user?.displayName}
                        </Text>
                        <Text
                            fontSize="md"
                            fontWeight="semibold"
                            color="gray.600"
                        >
                            {user?.email}
                        </Text>
                    </Box>
                </Flex>

                <Flex direction="row" justify="flex-end" mt="4">
                    <Button
                        bgColor="primary.100"
                        w="1/2"
                        maxW="150px"
                        py="3"
                        onPress={signoutHandler}
                        rightIcon={
                            <Ionicons name="log-out" size={24} color="white" />
                        }
                    >
                        <Text fontSize="md" color="white">
                            Sign out
                        </Text>
                    </Button>
                </Flex>
            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;
