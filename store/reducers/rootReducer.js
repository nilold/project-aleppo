import {combineReducers} from "redux";
import placesReducer from "./placesReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
    places: placesReducer,
    products: productsReducer
})