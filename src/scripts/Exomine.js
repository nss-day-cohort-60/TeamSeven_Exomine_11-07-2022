//Organizing html string functions
import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"
import { setGovernorsChoice } from "./dataAccess.js"


export const Exomine = () => {
    const html=`
    <title id="title">Exomine</title>
    ${Governors()}
    ${Facilities()}
    `
    return html
}


document.addEventListener("change", (event) => {
    if(event.target.name === "governor") {
        setGovernorsChoice(parseInt(event.target.value))
        // renderColony()
        document.dispatchEvent(new CustomEvent("stateChanged"))

    }
})
