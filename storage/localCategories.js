import Category from "../models/category";
import {insertCategory} from "./firebase";

const categories = [
    new Category(null, "food", "food", "#50DCFF",null, null),
    new Category(null, "beverage", "bottle-wine", "#A4E447",null, null),
    new Category(null, "cleaning", "spray-bottle", "#FBA85B",null, null),
    new Category(null, "personal_hygiene", "tooth", "#C647E4",null, null),
    new Category(null, "animal", "cat", "#4AB8D4",null, null),
]

export const createCategories = () => categories.forEach(c => insertCategory(c));