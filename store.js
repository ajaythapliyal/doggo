class Store{
    images = [];
    breeds = [];
    observers = new Map();

    IsImageEmpty(){
        return this.images.length === 0
    }

    addDogs(dogs){
        this.images.push(...dogs);
        this.observers.get(this.addDogs).forEach(observer => observer(this.images))
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