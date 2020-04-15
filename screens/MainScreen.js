import React, {useState, useCallback, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {View, FlatList, StyleSheet, SafeAreaView, ScrollView, RefreshControl} from "react-native";
import Constants from 'expo-constants';
import ProductItem from "../components/ProductItem";
import LoadingSpinner from "../components/LoadingSpinner";
import {fetchPlaceProducts} from "../store/actions/productsActions";
import ItemList from "../components/ItemList";
import CategoryList from "../components/CategoryList"
import {Item} from "react-navigation-header-buttons";

const MainScreen = ({route}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const products = useSelector(state => state.products.placeProducts);
    const dispatch = useDispatch();

    const placeId = route.params.placeId;

    const loadProducts = useCallback(
        async () => {
            setError(null);
            try {
                await dispatch(fetchPlaceProducts(placeId));
            } catch (err) {
                setError(err);
            }
        },
        [dispatch, setIsLoading],
    );

    useEffect(() => {
        setIsLoading(true)
        const loadAsync = async () => {
            await loadProducts()
        };
        loadAsync().then(result => setIsLoading(false))

    }, [dispatch]);

    if (isLoading) {
        return <LoadingSpinner/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemsContainer}>
                <ItemList items={products} loadItems={loadProducts}/>
            </View>
            <View style={styles.categoryContainer}>
                <CategoryList items={products} loadItems={loadProducts}/>
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
    itemsContainer:{
        height:"50%"
    },
    categoryContainer:{},
});

export default MainScreen;
