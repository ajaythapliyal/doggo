import { fetchDogs } from './dog-service.js'
import { store } from './store.js'

(function init(){
    fetchDogs();
    if(store.IsImageEmpty){
        console.log("store is empty")
    }
})()


function showSpinner(){
    
}