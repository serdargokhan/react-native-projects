import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
// Icons
import { MaterialIcons } from "@expo/vector-icons";

export type NavigationParams = {
    "Sign up": undefined;
    "Sign in": undefined;
};

export default function App() {
    const Tab = createBottomTabNavigator<NavigationParams>();

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Tab.Navigator
                initialRouteName={"Sign up"}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === "Sign up") {
                            return (
                                <MaterialIcons
                                    name="verified-user"
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "Sign in") {
                            return (
                                <MaterialIcons
                                    name="logout"
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                    tabBarActiveTintColor: "#f44d7f",
                    tabBarInactiveTintColor: "gray",
                    tabBarLabelPosition: "beside-icon",
                })}
            >
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Sign up"
                    component={SignUpScreen}
                />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Sign in"
                    component={SignInScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
