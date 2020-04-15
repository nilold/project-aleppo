import React, {useState, useCallback} from "react";
import {FlatList} from "react-native";
import CategoryItem from "./CategoryItem";


const CategoryList = ({items, selectCategories}) => {
    const [selected, setSelected] = useState(new Map());

    const onSelect = useCallback(
        name => {
            const newSelected = new Map(selected);
            newSelected.set(name, !selected.get(name));
            setSelected(newSelected);
            const selectedNames = [];
            newSelected.forEach((v, k) => {
                if (v) selectedNames.push(k)
            });
            selectCategories(selectedNames)
        },
        [selected],
    );

    return (
        <FlatList
            horizontal
            data={items}
            extraData={selected}
            renderItem={i => (
                <CategoryItem
                    category={i.item}
                    selected={!!selected.get(i.item.name)}
                    onSelect={onSelect}
                >
                </CategoryItem>
            )}
        />
    );

};

export default CategoryList;
