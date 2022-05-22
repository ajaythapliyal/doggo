class Store{
    images = {};
    // breeds = [];
    observers = new Map();

    IsImageEmpty(){
        return this.images.length === 0
    }

    addDogs(dogs){
        Object.entries(dogs).forEach(([breed, breedImages])=> {
            const storedBreedImages = this.images[breed];
            if(!storedBreedImages){
                this.images[breed] = breedImages;
                return
            }
            storedBreedImages.push(...breedImages)
        })
        this.observers.get(this.addDogs).forEach(observer => observer(Object.values(this.images).flat()))
    }

    subscribe(func, observer){
        if(!this.observers.get(func)){
            this.observers.set(func, [observer])
            return
        }
        this.observers,get(func).push(observer)
    }
}

export const store = new Store();