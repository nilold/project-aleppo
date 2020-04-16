import Place from "../../models/place";
import {insertPlace} from "../firebase";

const places = [
    new Place(null, "Verde Mar São Pedro", {
        latitude: -19.946184,
        longitude: -43.939266
    }, "R. Viçosa, 611 - São Pedro, Belo Horizonte - MG, 30330-160"),
    new Place(null, "Patio Savassi", {
        latitude: -19.940101,
        longitude: -43.933939
    }, "Av. do Contorno, 6061 - São Pedro, Belo Horizonte - MG, 30110-929")
]


// places.forEach(place => insertPlace(place))