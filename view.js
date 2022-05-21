const main = document.querySelector("main");

export function showSpinner(){
   main.innerHTML = `<div class="spinner">
                        <div class="inner-spinner"></div>
                    </div>`
}


export function render(images){
    if (!images || images.length === 0){
        return showSpinner()
    }
    const imageView =  images.reduce((accu, image)=>{
        return `${accu}
        <img src=${image} loading="lazy">`
    }, "")
    
    main.innerHTML = imageView
}