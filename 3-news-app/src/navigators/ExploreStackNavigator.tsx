import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Types
import { ItemProps } from "../lib/dataType";
// Screens
import DetailsScreen from "../screens/DetailsScreen";
import ExploreScreen from "../screens/ExploreScreen";

export type ExploreStackParamList = {
    Home: undefined;
    Details: ItemProps;
};

function ExploreStackNavigator() {
    const ExploreStack = createNativeStackNavigator<ExploreStackParamList>();

    return (
        <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
            <ExploreStack.Screen name="Home" component={ExploreScreen} />
            <ExploreStack.Screen name="Details" component={DetailsScreen} />
        </ExploreStack.Navigator>
    );
}

export default ExploreStackNavigator;
