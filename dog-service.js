export async function fetchDogs(number=50){
    try{
        let dogResponse = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        let doggos = await dogResponse.json();
        return doggos.message
    }
    catch(e){
        throw Error("Fetching dogs failed")
    }

    // return new Promise((resolve, reject)=>{
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