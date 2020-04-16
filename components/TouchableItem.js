import React from 'react';
import {TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';

const TouchableItem = ({image, title, price, children, onPress}) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return <TouchableCmp onPress={onPress} useForeground>{children}</TouchableCmp>
};

export default TouchableItem;
