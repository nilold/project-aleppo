import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from './Card';
import Colors from "../constants/Colors";

const CategoryItem = ({image, title, children, onSelect}) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card style={styles.productCard}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <MaterialCommunityIcons
                                name="food-apple" size={56} color="white"
                                />
                            <Text style={styles.title}>{"Alimentos"}</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    productCard: {
        width: 80,
        height: 90,
        margin: 5
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        backgroundColor: Colors.primary
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    details: {
        alignItems: 'center',
        height: '30%',
        padding: 1
    },
    title: {
        fontSize: 14,
        marginVertical: 1,
        color: 'white'
    },
});

export default CategoryItem;
