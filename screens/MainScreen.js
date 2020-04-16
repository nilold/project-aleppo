import React, {useState, useCallback, useEffect, useLayoutEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {View, StyleSheet,} from "react-native";
import Constants from 'expo-constants';
import LoadingSpinner from "../components/LoadingSpinner";
import {fetchPlaceProducts} from "../store/actions/placesActions";
import {fetchCategories} from "../store/actions/categoriesActions";
import ItemList from "../components/ItemList";
import CategoryList from "../components/CategoryList"
import HeaderButton from "../components/HeaderButton";

const MainScreen = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [error, setError] = useState(null);
    const products = useSelector(state => state.products.placeProducts);
    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    const place = route.params.place;

    console.log(products)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: place.name,
            headerRight: () => <HeaderButton
                onPress={() => {}}
                iconName={Platform.OS === "ios" ? "ios-add" : "md-add"}
            />
        })
    }, [navigation, route]);

    const loadProducts = useCallback(
        async () => {
            setError(null);
            try {
                await dispatch(fetchPlaceProducts(place.id));
            } catch (err) {
                setError(err);
            }
        },
        [dispatch],
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
        [],
    );

    useEffect(() => {
        setIsLoading(true)
        const loadProductsAsync = async () => await loadProducts();
        const loadCategoriesAsync = async () => await loadCategories();
        const loadAsync = async () => {
            loadProductsAsync()
            loadCategoriesAsync()
        }

        loadAsync().then(_ => setIsLoading(false));


    }, [dispatch]);

    if (isLoading) {
        return <LoadingSpinner/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.itemsContainer}>
                <ItemList
                    items={products.filter(p => selectedCategories.length === 0 || selectedCategories.includes(p.category))}
                    loadItems={loadProducts}
                />
            </View>
            <View style={styles.categoryContainer}>
                <CategoryList
                    items={categories}
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
    itemsContainer: {
        // height: "50%"
    },
    categoryContainer: {},
});

export default MainScreen;
