// Displays values stored in transitory state
// Purchase button as click event that:
    // compare and confirm click event target to the button
    // add transitory values to Colony minerals
    // reset the transitory state
import { getTransient } from "./dataAccess.js"

export const Cart = () => {
    const transient = getTransient()
    let html=`
    <legend>Space Cart</legend>
    `
    if(transient.purchaseChoice){
        html +=`1 ton of ${transient.purchaseChoice} from ${transient.facilitiesChoice}.`
    }
    html += `<button>Purchase Mineral</button>`
    return html
}
