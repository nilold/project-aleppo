import Place from "./place";

export default class Store extends Place {
    constructor(id, name, location, address, imageName, imageUrl, products, categories) {
        super(id, name, location, address, imageName, imageUrl, "store", categories);
        this.products = products;
        this.categories = new Set();
        products.forEach(p => this.categories.add(p.category))
    }

    // getObject() {
    //     return {...super.getObject(), products: this.this.products}
    // }
}