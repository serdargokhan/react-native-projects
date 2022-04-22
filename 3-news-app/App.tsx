import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// UI
import { NativeBaseProvider } from "native-base";
// Screens
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
// Context
import UserContextProvider from "./src/context/UserContext";
// Navigators
import TabNavigator from "./src/navigators/TabNavigator";
// Theme
import { theme } from "./src/lib/customTheme";

export type RootStackParamList = {
    "Sign up": undefined;
    "Sign in": undefined;
    Home: undefined;
};

export default function App() {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <UserContextProvider>
            <NativeBaseProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{ headerShown: false }}
                        initialRouteName="Sign up"
                    >
                        <Stack.Screen name="Sign up" component={SignupScreen} />
                        <Stack.Screen name="Sign in" component={SigninScreen} />
                        <Stack.Screen name="Home" component={TabNavigator} />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </UserContextProvider>
    );
}
