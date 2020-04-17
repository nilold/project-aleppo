import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import Card from './Card';
import TouchableItem from "./TouchableItem";

const CardItem = ({image, title, price, children, onSelect}) => {
    return (
        <Card style={styles.productCard}>
            <View style={styles.touchable}>
                <TouchableItem onPress={onSelect}>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image}
                                   source={image ? {uri: image} : require('../assets/icon.png')}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{title}</Text>
                            {price && <Text style={styles.price}>${price.toFixed(2)}</Text>}
                        </View>
                    </View>
                </TouchableItem>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    productCard: {
        width: 250,
        margin: 20,
        alignSelf: "flex-start"
    },
    touchable: {
        borderRadius: 10,
        width: "100%",
    },
    container: {
        height: 330
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        overflow: 'hidden'
    },
    image: {
        margin: 10,
        height: '100%',
        resizeMode: 'contain'
    },
    details: {
        height: "30%",
        alignItems: 'center',
        padding: 5
    },
    title: {
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        fontSize: 16,
        color: '#888'
    }
});

export default CardItem;
