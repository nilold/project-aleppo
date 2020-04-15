export default class Product {
    constructor(id, name, price, category, imageName, imageUrl, placeId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageName = imageName;
        this.imageUrl = imageUrl;
        this.placeId = placeId;
    }

    getConstructor(withId) {
        return `Product(${withId ? `"${this.id}"` : "null"},"${this.name}","${this.price}","${this.category}","${this.imageName}","${this.imageUrl}","${this.placeId}")`
    }

    getObject() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category,
            imageName: this.imageName,
            imageUrl: this.imageUrl,
            placeId: this.placeId
        }
    }
}