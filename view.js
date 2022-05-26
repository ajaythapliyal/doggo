import { fetchDogs } from "./dog-service.js";
import { store } from "./store.js";

const main = document.querySelector("main");
const body = document.querySelector("body");
const input = document.querySelector("input");

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


export function render(dogs){
    if (!dogs || dogs.length === 0){
        return showSpinner()
    }
    removeAllSpinners();
    const dogImages =  dogs.reduce((accu, dog)=>{
        return `${accu}
        <img src="${dog.image}" loading="lazy">`
    }, "")
    document.querySelector("main").innerHTML = dogImages;
    setInfiniteScroll();
}

export function filter(){
    let scheduledCall;
    return function debouncedFilter(event){
        if(scheduledCall){
            clearTimeout(scheduledCall)
        }
        scheduledCall = setTimeout(()=>{
            const normalizedBreed = event.target.value.trim() 
            store.filter(normalizedBreed);
            if(store.includesBreed(normalizedBreed)){
                fetchDogs(normalizedBreed)
            .then(dogs => store.addDogs(dogs))
            }
        }, 2000);
    }
}


export function setInfiniteScroll(){
    window.addEventListener('scroll', infiniteScroll)
}

export function unsetInfiniteScroll(){
    window.removeEventListener('scroll', infiniteScroll)
}

export function setFilterHandler(){
    input.addEventListener('keyup', filter())
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
            fetchDogs(store.filterBreed).then(dogs => store.addDogs(dogs));
        }
}