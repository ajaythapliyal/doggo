import { fetchBreeds, fetchDogs } from './dog-service.js'
import { store } from './store.js'
import { render, setFilterHandler } from './view.js'

(function init(){
    subscriptions();
    render();
    setFilterHandler();
    fetchDogs().then(dogs => store.addDogs(dogs))
    fetchBreeds().then(breeds => store.addBreeds(breeds))
})()



/**
 * Subscribes store to view 
 */
function subscriptions(){
    store.subscribe(store.addDogs, render)
    store.subscribe(store.filter, render)
}