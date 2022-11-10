//Organizing html string functions
import { Governors, colonyStock } from "./Governors.js"
import { Facilities, FacilityMinerals } from "./Facilities.js"
import { Cart } from "./Cart.js"

export const Exomine = () => {
    const html=`
    <h1 id="title">Exomine</h1>
    <div class="dropdown_list">
        <div class="dropdown_container">
            ${Governors()}
            ${Facilities()}
            
        </div>
        <div class="colonyMineral">
        ${colonyStock()}
        </div>
    </div>
    
    <div class="mineralList_container">
        <div class="facMineral_container">   
           ${FacilityMinerals()}
      
           </div>
        <article class="button_container">
                ${Cart()}      
        </article>
    </div>
    `
    return html
}


