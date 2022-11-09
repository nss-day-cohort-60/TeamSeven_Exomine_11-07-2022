import {getGovernors, setGovernorsChoice } from "./dataAccess.js"

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

mainContainer.addEventListener("change", (event) => {
    if(event.target.id === "governorsList") {
        setGovernorsChoice(parseInt(event.target.value))
        // renderColony()
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    }
})
