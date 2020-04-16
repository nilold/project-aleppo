import * as firebase from "firebase";
import Category from "../models/category";

export const CATEGORIES_COLLECTION = "categories"



export const findAllCategories = async () => {
    const categories = [];
    try{
        const categoriesSnapshot = await firebase.firestore()
            .collection(CATEGORIES_COLLECTION)
            .get();

        categoriesSnapshot.forEach( doc => {
            const {name, icon, backgroundColor, imageName, imageUrl} = doc.data();
            const cat = new Category(doc.id, name, icon, backgroundColor, imageName, imageUrl);
            categories.push(cat)
        })
        return categories;
    }catch(error){
        console.warn(error)
    }
}

export const insertCategory = async category => {
    try{
        await firebase.firestore()
            .collection(CATEGORIES_COLLECTION)
            .add(category.getObject());
    }catch(error){
        console.warn(error);
    }
}