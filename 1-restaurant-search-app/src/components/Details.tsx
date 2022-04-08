import React, { useEffect, useState } from "react";
import { ActivityIndicator, LogBox, ScrollView, Text } from "react-native";
// Styles
import { styles } from "../styles/Details";
// API
import { API_KEY } from "../api/ApiKey";
// Components
import Photos from "./SingleRestaurant/Photos";
import Infos from "./SingleRestaurant/Infos";
import Map from "./SingleRestaurant/Map";
import CustomButton from "./SingleRestaurant/CustomButton";
import Categories from "./SingleRestaurant/Categories";
import Reviews from "./SingleRestaurant/Reviews";

interface Data {
    id: string;
    name: string;
    photos: [string, string, string];
    display_phone: string;
    price: string;
    location: {
        display_address: [];
    };
    categories: {
        title: string;
    }[];
    url: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

function Cards({ id }: any) {
    const [results, setResults] = useState<Data | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        async function getData() {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://api.yelp.com/v3/businesses/${id}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${API_KEY}`,
                        },
                        signal: abortController.signal,
                    }
                );
                const reviewsResponse = await fetch(
                    `https://api.yelp.com/v3/businesses/${id}/reviews`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${API_KEY}`,
                        },
                        signal: abortController.signal,
                    }
                );
                const data = await res.json();
                const reviewsData = await reviewsResponse.json();
                setResults(data);
                setReviews(reviewsData.reviews);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        if (id) getData();

        return () => abortController.abort();
    }, [id]);

    console.log(reviews);

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);

    return (
        <>
            {loading && <ActivityIndicator size={30} color="#fff" />}
            {error && <Text style={styles.error}>Something went wrong.</Text>}
            {!loading && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.titleStyle}>{results?.name}</Text>
                    <Photos photos={results?.photos!} />
                    <Infos
                        data={results?.display_phone!}
                        iconName="phone-square-alt"
                    />
                    <Infos data={results?.price!} iconName="money-check-alt" />
                    <Infos
                        data={results?.location.display_address.join(" ")!}
                        iconName="address-card"
                    />
                    <Categories categories={results?.categories!} />
                    <Reviews data={reviews} />
                    <Map coordinates={results?.coordinates!} />
                    <CustomButton coordinates={results?.coordinates!} />
                </ScrollView>
            )}
        </>
    );
}

export default Cards;
