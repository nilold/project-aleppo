import {FETCH_PLACE_PRODUCTS} from "../actions/productsActions";

const INITIAL_STATE = {
    placeProducts: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PLACE_PRODUCTS:
            return {...state, placeProducts: action.placeProducts}
        default:
            return state;
    }
}