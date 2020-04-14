export const FETCH_ALL_PLACES = "FETCH_ALL_PLACES";
import {findAllPlaces} from "../storage/firebase";

export const fetchPlaces = () => {
    return async dispatch => {
        const places = await findAllPlaces()
        dispatch({type: FETCH_ALL_PLACES, allPlaces: places})
    }
}