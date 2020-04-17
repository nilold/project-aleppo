import React, {useState, useCallback, useEffect, useLayoutEffect, useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";
import {View, Text, StyleSheet,} from "react-native";
import {useFocusEffect} from '@react-navigation/native';
import Constants from 'expo-constants';
import LoadingSpinner from "../components/LoadingSpinner";
import {fetchMallStores} from "../store/actions/placesActions";
import {fetchPlaceProducts} from "../store/actions/productsActions";
import {fetchCategories} from "../store/actions/categoriesActions";
import ItemList from "../components/ItemList";
import CategoryList from "../components/CategoryList"
import HeaderButton from "../components/HeaderButton";
import Card from "../components/Card";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import TouchableItem from "../components/TouchableItem";

const MainScreen = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [error, setError] = useState(null);
    const products = useSelector(state => state.products.placeProducts);
    const categories = useSelector(state => state.categories.categories);
    const stores = useSelector(state => state.places.stores);
    const [filteredCategories, setFilteredCategories] = useState(new Set());
    const dispatch = useDispatch();

    const showStores = route.params.showStores;
    const place = route.params.place;
    const isMall = place.type === "mall";

    useLayoutEffect(() => {
        navigation.setOptions({
            title: place.name,
            headerRight: () => !showStores && <HeaderButton
                onPress={() => {
                }}
                iconName={Platform.OS === "ios" ? "ios-add" : "md-add"}
            />
        })
    }, [navigation, route]);

    const loadProducts = useCallback(
        async () => {
            setError(null);
            try {
                await dispatch(fetchPlaceProducts(place));
            } catch (err) {
                setError(err);
            }
        },
        [dispatch, route, isMall, place],
    );

    const loadCategories = useCallback(
        async () => {
            setError(null);
            try {
                await dispatch(fetchCategories());
            } catch (err) {
                setError(err);
            }
        },
        [dispatch],
    );

    const loadStores = useCallback(
        async () => {
            setError(null);
            try {
                if (isMall)
                    await dispatch(fetchMallStores(place.id));
            } catch (err) {
                setError(err);
            }
        },
        [dispatch, isMall],
    );

    useFocusEffect(
        useCallback(() => {
            const loadAsync = async () => await Promise.all([
                await loadProducts(),
                await loadCategories(),
                await loadStores()
            ])

            loadAsync().then(_ => setIsLoading(false));
        }, [dispatch, place, route])
    );

    const getItems = useMemo(() => {
        if (showStores)
            return stores.filter(s =>
                selectedCategories.length === 0 ||
                s.categories.some(c => selectedCategories.includes(c))
            )

        return products.filter(p =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(p.category)
        )

    }, [showStores, stores, products, selectedCategories]);

    useEffect(() => {
            filteredCategories.clear();
            if (showStores) {
                stores.forEach(s => s.categories.forEach(c => filteredCategories.add(c)));
            } else {
                products.forEach(p => filteredCategories.add(p.category));
            }
        },
        [showStores, products, stores, categories]);

    if (isLoading) {
        return <LoadingSpinner/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemsContainer}>
                <ItemList
                    items={getItems}
                    loadItems={loadProducts}
                    navigation={navigation}
                />
            </View>
            {isMall &&
            <Card style={styles.toStoreContainer}>
                <TouchableItem onPress={() => navigation.push("mainScreen", {showStores: true, place})}>
                    <View style={styles.toStoreCard}>
                        <Text style={styles.toStoreText}>Ver por lojas</Text>
                        <MaterialCommunityIcons
                            name="arrow-right-bold-hexagon-outline" size={56} color="white"/>
                    </View>
                </TouchableItem>
            </Card>
            }
            <View style={styles.categoryContainer}>
                <CategoryList
                    items={categories.filter(c => filteredCategories.has(c.name))}
                    loadItems={loadProducts}
                    selectCategories={setSelectedCategories}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        marginTop: Constants.statusBarHeight,
    },
    itemsContainer: {},
    categoryContainer: {},
    toStoreContainer: {
        height: 80,
        margin: 15,
        padding: 10,
        backgroundColor: "#236bc2"
    },
    toStoreCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    toStoreText: {
        color: "white",
        fontSize: 26
    }
});

export default MainScreen;
