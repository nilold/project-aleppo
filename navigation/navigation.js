import * as React from 'react';
import {Platform} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import MapScreen from "../screens/MapScreen";
import MainScreen from "../screens/MainScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

import Colors from "../constants/Colors";

const defaultHeaderOptions = {
    title: 'My home',
        headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "white" : Colors.primary,
    },
    headerTintColor: Platform.OS === "ios" ? Colors.primary: "white",
        headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const mapScreenOptions = {
    ...defaultHeaderOptions,
    title: "Promo App"
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="mapScreen" component={MapScreen} options={mapScreenOptions}/>
        <Stack.Screen name="mainScreen" component={MainScreen} options={defaultHeaderOptions}/>
        <Stack.Screen name="productDetail" component={ProductDetailScreen} options={defaultHeaderOptions}/>
    </Stack.Navigator>
);

const DrawerNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Map" component={StackNavigator}/>
    </Drawer.Navigator>
);


const Navigator = () => (
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
);

export default Navigator;