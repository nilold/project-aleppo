import Product from "../../models/product";
import {insertProduct} from "../placeStorage";
import {findImageUrl} from "../firebaseStorage";

const sstoreId = "YanWkMnHL31WIScWqBLV" // verdemar
// const sstoreId = "zAc9LMQBM9BUuYlZ2QKI" // apple market
const storageUri = "gs://aleppo-cloud.appspot.com"

const marketProducts = [
    new Product(null,
        "Heineken LT 350ml",
        3.59,
        "beverage",
        "heineken_lt_350.jpg",
        null,
        sstoreId),
    new Product(null,
        "Detergente Ipê Clear 500ml",
        1.29,
        "cleaning",
        "ipe_clear.jpg",
        null,
        sstoreId),
    new Product(null,
        "Detergente Ipê Neutro 500ml",
        1.29,
        "cleaning",
        "ipe_neutro.jpg",
        null,
        sstoreId),
    new Product(null,
        "Farinha Grano Tenero 1Kg",
        7.59,
        "food",
        "farinha_tenero_00.jpg",
        null,
        sstoreId),
    new Product(null,
        "Gim Ivy Ar 750ml",
        72.00,
        "beverage",
        "ivy_ar_750.jpg",
        null,
        sstoreId),
    new Product(null,
        "Gato João 5kg",
        29.90,
        "animal",
        "joao_5kg.jpeg",
        null,
        sstoreId),
    new Product(null,
        "Pizza Congelada Sadia 4 queijos",
        9.99,
        "food",
        "pizza_sadia_4_queijos.jpg",
        null,
        sstoreId),
    new Product(null,
        "Sabonete Protex",
        3.59,
        "personal_hygiene",
        "sabonete_protex.jpeg",
        null,
        sstoreId),
    new Product(null,
        "Tomate Italiano 1kg",
        11.59,
        "food",
        "tomate_italiano.jpg",
        null,
        sstoreId),
]

marketProducts.forEach(async product => {
    product.imageUrl = await findImageUrl("products", product.imageName);
    insertProduct(product)}
    );