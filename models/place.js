class Place{
    constructor(id, name, location, address) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.address = address;
    }

    getObject(){
        return {
            id: this.id,
            name: this.name,
            location: this.location,
            address: this.address
        }
    }
}