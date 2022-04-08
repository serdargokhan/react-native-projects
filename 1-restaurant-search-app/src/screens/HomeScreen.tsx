import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TextInput, View } from "react-native";
// Components
import Cards from "../components/Cards";
// Styles
import { styles } from "../styles/HomeScreen";
// API
import { API_KEY } from "../api/ApiKey";
// Icons
import { Feather } from "@expo/vector-icons";

function HomeScreen({ navigation }: any) {
    const [inputText, setInputText] = useState("");
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        async function getData() {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://api.yelp.com/v3/businesses/search?term=${
                        inputText ? inputText : "pasta"
                    }&location=losangeles&limit=30`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${API_KEY}`,
                        },
                        signal: abortController.signal,
                    }
                );
                const data = await res.json();
                setResults(data.businesses);
            } catch (err) {
                setError(true);
            } finally {
                setSubmit(false);
                setLoading(false);
                setInputText("");
            }
        }
        getData();

        return () => abortController.abort();
    }, [submit]);

    return (
        <View style={styles.parentView}>
            <View style={styles.textInputParent}>
                <Feather
                    name="search"
                    size={30}
                    color="#fff"
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.textStyle}
                    onChangeText={(text) => setInputText(text)}
                    placeholder="Search for restaurants..."
                    placeholderTextColor={"#fff"}
                    value={inputText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onEndEditing={() => setSubmit(true)}
                />
            </View>
            {loading && <ActivityIndicator size="large" color="#fff" />}
            {error && <Text>Something went wrong.</Text>}
            {!loading && <Cards data={results} navigation={navigation} />}
        </View>
    );
}

export default HomeScreen;
