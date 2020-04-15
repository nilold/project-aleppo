import React, {useState, useCallback} from "react";
import {StyleSheet, FlatList} from "react-native";
import CategoryItem from "./CategoryItem";


const ItemList = ({items}) => {
    return (
        <FlatList
            horizontal
            data={items}
            renderItem={itemData => (
                <CategoryItem
                    category={itemData.item}
                    onSelect={() => {}}
                >
                </CategoryItem>
            )}
        />
    );

};

export default ItemList;
