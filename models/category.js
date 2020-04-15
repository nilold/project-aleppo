export default class Category {
    constructor(id, name, icon, backgroundColor, imageName, imageUrl) {
        this.id = id;
        this.name = name;
        this.icon = icon
        this.imageName = imageName;
        this.imageUrl = imageUrl;
        this.backgroundColor = backgroundColor;
    }

    getObject() {
        return {
            id: this.id,
            name: this.name,
            icon: this.icon,
            backgroundColor: this.backgroundColor,
            imageName: this.imageName,
            imageUrl: this.imageUrl,
        }
    }
}