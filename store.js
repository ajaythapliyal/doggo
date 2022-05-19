class Store{
    images = [];
    breeds = [];

    IsImageEmpty(){
        return this.images.length === 0
    }
}

export const store = new Store();