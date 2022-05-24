export async function fetchDogs(number=50){
    try{
        let dogResponse = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        let dogs = await dogResponse.json();
        const images = []
        dogs.message.forEach(dog => {
        const breed = dog.split('/')[4]
        images.push({breed, dog})
        })
        return images
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