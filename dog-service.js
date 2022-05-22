export async function fetchDogs(number=50){
    try{
        let dogResponse = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        let dogs = await dogResponse.json();
        const images = {}
        dogs.message.forEach(dog => {
        const breed = dog.split('/')[4]
        const accuImages = images[breed];
        if(!accuImages){
            images[breed] = [dog];
        }
        else{
            images[breed].push(dog);
        }
        })
        return images
    }
    catch(e){
        throw Error("Fetching dogs failed")
    }

    // const dogs = await new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve([
    //             "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_5512.jpg",
    //             "https://images.dog.ceo/breeds/briard/n02105251_5985.jpg",
    //             "https://images.dog.ceo/breeds/dachshund/dog-2643027_640.jpg",
    //             "https://images.dog.ceo/breeds/terrier-fox/n02095314_2863.jpg",
    //             "https://images.dog.ceo/breeds/terrier-american/n02093428_4939.jpg",
    //             "https://images.dog.ceo/breeds/terrier-scottish/n02097298_12063.jpg"
    //         ])
    //     }, 3000)
    // })
}