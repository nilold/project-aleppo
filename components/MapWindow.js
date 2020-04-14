import React from "react";
import {View, StyleSheet} from "react-native";
import MapView, {Marker} from 'react-native-maps';

const MapWindow = ({userLocation}) => {

    const region = {
        latitude: -20,
        longitude: -44,
        latitudeDelta: 0.01,
        longitudeDelta: 0.005,
    }

    if (userLocation) {
        region.latitude = userLocation.latitude;
        region.longitude = userLocation.longitude;
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle} region={region}>
                {userLocation &&
                <Marker
                    coordinate={userLocation}
                    title={"Eu"}
                />}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    mapStyle: {
        width: "100%",
        height: "100%",
    },
});

export default MapWindow;
