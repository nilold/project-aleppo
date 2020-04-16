import Place from "./place";

export default class Mall extends Place {
    constructor(id, name, location, address, imageName, imageUrl, stores){
        super(id, name, location, address, imageName, imageUrl, "mall")
        this.stores = stores;
    }
}