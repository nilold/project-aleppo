import {FETCH_CATEGORIES} from "../actions/categoriesActions";

const INITIAL_STATE = {
    categories: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, categories: action.categories}
        default:
            return state;
    }
}