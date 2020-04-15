import {FETCH_ALL_PLACES} from "../actions/placesActions";

const INITIAL_STATE = {
    allPlaces: [],
    nearbyPlaces: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_PLACES:
            return {...state, allPlaces: action.allPlaces}
        default:
            return state;
    }
}