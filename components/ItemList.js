import React, {useState, useCallback} from "react";
import {View, Text, StyleSheet, ScrollView, RefreshControl, FlatList} from "react-native";
import ProductItem from "./ProductItem";

const ItemList = ({items, loadItems}) => {
    // const [isRefreshing, setIsRefreshing] = useState(false);

    // const internalLoadItems = useCallback(
    //     async () => {
    //         setIsRefreshing(true);
    //         await loadItems();
    //         setIsRefreshing(false);
    //     }
    // )

    return (
        <FlatList
            horizontal
            data={items}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.name}
                    price={itemData.item.price}
                    onSelect={() => {}}
                >
                </ProductItem>
            )}
        />
    );

    // return (
    //     <ScrollView
    //         refreshControl={
    //             <RefreshControl
    //                 tintColor={"black"}
    //                 refreshing={isRefreshing}
    //                 onRefresh={loadItems}
    //             />
    //         }
    //         showsVerticalScrollIndicator={false}
    //         contentContainerStyle={{ flexGrow: 1, alignSelf: 'center' }}>
    //         <FlatList
    //             horizontal
    //             data={items}
    //             renderItem={itemData => (
    //                 <ProductItem
    //                     image={itemData.item.imageUrl}
    //                     title={itemData.item.title}
    //                     price={itemData.item.price}
    //                     onSelect={() => {}}
    //                 >
    //                 </ProductItem>
    //             )}
    //         />
    //
    //     </ScrollView>
    //
    // );
};


export default ItemList;
