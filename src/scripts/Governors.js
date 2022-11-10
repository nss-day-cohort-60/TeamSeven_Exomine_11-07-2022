import {getGovernors, setGovernorsChoice, getTransient, getColonies } from "./dataAccess.js"

//creating drop down <select> with list of all governor.name
//we need'a getter
//generate Colony Mineral list based on governor.colonyId fk IF greater than 0.
const mainContainer = document.querySelector("#mainContainer")

export const Governors = () => {
    const govna = getGovernors()

    let html = `
        <ul>
            <label for="governor">Choose a Governor:</label>
            <select id="governorsList">
                <option name="governor">Governors</option>
                ${govna.map(
                    gov => {
                        return `<option value="${gov.id}" name="governor">${gov.name}</option>`
                    }
                ).join("")
            }
            </select>
        </ul>`

    return html
    
}

export const colonyStock = () => {
    const transient = getTransient()
    const governors = getGovernors()
    const colonies = getColonies()
    let html = ""

    if(transient.governorsChoice){
        for(const governor of governors){
            if(transient.governorsChoice === governor.id){
                for(const colony of colonies){
                    if(governor.colonyId === colony.id){
                    html += `<legend>${colony.name} Mineral Stock</legend>
                            <ul>
                                <li>Iron: ${colony.ironStock} tons</li>
                                <li>Transparent Aluminum: ${colony.tAluminumStock} tons</li>
                                <li>Chromium: ${colony.chromiumStock} tons</li>
                                <li>Beryllium: ${colony.berylliumStock} tons</li>
                                <li>Benadryl: ${colony.benadrylStock} tons</li>
                            </ul>`
                        }
                    }}
                }
            }else{
                html += `
                <legend>Mineral Stock</legend>
                `
    }
    return html
}

mainContainer.addEventListener("change", (event) => {
    if(event.target.id === "governorsList") {
        setGovernorsChoice(parseInt(event.target.value))
        // renderColony()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})

export const Colonies = () => { 

    

}
