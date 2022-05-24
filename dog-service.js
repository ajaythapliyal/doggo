export async function fetchDogs(number=50){
    try{
        let dogResponse = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        let dogs = await dogResponse.json();
        const dogsNormalized = []
        dogs.message.forEach(dog => {
        const breed = dog.split('/')[4]
        dogsNormalized.push({breed, image : dog})
        })
        return dogsNormalized
    }
    catch(e){
        throw Error("Fetching dogs failed")
    }
}

export async function fetchBreeds(){
    try {
        const breedsResponse = await fetch("https://dog.ceo/api/breeds/list")
        const breeds = await breedsResponse.json()
        return breeds.message   
    } catch (error) {
        throw Error("Fetching breed failed")
    }
}