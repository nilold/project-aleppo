import {combineReducers} from "redux";
import placesReducer from "./placesReducer";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
    places: placesReducer,
    products: productsReducer,
    categories: categoriesReducer
})