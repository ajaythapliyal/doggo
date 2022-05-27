export async function fetchDogs(breed, number=50){
    try{
        let dogResponse = await fetch(getEndpoint(breed, number))
        let dogs = await dogResponse.json();
        const dogsNormalized = []
        dogs.message.forEach(dog => {
        const breed = extractBreed(dog);
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
        return breeds.message.map(breed => breed.toLowerCase())   
    } catch (error) {
        throw Error("Fetching breed failed")
    }
}

function extractBreed(img){
    return img.split('/')[4].split('-')[0].toLowerCase();
}

function getEndpoint(breed, number){
    let url;
    if(breed){
        url = `https://dog.ceo/api/breed/${breed}/images/random/${number}`
    }
    else{
        url = `https://dog.ceo/api/breeds/image/random/${number}`
    }

    return url;
}