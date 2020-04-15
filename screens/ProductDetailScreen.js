import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ProductDetailScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>ProductDetailScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default ProductDetailScreen;
