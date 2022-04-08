// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
// Screens
import HomeScreen from "./src/screens/HomeScreen";
import ItemScreen from "./src/screens/ItemScreen";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <View style={{ flex: 1, backgroundColor: "#18181b" }}>
            <NavigationContainer>
                <StatusBar style="light" backgroundColor="#ad2a46" />
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerStyle: { backgroundColor: "#ad2a46" },
                            headerTintColor: "#fff",
                        }}
                    />
                    <Stack.Screen
                        name="Details"
                        component={ItemScreen}
                        options={{
                            headerStyle: { backgroundColor: "#ad2a46" },
                            headerTintColor: "#fff",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
