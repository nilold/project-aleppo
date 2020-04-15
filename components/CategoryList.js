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
                    image={itemData.item.imageUrl}
                    title={itemData.item.name}
                    onSelect={() => {}}
                >
                </CategoryItem>
            )}
        />
    );

};

export default ItemList;
