export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
import {findAllCategories} from "../../storage/firebase";

export const fetchCategories = () => {
    return async dispatch => {
        const categories = await findAllCategories()
        dispatch({type: FETCH_CATEGORIES, categories})
    }
}