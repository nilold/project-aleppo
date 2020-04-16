import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import {FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_SENDER_ID} from "../env";

export default class Firebase{
    firebaseConfig = {
        apiKey: FIREBASE_API_KEY,
        authDomain: "aleppo-cloud.firebaseapp.com",
        databaseURL: "https://aleppo-cloud.firebaseio.com",
        projectId: "aleppo-cloud",
        storageBucket: "aleppo-cloud.appspot.com",
        messagingSenderId: FIREBASE_SENDER_ID,
        appId: FIREBASE_APP_ID,
        measurementId: "G-measurement-id",
    };

    static initialized = false

    constructor(){
        if(!Firebase.initialized){
            firebase.initializeApp(this.firebaseConfig);
        }
        this.firebase = firebase;
    }

    firestore(){
        return this.firebase.firestore()
    }
}
