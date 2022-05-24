import { fetchDogs } from "./dog-service.js";
import { store } from "./store.js";

const main = document.querySelector("main");
const body = document.querySelector("body");

export function showSpinner(){
   main.innerHTML = getSpinner();
}

export function appendSpinner(){
    if(!body.lastElementChild.classList.contains('spinner')){
        body.innerHTML+=getSpinner();
        unsetInfiniteScroll();
    }
}

export function getSpinner(){
    return `<div class="spinner">
                <div class="inner-spinner"></div>
            </div>`
}


export function removeAllSpinners(){
    body.querySelectorAll('.spinner').forEach(spinner => spinner.remove())
}


export function render(images){
    if (!images || images.length === 0){
        return showSpinner()
    }
    removeAllSpinners();
    const imageView =  images.reduce((accu, image)=>{
        return `${accu}
        <img src="${image}" loading="lazy">`
    }, "")
    document.querySelector("main").innerHTML = imageView;
    setInfiniteScroll();
}


export function setInfiniteScroll(){
    window.addEventListener('scroll', infiniteScroll)
}

export function unsetInfiniteScroll(){
    window.removeEventListener('scroll', infiniteScroll)
}


function infiniteScroll(){
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    const bottomToScroll = scrollHeight - (window.pageYOffset+document.documentElement.clientHeight)
        if (bottomToScroll < 100){
            appendSpinner()
            fetchDogs().then(dogs => store.addDogs(dogs));
        }
}