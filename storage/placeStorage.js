import Firebase from "./firebase";
import Place from "../models/place";
import Product from "../models/product";

export const PLACES_COLLECTION = "places"
export const PRODUCTS_COLLECTION = "products"

const firebase = new Firebase()

export const findAllPlaces = async () => {
    const places = [];
    try{
        const placesSnapshot = await firebase.firestore()
            .collection(PLACES_COLLECTION)
            .get();

        placesSnapshot.forEach( doc => {
            const {name, latitude, longitude, address} = doc.data();
            const place = new Place(doc.id, name, {latitude, longitude}, address);
            places.push(place)
        })
        return places;
    }catch(error){
        console.warn(error)
    }
};

export const insertPlace = async place => {
    try{
        await firebase.firestore()
            .collection(PLACES_COLLECTION)
            .add(place.getObject());
    }catch(error){
        console.warn(error);
    }
}

export const findPlaceProducts = async placeId => {
    console.log("=============================================")
    const products = [];
    try{
        const productsSnapshot = await firebase.firestore()
            .collection(PLACES_COLLECTION)
            .doc(placeId)
            .collection(PRODUCTS_COLLECTION)
            .get();

        productsSnapshot.forEach( doc => {
            const {name, category, imageName, imageUrl, price} = doc.data();
            const product = new Product(doc.id, name, price, category, imageName, imageUrl, placeId);
            products.push(product)
        })
        return products;
    }catch(error){
        console.warn(error)
    }
};

export const insertProduct = async product => {
    try{
        await firebase.firestore()
            .collection(PLACES_COLLECTION).doc(product.placeId)
            .collection(PRODUCTS_COLLECTION)
            .add(product.getObject());
    }catch(error){
        console.warn(error);
    }
}