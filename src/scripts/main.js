//Focused on rendering
import { fetchGovernors, fetchFacilities, fetchColonies, fetchFacilityMineralLog, fetchColonyMineralLog, fetchMinerals } from "./dataAccess.js"
import { Exomine } from "./Exomine.js"

const mainContainer = document.querySelector("#mainContainer")


const render = () => {
    fetchGovernors()
        .then(()=>fetchFacilityMineralLog())
        .then(()=>fetchMinerals())
        .then(()=>fetchColonyMineralLog())
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
