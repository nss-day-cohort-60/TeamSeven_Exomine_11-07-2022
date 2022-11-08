//Focused on rendering
import { Exomine } from "./Exomine.js"
const mainContainer = document.querySelector("#mainContainer")


const render = () => {
    fetchGovernors()
        .then(()=>fetchFacilities())
        .then(()=>fetchCart())
        .then(()=>{
            mainContainer.innerHTML = Exomine()
        })
}

render()
