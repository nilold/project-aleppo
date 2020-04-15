import React from "react";
import {View, Text, StyleSheet} from "react-native";

const EditProductScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>EditProductScreen</Text>
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

export default EditProductScreen;
