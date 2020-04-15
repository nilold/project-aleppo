import React, {useState, useEffect, useCallback, useMemo} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import {mapConfigs} from "../constants/config";
import Place from "../models/place";

const MapWindow = ({navigation, userLocation, places}) => {
    const [maxSearchDistance, setMaxSearchDistance] = useState(1);
    const [region, setRegion] = useState({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.005,
    });

    const backToUserLocation = useCallback(() => {
        if (userLocation) {
            setRegion({
                ...region,
                latitude: userLocation.latitude,
                longitude: userLocation.longitude
            })
        }
    }, [userLocation]);

    useEffect(
        () => setMaxSearchDistance(Math.round(region.latitudeDelta * mapConfigs.DEG_KM_CONVERSION)),
        [region],
    );

    const onMarkerPressed = place => {
        navigation.navigate("mainScreen", {place})
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                region={region}
                onRegionChangeComplete={setRegion}
                maxDelta={mapConfigs.MAX_DELTA}
            >
                {userLocation &&
                <Marker
                    coordinate={userLocation}
                    title={"Eu"}
                />}
                {places &&
                places.map(p => <Marker
                    key={p.id}
                    coordinate={p.location}
                    title={p.name}
                    onPress={() => onMarkerPressed(p)}
                />)}
            </MapView>
            <MapGUI distance={maxSearchDistance} backToUserLocation={backToUserLocation}/>
        </View>
    );
};

const MapGUI = ({distance, backToUserLocation}) => (
    <View style={{width: "100%"}}>
        <View style={styles.distanceContainer}>
            <Text style={styles.distanceLabel}>Exibindo locais até</Text>
            <Text style={styles.distance}>{`${distance} km`}</Text>
        </View>
        <TouchableOpacity style={styles.centerContainer} onPress={backToUserLocation}>
            <Text style={styles.distanceLabel}>Voltar para minha Posição</Text>
        </TouchableOpacity>
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
        },
        centerContainer: {
            position: "absolute",
            bottom: 60,
            left: 40,
            padding: 5,
            alignItems: "center",
            backgroundColor: "rgba(0,0,0, 0.2)",
            borderRadius: 10,
            overflow: "hidden"
        },
    })
;

export default MapWindow;
