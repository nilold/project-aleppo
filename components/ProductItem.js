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
import Card from './Card';

const ProductItem = ({image, title, price, children, onSelect}) => {
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
                            <Image style={styles.image}
                                   source={image ? {uri: image} : require('../assets/icon.png')}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>${price.toFixed(2)}</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    productCard: {
        width: 250,
        height: 300,
        margin: 20,
        justifyContent: "flex-start"
    },
    touchable: {
        borderRadius: 10,
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        overflow: 'hidden'
    },
    image: {
        margin: 10,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    details: {
        alignItems: 'center',
        height: 100,
        padding: 5
    },
    title: {
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        fontSize: 14,
        color: '#888'
    }
});

export default ProductItem;
