import { fetchDogs } from './dog-service.js'
import { store } from './store.js'
import { render } from './view.js'

(function init(){
    subscriptions();
    render();
    fetchDogs().then(dogs => store.addDogs(dogs))
})()



/**
 * Subscribes store to view 
 */
function subscriptions(){
    store.subscribe(store.addDogs, render)
}