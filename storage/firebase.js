import * as firebase from "firebase/app";
import "firebase/firestore";
import {FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_SENDER_ID} from "../env";
import Place from "../models/place";

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

export const findAllPlaces = async () => {
    const places = [];
    try{
        const placesSnapshot = await firebase.firestore().collection(PLACES_COLLECTION).get();
        placesSnapshot.forEach( doc => {
            const {name, latitude, longitude, address} = doc.data();
            places.push(new Place(doc.id, name, {latitude, longitude}, address))
        })
        return places;
    }catch(error){
        console.warn(error)
    }
};