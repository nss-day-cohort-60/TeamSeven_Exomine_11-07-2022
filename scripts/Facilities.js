//<select> of facility names IF governor drop down<select> has changed.
//display available minerals as radio buttons when "change" eventListener happens.
//change events for radio buttons that adds 1 ton to transitory state (cart)
import { sendRequest } from "./dataAccess.js"
import { transientCart } from "./dataAccess.js"
import { selectedGovernor } from "./dataAccess.js"
import { getFacilities } from "./dataAccess.js"

const facilities = getFacilities()
const governor = selectedGovernor()

const mainContainer = document.querySelector("#container")


// document.dispatchEvent(new CustomEvent("stateChanged"))

mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "governor") {
        // Get what the user typed into the form fields
        const userFacility = document.querySelector("input[name='chooseFacility']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            chosenGovernor: governor,
            chosenFacility: userFacility,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})




export const Facilities = () => {
    let html = `<select id="facility" name="chooseFacility" value="1">`
    
    if (transientCart.governors) {
        for (const facility of facilities) {
            html += `
                    <option value="0">Choose a Facility</option>
                    <option name="chooseFacility" value="${facility.id}">${facility.name}</option>
                    `
            
    }
    html += `</select>`
    } else {
        html += `Please Select a Governor Before Choosing a Facility </select>`
    }
    return html
}
