import React, {useState, useEffect, useLayoutEffect} from "react";
import {View, StyleSheet} from "react-native";
import * as Location from 'expo-location';
import {askForLocationPermissions} from "../permissions/permissions"
import HeaderButton from "../components/HeaderButton";
import MapWindow from "../components/MapWindow";

const MapScreen = ({navigation}) => {
    const [userLocation, setUserLocation] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderButton
                onPress={() => navigation.toggleDrawer()}
                iconName={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            />
        })
    }, [navigation]);

    const getUserLocation = async () => {
        const locationGranted = await askForLocationPermissions();
        if (locationGranted) {
            let {coords} = await Location.getCurrentPositionAsync();
            const {latitude, longitude} = coords;
            setUserLocation({latitude, longitude})
        } else {
            console.warn("Location permissions not granted!")
        }
    }

    useEffect(() => {
        getUserLocation().catch(error => console.warn(error))
    }, [])

    return (
        <View style={styles.container}>
            {userLocation && <MapWindow userLocation={userLocation}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default MapScreen;
