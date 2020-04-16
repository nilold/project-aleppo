import Store from "../../models/store";
import Mall from "../../models/mall";
import Product from "../../models/product";
import {insertStoreInMallWithProducts, insertStoreWithProducts, insertPlace} from "../placeStorage";

const places = [
    new Store(null, "Verde Mar São Pedro", {
        latitude: -19.946184,
        longitude: -43.939266
    }, "R. Viçosa, 611 - São Pedro, Belo Horizonte - MG, 30330-160"),
    new Mall(null, "Patio Savassi", {
        latitude: -19.940101,
        longitude: -43.933939
    }, "Av. do Contorno, 6061 - São Pedro, Belo Horizonte - MG, 30110-929", null, null, [])
]

const patioPlaces = [
    new Store(null,
        "Levi's - Patio Savassi",
        {latitude: null, longitude: null},
        "Avenida do Contorno, 6061 - L2, Loja 312 - Savassi, Belo Horizonte - MG, 30110-042",
        "levis_patio_savassi.png",
        null,
        [
            new Product(null, "Calça Jeans Azul", 99.99, "clothing", "blue_jeans.jpg", null, null),
            new Product(null, "Calça Jeans Preta", 99.99, "clothing", "black_jeans.jpg", null, null),
            new Product(null, "Jaqueta Jeans", 199.99, "clothing", "jeans_jacket.jpg", null, null),
        ]
        ),
    new Store(null,
        "Samsonite - Patio Savassi",
        {latitude: null, longitude: null},
        "Av. do Contorno, 6061 - São Pedro, Belo Horizonte - MG, 30110-926",
        "samsonite_patio_savassi.png",
        null,
        [
            new Product(null, "Bolsa de Couro", 399.99, "accessories", "leather_bag.jpg", null, null),
            new Product(null, "Conjunto de Viagem Completo", 749.0, "accessories", "luggage_kit.jpg", null, null),
            new Product(null, "Mala de Alumínio", 199.99, "accessories", "aluminium_luggage.jpg", null, null),
        ]
    ),
    new Store(null,
        "Leitura - Patio Savassi",
        {latitude: null, longitude: null},
        "Av. do Contorno, 6061 - Lojas 235/236 - São Pedro, Belo Horizonte - MG, 30110-017",
        "leitura_patio_savassi.png",
        null,
        [
            new Product(null, "Livro: o mínimo que você precisa saber para não ser um idiota", 400.00, "books", "book_idiota.jpg", null, null),
            new Product(null, "Livro: O universo Numa Casca de Noz", 79.00, "books", "book_stephen.jpg", null, null),
            new Product(null, "Globo Terrestre", 119.50, "other", "globe.jpg", null, null),
            new Product(null, "Playstation 5", 150.00, "electronics", "ps5.jpg", null, null),
        ]
    ),
    new Store(null,
        "Espaco laser - Patio Savassi",
        {latitude: null, longitude: null},
        "Av. Nossa Sra. do Carmo, 116 - São Pedro, Belo Horizonte - MG, 30110-017",
        "espacolaser_patio_savassi.png",
        null,
        [
            new Product(null, "Depilação a Laser Perna", 1663.60, "services", "dep_perna.jpg", null, null),
            new Product(null, "Depilação a Laser Virilha", 1130.00, "services", "dep_virilha.jpg", null, null),
            new Product(null, "Depilação a Laser Faixa de Barba", 771.60, "services", "dep_virilha.jpg", null, null),
            new Product(null, "Depilação a Laser Torax", 1095.60, "services", "dep_torax.jpg", null, null),
            new Product(null, "Depilação a Laser Buço", 314.60, "services", "dep_buco.jpg", null, null),
            new Product(null, "Depilação a Laser Ânus", 350.60, "services", "dep_anus.jpg", null, null),
        ]
    ),
]


// places.forEach(place => insertPlace(place))

patioPlaces.forEach(p => insertStoreInMallWithProducts("zfAUKaQgRCE0GroydnlA", p))