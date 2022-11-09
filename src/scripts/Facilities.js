//<select> of facility names IF governor drop down<select> has changed.
//display available minerals as radio buttons when "change" eventListener happens.
//change events for radio buttons that adds 1 ton to transitory state (cart)
import { getFacilities, getTransient } from "./dataAccess.js"
/*
const governorsList = document.querySelector("#governorsList")


// document.dispatchEvent(new CustomEvent("stateChanged"))

governorsList.addEventListener("change", changeEvent => {
    if () {
        // Get what the user typed into the form fields
        const userFacility = document.querySelector("input[name='chooseFacility']").value
       

        // Make an object out of the user input
        const dataToSendToAPI = {
            chosenGovernor: governor,
            chosenFacility: userFacility,
        }

        // Send the data to the API for permanent storage
     
    }
})
*/ 

export const Facilities = () => {
    const facilities = getFacilities()
    const transient = getTransient()
    let html = ""

    if(transient.cart.governorsChoice){
        html+=`<label for="chooseFacility">Choose a Facility</label>
        <select id="facility" name="chooseFacility" value="1">
        <option value="0">Choose a Facility</option>
        ${facilities.map(facility=>{
            return `<option name="chooseFacility" value="${facility.id}">${facility.name}</option>`
        })}
        </select>`
    }else {
        html+=`<label for="chooseFacility">Choose a Facility</label>
        <select id="facility" name="chooseFacility" value="1">
        <option value="0">First, Choose a Governor</option>
        </select>`
    }
    return html
}
