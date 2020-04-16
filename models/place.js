export default class Place {
    constructor(id, name, location, address, imageName, imageUrl, category) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.address = address;
        this.imageName = imageName;
        this.imageUrl = imageUrl;
        this.category = category;
    }

    getConstructor(withId) {
        const location = `{latitude:${this.location.latitude},longitude:${this.location.longitude}}`
        return `Place(${withId ? `"${this.id}"` : "null"},"${this.name}",${location},"${this.address}","${this.imageName}","${this.imageUrl}","${this.category}")`
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
            category: this.category,
        }
    }
}