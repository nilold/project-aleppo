import React, {useState, useCallback} from "react";
import {View, Text, StyleSheet, ScrollView, RefreshControl, FlatList} from "react-native";
import CardItem from "./CardItem";

const ItemList = ({items, loadItems, navigation}) => {
    // const [isRefreshing, setIsRefreshing] = useState(false);

    // const internalLoadItems = useCallback(
    //     async () => {
    //         setIsRefreshing(true);
    //         await loadItems();
    //         setIsRefreshing(false);
    //     }
    // )

    const handleItemSelect = item => {
        console.log(item);
        if (item.type && item.type === "store") {
            navigation.push("mainScreen", {place: item, showStores: false, isMall: false})
        }
    }

    return (
        <FlatList
            horizontal
            data={items}
            renderItem={itemData => (
                <CardItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.name}
                    price={itemData.item.price}
                    onSelect={() => handleItemSelect(itemData.item)}
                >
                </CardItem>
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
    //                 <CardItem
    //                     image={itemData.item.imageUrl}
    //                     title={itemData.item.title}
    //                     price={itemData.item.price}
    //                     onSelect={() => {}}
    //                 >
    //                 </CardItem>
    //             )}
    //         />
    //
    //     </ScrollView>
    //
    // );
};


export default ItemList;
