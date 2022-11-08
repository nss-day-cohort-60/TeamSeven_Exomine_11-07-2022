//Organizing html string functions
import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"


export const Exomine = () => {
    const html=`
    <title id="title">Exomine</title>
    ${Governors()}
    ${Facilities()}
    `
    return html
}
