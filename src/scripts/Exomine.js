//Organizing html string functions
import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"


export const Exomine = () => {
    const html=`
    <h1 id="title">Exomine</h1>
    <div class="dropdown_list">
        <div class="dropdown_container">
            ${Governors()}
            ${Facilities()}
        </div>
        <div class="colonyMineral">
            <h2>Colony Minerals</h2>
        </div>
    </div>
    
    <div class="mineralList_container">
           <h2>Mineral List</h2>
        

        <article class="button_container">
                <h3>Space Cart</h3>
                <button id="purchaseButton">Purchase Mineral</button>       
        </article>
    </div>
    `
    return html
}


