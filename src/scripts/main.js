//Focused on rendering
import { Exomine } from "./Exomine.js"
import { fetchGovernors, fetchFacilities } from "./dataAccess.js"
const mainContainer = document.querySelector("#mainContainer")


const render = () => {
    fetchGovernors()
        .then(()=>fetchFacilities())
        .then(()=>{
            mainContainer.innerHTML = Exomine()
        })
}

render()

mainContainer.addEventListener("stateChanged", 
(event) => { 
    render()
})
