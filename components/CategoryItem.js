import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Card from './Card';
import Colors from "../constants/Colors";
import S from "../constants/Strings"
import TouchableItem from "./TouchableItem";

const CategoryItem = ({category, onSelect, selected}) => {
    return (
        <Card style={styles.productCard}>
            <View style={styles.touchable}>
                <TouchableItem onPress={() => onSelect(category.name)}>
                    <View>
                        <View style={{
                            ...styles.imageContainer,
                            backgroundColor: selected ? "black" : category.backgroundColor
                        }}>
                            <MaterialCommunityIcons
                                name={category.icon} size={56} color="white"
                            />
                            <Text style={styles.title}>{S.categories[category.name]}</Text>
                        </View>
                    </View>
                </TouchableItem>
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
