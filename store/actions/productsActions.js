export const FETCH_PLACE_PRODUCTS = "FETCH_PLACE_PRODUCTS";
import {findStoreProducts, findMallProducts} from "../../storage/placeStorage";

export const fetchPlaceProducts = (place) => {
    return async dispatch => {
        try {
            const placeProducts = place.type === "mall" ?
                await findMallProducts(place.id)
                :
                await findStoreProducts(place.id);

            dispatch({type: FETCH_PLACE_PRODUCTS, placeProducts})
        } catch (e) {
            throw e;
        }
    }
}

