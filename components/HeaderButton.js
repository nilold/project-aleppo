import React from "react";
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';
import {Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons"
import Colors from "../constants/Colors";

const HeaderButtonComponent = (props) => {
    return <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={25}
        color={Platform.OS === 'ios' ? Colors.primary : 'white'}
    />;
};
const CustomHeaderButton = ({onPress, iconName}) => (
    <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item title={"Add Place"}
              iconName={iconName}
              onPress={onPress}/>
    </HeaderButtons>
)

export default CustomHeaderButton;
