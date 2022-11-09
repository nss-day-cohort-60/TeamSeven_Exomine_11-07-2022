//Organizing html string functions
import { Governors, colonyStock } from "./Governors.js"
import { Facilities, FacilityMinerals } from "./Facilities.js"
import { Cart } from "./Cart.js"

export const Exomine = () => {
    const html=`
    <title id="title">Exomine</title>
    ${Governors()}
    ${colonyStock()}
    ${Facilities()}
    ${FacilityMinerals()}
    ${Cart()}
    `
    return html
}


