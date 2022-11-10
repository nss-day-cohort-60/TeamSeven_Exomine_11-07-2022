// Displays values stored in transitory state
// Purchase button as click event that:
    // compare and confirm click event target to the button
    // add transitory values to Colony minerals
    // reset the transitory state
import { getTransient } from "./dataAccess.js"


export const Cart = () => {
    const transient = getTransient()
    let html=`
    <div class="spaceCart">
        <legend>Space Cart</legend>
        `
        if(transient.purchaseChoice){
            html +=`1 ton of ${transient.purchaseChoice} from ${transient.facilitiesChoice}.`
        }
        html += `<button id="button">Purchase Mineral</button>
    </div>`
    return html
}

// document.addEventListener("click", clickEvent => {
//     const transient = getTransient()
//     const facilities = getFacilities()
//     if (clickEvent.target.id === "button"){
//         console.log(transient)
//         for (const facility of facilities) {
//             if (facility.name === transient.facilitiesChoice) {
//                 if (facility.name === transient.facilitiesChoice && facilities.keys === transient.purchaseChoice){
//                 const changes = transient.purchaseChoice
//                 const variable = transient.purchaseChoice ++
//                 facilities.variable
//                 sendFacilities(changes)
//                 }
//             }
//         }
//     }
// })