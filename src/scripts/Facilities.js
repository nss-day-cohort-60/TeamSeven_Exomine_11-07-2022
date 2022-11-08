//<select> of facility names IF governor drop down<select> has changed.
//display available minerals as radio buttons when "change" eventListener happens.
//change events for radio buttons that adds 1 ton to transitory state (cart)
import { getFacilities, getTransient } from "./dataAccess.js"


const governorsList = document.querySelector("#governorsList")


// document.dispatchEvent(new CustomEvent("stateChanged"))

// governorsList.addEventListener("change", changeEvent => {
//     if (transientState.governor) {
//         // Get what the user typed into the form fields
//         const userFacility = document.querySelector("input[name='chooseFacility']").value
//         const governor = getCart()
        
//         // Make an object out of the user input
//         const dataToSendToAPI = {
//             chosenGovernor: governor,
//             chosenFacility: userFacility,
//         }
        
//         // Send the data to the API for permanent storage
//         // sendRequest(dataToSendToAPI)
//     }
// })



// export const Facilities = () => {
//     const facilities = getFacilities()
//     const transient = getTransient()

//     let html = `<label for="chooseFacility">Choose a Facility</label>
//     <select id="facility" name="chooseFacility" value="1">
//     <option value="0">Choose a Facility</option>`
    
//     if (transient.governorsChoice) {
//         for (const facility of facilities) {
//             html += `
//                     <option name="chooseFacility" value="${facility.id}">${facility.name}</option>
//                     `
            
//     }
//     html += `</select>`
//     } else {
//         html += `Please Select a Governor Before Choosing a Facility </select>`
//     }
//     return html
// }

export const Facilities = () => {
    const facilities = getFacilities()
    const transient = getTransient()
    let html = ``

    if(transient.governorsChoice){
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