export async function fetchDogs(number=50){
    // try{
    //     let dogResponse = await fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    //     let doggos = await dogResponse.json();
    //     return doggos.message
    // }
    // catch(e){
    //     throw Error("Fetching dogs failed")
    // }

    return ["https://images.dog.ceo/breeds/collie-border/n02106166_685.jpg"]
}