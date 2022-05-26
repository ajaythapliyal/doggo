class Store{
    dogs = [];
    breeds = [];
    filterBreed = undefined
    observers = new Map();

    IsImageEmpty(){
        return this.dogs.length === 0
    }

    addDogs(dogs){
        this.dogs.push(...dogs)
        const filteredDogs = this.filterBreed ? this.dogs.filter(dog => dog.breed === this.filterBreed): this.dogs
        this.observers.get(this.addDogs)?.forEach?.(observer => observer(filteredDogs))
    }

    get filteredDogs(){
        return  this.filterBreed ? this.dogs.filter(dog => dog.breed === this.filterBreed): this.dogs
    }

    addBreeds(breeds){
        this.breeds.push(...breeds)
        this.observers.get(this.addBreeds)?.forEach?.(observer => observer())
    }

    filter(filterBreed){
        this.filterBreed = filterBreed?.length ? filterBreed: undefined
        const filteredDogs = this.filterBreed ? this.dogs.filter(dog => dog.breed === this.filterBreed):this.dogs
        this.observers.get(this.filter)?.forEach?.(observer => observer(filteredDogs))
        
    }

    includesBreed(breed){
        return Boolean(this.breeds.includes(breed))
    }

    subscribe(func, observer){
        if(!this.observers.get(func)){
            this.observers.set(func, [observer])
            return
        }
        this.observers.get(func).push(observer)
    }
}

export const store = new Store();