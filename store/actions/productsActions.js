export const FETCH_PLACE_PRODUCTS = "FETCH_PLACE_PRODUCTS";
import {findPlaceProducts} from "../../storage/firebase";

export const fetchPlaceProducts = placeId => {
    return async dispatch => {
        const placeProducts = await findPlaceProducts(placeId);
        dispatch({type: FETCH_PLACE_PRODUCTS, placeProducts})
    }
}

// import {createProducts} from "../../storage/localProducts";
// createProducts()