export const FETCH_ALL_PLACES = "FETCH_ALL_PLACES";
export const ADD_PLACE = "ADD_PLACE";

import {findAllPlaces, insertPlace} from "../../storage/placeStorage";


// This function should use some sort of local caching
// The places do not change very often, and the products of each place should be fetched on demand
export const fetchPlaces = () => {
    return async dispatch => {
        const places = await findAllPlaces()
        dispatch({type: FETCH_ALL_PLACES, allPlaces: places})
    }
}

export const addPlace = (place) => {
    return async dispatch => {
        await insertPlace(place);
        dispatch({type: ADD_PLACE, place: place})
    }
}
