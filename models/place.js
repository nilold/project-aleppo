export default class Place{
    constructor(id, name, location, address) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.address = address;
    }

    getConstructor(withId){
        const location = `{latitude:${this.location.latitude},longitude:${this.location.longitude}}`
        return `Place(${withId?`"${this.id}"`:"null"},"${this.name}",${location},"${this.address}")`
    }

    getObject(){
        return {
            id: this.id,
            name: this.name,
            latitude: this.location.latitude,
            longitude: this.location.longitude,
            address: this.address
        }
    }
}