export default class Category {
    constructor(id, name, icon, imageName, imageUrl) {
        this.id = id;
        this.name = name;
        this.icon = icon
        this.imageName = imageName;
        this.imageUrl = imageUrl;
    }

    getObject() {
        return {
            id: this.id,
            name: this.name,
            icon: this.icon,
            imageName: this.imageName,
            imageUrl: this.imageUrl,
        }
    }
}