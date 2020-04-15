import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import {FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_SENDER_ID} from "../env";
import Place from "../models/place";
import Product from "../models/product";

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "aleppo-cloud.firebaseapp.com",
    databaseURL: "https://aleppo-cloud.firebaseio.com",
    projectId: "aleppo-cloud",
    storageBucket: "aleppo-cloud.appspot.com",
    messagingSenderId: FIREBASE_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);

export const PLACES_COLLECTION = "places"
export const PRODUCTS_COLLECTION = "products"

export const findAllPlaces = async () => {
    const places = [];
    try{
        const placesSnapshot = await firebase.firestore()
            .collection(PLACES_COLLECTION)
            .get();

        placesSnapshot.forEach( doc => {
            console.log(doc.data())
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

export const getImageUrl = async imageName => {
    const PRODUCT_IMAGES_DIR = "/images/products/"
    const storage = firebase.storage();
    return await storage.ref(PRODUCT_IMAGES_DIR + imageName).getDownloadURL();
}
