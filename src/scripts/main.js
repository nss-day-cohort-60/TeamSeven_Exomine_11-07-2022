//Focused on rendering
import { fetchGovernors, fetchFacilities, fetchColonies } from "./dataAccess.js"
import { Exomine } from "./Exomine.js"

const mainContainer = document.querySelector("#mainContainer")


const render = () => {
    fetchGovernors()
        .then(()=>fetchFacilities())
        .then(()=>fetchColonies())
        .then(()=>{
            mainContainer.innerHTML = Exomine()
        })
}

render()

mainContainer.addEventListener("stateChanged", 
(event) => { 
    render()
})
