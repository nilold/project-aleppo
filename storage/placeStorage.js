import Firebase from "./firebase";
import Place from "../models/place";
import Product from "../models/product";
import {findImageUrl} from "./firebaseStorage";

export const PLACES_COLLECTION = "places"
export const PRODUCTS_COLLECTION = "products"

const firebase = new Firebase()

export const findAllPlaces = async () => {
    const places = [];
    try {
        const placesSnapshot = await firebase.firestore()
            .collection(PLACES_COLLECTION)
            .get();

        placesSnapshot.forEach(doc => {
            const {name, latitude, longitude, address, imageName, imageUrl, category} = doc.data();
            const place = new Place(doc.id, name, {latitude, longitude}, address, imageName, imageUrl, category);
            places.push(place)
        })
        return places;
    } catch (e) {
        console.warn(e)
        throw e;
    }
};

export const insertPlace = async place => {
    try {
        await firebase.firestore()
            .collection(PLACES_COLLECTION)
            .add(place.getObject());
    } catch (e) {
        console.warn(e);
        throw e;
    }
}

export const insertStoreWithProducts = async store => {
    try {
        store.imageUrl = await findImageUrl("places", store.imageName)
        firebase.firestore()
            .collection(PLACES_COLLECTION)
            .add(store.getObject())
            .then(docRef => {
                store.products.forEach(async p => {
                    p.storeId = docRef.id
                    p.imageUrl = await findImageUrl("products", p.imageUrl)
                    await firebase.firestore()
                        .collection(PRODUCTS_COLLECTION)
                        .add(p.getObject())
                })
            })
    } catch (e) {
        console.warn(e);
        throw e;
    }
}

export const insertStoreInMallWithProducts = async (mallId, store) => {
    try {
        store.imageUrl = await findImageUrl("places", store.imageName)
        firebase.firestore()
            .collection(PLACES_COLLECTION)
            .doc(mallId)
            .collection(PLACES_COLLECTION)
            .add(store.getObject()).then(docRef => {
            store.products.forEach(async p => {
                p.storeId = docRef.id
                p.mallId = mallId
                p.imageUrl = await findImageUrl("products", p.imageName)
                await firebase.firestore()
                    .collection(PRODUCTS_COLLECTION)
                    .add(p.getObject())
            })
        });


    } catch (e) {
        console.warn(e);
        throw e;
    }
}


function mapDocToProduct(doc) {
    const {name, category, imageName, imageUrl, price, placeId, mallId} = doc.data();
    return new Product(doc.id, name, price, category, imageName, imageUrl, placeId, mallId);
}

export const findStoreProducts = async storeId => {
    console.log("Find place products");
    const products = [];
    try {
        const productsSnapshot = await firebase.firestore()
            .collection(PRODUCTS_COLLECTION)
            .where("storeId", "==", storeId)
            .get();

        productsSnapshot.forEach(doc => {
            products.push(mapDocToProduct(doc, storeId))
        })
        return products;
    } catch (error) {
        console.warn(error)
        throw e;
    }
};

export const findMallProducts = async mallId => {
    const products = [];
    try {
        const productsSnapshot = await firebase.firestore()
            .collection(PRODUCTS_COLLECTION)
            .where("mallId", "==", mallId)
            .get()

        productsSnapshot
            .forEach(doc => products.push(mapDocToProduct(doc, mallId)))

        return products;
    } catch (e) {
        console.warn(e);
        throw e;
    }
}

export const insertProduct = async product => {
    try {
        await firebase.firestore()
            .collection(PRODUCTS_COLLECTION)
            .add(product.getObject());
    } catch (e) {
        console.warn(e);
        throw e;
    }
}