import Category from "../../models/category";
import {insertCategory} from "../categoriesStorage";

const categories = [
    new Category(null, "food", "food", "#50DCFF",null, null),
    new Category(null, "beverage", "bottle-wine", "#A4E447",null, null),
    new Category(null, "cleaning", "spray-bottle", "#FBA85B",null, null),
    new Category(null, "personal_hygiene", "tooth", "#C647E4",null, null),
    new Category(null, "animal", "cat", "#4AB8D4",null, null),
    new Category(null, "clothing", "tshirt-crew", "#50DCFF",null, null),
    new Category(null, "services", "worker", "#FBA85B",null, null),
    new Category(null, "books", "book-open-page-variant", "#4AB8D4",null, null),
    new Category(null, "other", "infinity", "#C647E4",null, null),
    new Category(null, "electronics", "gamepad-variant", "#A4E447",null, null),
    new Category(null, "accessories", "glasses", "#50DCFF",null, null),
]

categories.forEach(c => insertCategory(c));