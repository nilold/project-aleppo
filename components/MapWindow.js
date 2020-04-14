import React from "react";
import {StyleSheet, View, Text} from "react-native";
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
            <DistanceComponent />
        </View>
    );
};

const DistanceComponent = () => (
    <View style={styles.distanceContainer}>
        <Text style={styles.distanceLabel}>Exibindo locais até</Text>
        <Text style={styles.distance}>3 km</Text>
    </View>
)

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
        distanceContainer: {
            position: "absolute",
            bottom: 40,
            right: 40,
            padding: 5,
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            borderRadius: 10,
            overflow: "hidden"
        },
        distanceLabel: {
            fontSize: 12,
        },
        distance: {
            fontSize: 22,
        }
    })
;

export default MapWindow;
