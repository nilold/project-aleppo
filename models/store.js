import Place from "./place";

export default class Store extends Place{
    constructor(id, name, location, address, imageName, imageUrl, products) {
        super(id, name, location, address, imageName, imageUrl, "store");
        this.products = products;
    }
}