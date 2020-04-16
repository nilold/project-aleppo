export default class Product {
    constructor(id, name, price, category, imageName, imageUrl, storeId, mallId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageName = imageName;
        this.imageUrl = imageUrl;
        this.storeId = storeId;
        this.mallId = mallId ? mallId: null;
    }

    getObject() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category,
            imageName: this.imageName,
            imageUrl: this.imageUrl,
            storeId: this.storeId,
            mallId: this.mallId,
        }
    }
}