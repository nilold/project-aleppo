import {FETCH_ALL_PLACES, FETCH_STORES} from "../actions/placesActions";

const INITIAL_STATE = {
    allPlaces: [],
    stores: [],
    nearbyPlaces: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_PLACES:
            return {...state, allPlaces: action.allPlaces}
        case FETCH_STORES:
            return {...state, stores: action.stores}
        default:
            return state;
    }
}