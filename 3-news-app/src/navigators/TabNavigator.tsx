import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import ProfileScreen from "../screens/ProfileScreen";
import ListScreen from "../screens/ListScreen";
// Icons
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// Navigators
import HomeStackNavigator from "./HomeStackNavigator";
import ExploreStackNavigator from "./ExploreStackNavigator";

function TabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#6C63FF",
            }}
        >
            <Tab.Screen
                name="Main"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome
                                name="home"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Entypo
                                name="magnifying-glass"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="List"
                component={ListScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <AntDesign name="book" size={size} color={color} />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <FontAwesome
                                name="user-circle"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;
