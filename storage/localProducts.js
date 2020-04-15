import Product from "../models/product";
import {getImageUrl, insertProduct} from "./firebase";

const placeId = "YanWkMnHL31WIScWqBLV" // verdemar
// const placeId = "zAc9LMQBM9BUuYlZ2QKI" // apple market
const storageUri = "gs://aleppo-cloud.appspot.com"

const marketProducts = [
    new Product(null,
        "Heineken LT 350ml",
        3.59,
        "beverage",
        "heineken_lt_350.jpg",
        null,
        placeId),
    new Product(null,
        "Detergente Ipê Clear 500ml",
        1.29,
        "cleaning",
        "ipe_clear.jpg",
        null,
        placeId),
    new Product(null,
        "Detergente Ipê Neutro 500ml",
        1.29,
        "cleaning",
        "ipe_neutro.jpg",
        null,
        placeId),
    new Product(null,
        "Farinha Grano Tenero 1Kg",
        7.59,
        "food",
        "farinha_tenero_00.jpg",
        null,
        placeId),
    new Product(null,
        "Gim Ivy Ar 750ml",
        72.00,
        "beverage",
        "ivy_ar_750.jpg",
        null,
        placeId),
    new Product(null,
        "Gato João 5kg",
        29.90,
        "animal",
        "joao_5kg.jpeg",
        null,
        placeId),
    new Product(null,
        "Pizza Congelada Sadia 4 queijos",
        9.99,
        "food",
        "pizza_sadia_4_queijos.jpg",
        null,
        placeId),
    new Product(null,
        "Sabonete Protex",
        3.59,
        "personal_hygiene",
        "sabonete_protex.jpeg",
        null,
        placeId),
    new Product(null,
        "Tomate Italiano 1kg",
        11.59,
        "food",
        "tomate_italiano.jpg",
        null,
        placeId),
]

export const createProducts = () => marketProducts.forEach(async product => {
    product.imageUrl = await getImageUrl(product.imageName);
    insertProduct(product)}
    );