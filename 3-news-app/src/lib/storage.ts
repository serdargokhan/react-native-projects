// Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value: string) => {
    try {
        await AsyncStorage.setItem("uid", value);
    } catch (err) {
        console.error(err);
    }
};

export const getStoredData = async () => {
    try {
        const value = await AsyncStorage.getItem("uid");
        if (value !== null) {
            return value;
        }
    } catch (err) {
        console.error(err);
    }
};
