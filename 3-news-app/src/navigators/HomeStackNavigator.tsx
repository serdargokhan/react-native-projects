import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Types
import { ItemProps } from "../lib/dataType";
// Screens
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

export type HomeStackParamList = {
    Home: undefined;
    Details: ItemProps;
};

function HomeStackNavigator() {
    const HomeStack = createNativeStackNavigator<HomeStackParamList>();

    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator;
