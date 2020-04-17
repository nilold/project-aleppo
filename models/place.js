export default class Place {
    constructor(id, name, location, address, imageName, imageUrl, type, categories=[]) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.address = address;
        this.imageName = imageName;
        this.imageUrl = imageUrl;
        this.type = type;
        this.categories = categories;
    }

    getObject() {
        return {
            id: this.id,
            name: this.name,
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            address: this.address,
            imageName: this.imageName,
            imageUrl: this.imageUrl,
            type: this.type,
            categories: this.categories
        }
    }
}